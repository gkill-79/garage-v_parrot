



// pages/api/updateHours.js
import { NextApiRequest, NextApiResponse } from 'next'

let horaires = {
  lundi: 'Fermé',
  mardi: '9h00 - 12h30, 14h00 - 18h30',
  mercredi: '9h00 - 12h30, 14h00 - 18h30',
  jeudi: '9h00 - 12h30, 14h00 - 18h30',
  vendredi: '9h00 - 12h30, 14h00 - 18h30',
  samedi: '9h00 - 12h30, 14h00 - 19h00',
  dimanche: 'Fermé',
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    horaires = req.body;
    res.status(200).json({ message: 'Horaires successfully updated.' });
    return;
  }
  
  if (req.method === 'GET') {
    res.status(200).json(horaires);
    return;
  }

  res.status(405).json({ message: 'Method not allowed.' }); // Only POST method is allowed
}





















