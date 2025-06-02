//Fetch frontend projects data dynamically from an API endpoint

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { id: 1, title: 'Portfolio', desc: 'My Virtual Assistant' },
    { id: 2, title: 'E-commerce', desc: 'Online Store Management' },
  ]);
}
