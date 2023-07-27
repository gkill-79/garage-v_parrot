

// export default function handler(req, res) {
//   // const body = req.body;
//   // console.log(body)

//   res.status(200).json({ name: 'john Doe' })
// }

// if (!appointment.firstName || !appointment.lastName || !appointment.email || !appointment.phone || !appointment.message || !appointment.date) {
//   res.status(400).json({ message: 'All fields are required.' });
// }


// res.status(200).json({ message: 'Appointment created successfully.' });











// pages/api/pages/AppointmentForm.js
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const appointment = req.body;

    if (!appointment.firstname || !appointment.lastname || !appointment.email || !appointment.phone || !appointment.message || !appointment.date || !appointment.time) {
      res.status(400).json({ message: 'All fields are required.' });
      return;
    }

    // Do something with appointment data here, e.g. store it in a database

    res.status(200).json({ message: 'Appointment successfully created.' });
    return;
  }

  res.status(405).json({ message: 'Method not allowed.' }); // Only POST method is allowed
}





