import camelCase from 'camelcase-keys';
import camelcaseKeys from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

// Type needed for the connection function below
declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres();
  }
  const sql = globalThis.postgresSqlClient;
  return sql;
}

const sql = connectOneTimeToDatabase();



export async function getCourses() {
const courses = await sql`
SELECT * FROM courses
`;
return courses.map((course) => camelCase(course));
}

export async function getCourse(id: number) {
  console.log(id)
  const [course] = await sql`
  SELECT
  *
  FROM
  courses
  WHERE
  id = ${id}
  `;
return camelCase(course);
}

export const missionReactDatabase = [
  {
    id: '1',
    planet: 'HTML planet',
    price: '100',
    description: 'Welcome to planet HTML. For all human',
  },
  {
    id: '2',
    planet: 'CSS planet',
    price: '200',
    description: 'Welcome to planet CSS. For human who know HTML',
  },
  {
    id: '3',
    planet: 'JAVASCRIPT planet',
    price: '600',
    description: 'Welcome to planet JAVASCRIPT. For human who know HTML, CSS',
  },
  {
    id: '4',
    planet: 'REACT planet',
    price: '500',
    description: 'Welcome to planet REACT. For human who know HTML, CSS, JAVASCRIPT',
  }
];

export type User = {
  id: number;
  username: string;
};

type getUserWithPasswordHash = User &  {
  passwordHash: string;
}

export async function createUser(username: string, passwordHash: string) {
  const [user] = await sql<[User]>`
INSERT INTO users
    (username, password_hash)
  VALUES
    (${username}, ${passwordHash})
  RETURNING
    id,
    username
  `;
  return camelcaseKeys (user);
}

export async function getUserByUsername(username: string) {
  if (!username) return undefined;
  const [user] = await sql<[User | undefined]>`
  SELECT
    id,
    username
  FROM
    users
  WHERE
    username = ${username}
`;
return user && camelcaseKeys(user);

}

export async function getUserById(userId: number) {
  if (!userId) return undefined;
  const [user] = await sql<[User | undefined]>`
  SELECT
    id,
    username
  FROM
    users
  WHERE
    id = ${userId}
`;
return user && camelcaseKeys(user);

}


export async function getUserWithPasswordHashUsername(username: string) {
  if (!username) return undefined;
  const [user] = await sql<[getUserWithPasswordHash | undefined]>`
  SELECT
    *
  FROM
    users
  WHERE
    username = ${username}
`;
return user && camelcaseKeys(user);

}

type Session = {
  id: number;
  token: string;

}

export async function createSession(token: string, userId: User['id']) {
  const [session] = await sql<[Session]>`
  INSERT INTO sessions
      (token, user_id)
    VALUES
      (${token}, ${userId})
    RETURNING
      id,
      token
    `;

    return camelcaseKeys(session);
}

export async function getUserByValidSessionToken(token: string) {
  if(!token) return undefined;

  const [user] = await sql<[User | undefined]>`
  SELECT
  users.id,
  users.username
  FROM users,
  sessions
  WHERE sessions.token = ${token}
  AND sessions.user_id = users.id AND
  sessions.expiry_timestamp > now();
  `;

return user && camelcaseKeys(user);

}

export async function deleteSessionByToken(token: string) {
  const [session] = await sql<[Session | undefined]>`
  DELETE FROM sessions

  WHERE sessions.token = ${token}
  RETURNING *
  `;


    return session && camelcaseKeys(session);
}

export async function deleteExpiredSession() {
  const sessions = await sql<[Session []]>`
  DELETE FROM sessions

  WHERE expiry_timestamp < now()
  RETURNING *
  `;

return sessions.map((session) => camelCase(session));

}