// pages/api/AppointmentForm.js
import { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'bella',
  database: 'v_parrot_garage'
})

export default async function handler(req, res) {
  const connection = await pool.getConnection();

  try {
    if (req.method === 'POST') {
      const { firstname, lastname, email, phone, message, date } = req.body;

      if (!firstname || !lastname || !email || !phone || !message || !date) {
        res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
        return;
      }

      const [rows] = await connection.query('INSERT INTO appointments (firstname, lastname, email, phone, message, date) VALUES (?, ?, ?, ?, ?, ?)', [firstname, lastname, email, phone, message, date]);
      res.status(200).json({ message: 'Rendez-vous créé avec succès.', id: rows.insertId });
    } else if (req.method === 'PUT') {
      const { id, firstname, lastname, email, phone, message, date } = req.body;
      
      await connection.query('UPDATE appointments SET firstname = ?, lastname = ?, email = ?, phone = ?, message = ?, date = ? WHERE id = ?', [firstname, lastname, email, phone, message, date, id]);
      res.json({ message: 'Rendez-vous mis à jour avec succès.' });
    } else if (req.method === 'DELETE') {
      const { id } = req.body;

      await connection.query('DELETE FROM appointments WHERE id = ?', [id]);
      res.json({ message: "Rendez-vous supprimé avec succès." });
    } else {
      res.status(405).json({ message: 'Méthode non autorisée.' }); 
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Une erreur est survenue lors de la manipulation du rendez-vous.' });
  } finally {
    connection.release();
  }
}

