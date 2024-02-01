import db from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  phone: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<User[]>) {
  if (req.method === 'GET') {
    try {
      const users = await db.user.findMany();
      return res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}