import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  createUser,
  getUserByUsername,
  getUserWithPasswordHashUsername,
} from '../../util/database';

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



  if (req.method === 'POST') {

    if(
      (typeof req.body.username !== 'string') ||
    (typeof req.body.password !== 'string') ||
    !req.body.username ||
    !req.body.password

    ) {
      res.status(400).json({ errors: [{ message: 'User name or password not provided' }] });
        return;
    }
    const user = await getUserWithPasswordHashUsername(req.body.username)
    if (!user) {
      res.status(400).json({ errors: [{ message: 'User not found' }] });
      return;
    }

    const passwordHash = await bcrypt.hash(req.body.password, 12);

    const newUser = await createUser(req.body.username, passwordHash);

    res.status(200).json({ user: { id: newUser.id } });
  } else {
    res.status(405).json({ errors: [{ message: 'method not allowed' }] });
  }
}
