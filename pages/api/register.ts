import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { createUser, getUserByUsername } from '../../util/database';

export type RegisterResponseBody =
  | {
      errors: {
        message: string;
      }[];
    }
  | { user: { id: number } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponseBody>,
) {

  if(
    (typeof req.body.username !== 'string') ||
  (typeof req.body.password !== 'string') ||
  !req.body.username ||
  !req.body.password

  ) {
    res.status(400).json({ errors: [{ message: 'User name or password not provided' }] });
      return;
  }

  if (req.method === 'POST') {
    if (await getUserByUsername(req.body.username)) {
      res.status(400).json({ errors: [{ message: 'User name alredy taken' }] });
      return;
    }

    const passwordHash = await bcrypt.hash(req.body.password, 12);

    const newUser = await createUser(req.body.username, passwordHash);

    res.status(200).json({ user: { id: newUser.id } });
  } else {
    res.status(405).json({ errors: [{ message: 'method not allowed' }] });
  }
}
