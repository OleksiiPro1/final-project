import { NextApiRequest, NextApiResponse } from 'next';

type RegisterResponseBody =
  | {
      errors: {
        message: string;
      }[];
    }
  | { user: { id: number } };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponseBody>,
) {
  if (req.method === 'POST') {
    res.status(200).json({ user: { id: 1 } });
  } else {
    res.status(405).json({ errors: [{ message: 'method not allowed' }] });
  }
}
