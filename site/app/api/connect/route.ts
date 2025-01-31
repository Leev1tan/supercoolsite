// app/api/connect/route.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Process form submission or API call
      const formData = req.body;
      // Example: Send formData to backend or handle locally
      res.status(200).json({ success: true, message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error handling form submission:', error);
      res.status(500).json({ success: false, message: 'Failed to submit form.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
