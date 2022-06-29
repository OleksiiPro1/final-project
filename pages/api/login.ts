import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { getUserWithPasswordHashUsername } from '../../util/database';

export type LoginResponseBody =
  | {
      errors: {
        message: string;
      }[];
    }
  | { user: { id: number } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponseBody>,
) {
  if (req.method === 'POST') {
    if (
      typeof req.body.username !== 'string' ||
      typeof req.body.password !== 'string' ||
      !req.body.username ||
      !req.body.password
    ) {
      res
        .status(400)
        .json({ errors: [{ message: 'Username or password not provided' }] });
      return;
    }
    const userWithPasswordHashUseWithCaution =
      await getUserWithPasswordHashUsername(req.body.username);
    if (!userWithPasswordHashUseWithCaution) {
      res
        .status(401)
        .json({
          errors: [{ message: 'User not found or password is wrong ' }],
        });
      return;
    }

    const passwordMatches = await bcrypt.compare(
      req.body.password,
      userWithPasswordHashUseWithCaution.passwordHash,
    );

    if (!passwordMatches) {
      res
        .status(401)
        .json({
          errors: [{ message: 'Password is wrong or user not found ' }],
        });
      return;
    }
    const userId = userWithPasswordHashUseWithCaution.id;

    res.status(200).json({ user: { id: userId } });
  } else {
    res.status(405).json({ errors: [{ message: 'method not allowed' }] });
  }
}
