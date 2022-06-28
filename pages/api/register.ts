import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { createUser } from '../../util/database';

type RegisterResponseBody =
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
    const password_hash = await bcrypt.hash(req.body.password, 12);

    console.log('hash', password_hash);

    const newUser = await createUser(req.body.username, password_hash);

    console.log('newUser', newUser);

    res.status(200).json({ user: { id: 1 } });
  } else {
    res.status(405).json({ errors: [{ message: 'method not allowed' }] });
  }
}
