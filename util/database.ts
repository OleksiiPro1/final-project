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
