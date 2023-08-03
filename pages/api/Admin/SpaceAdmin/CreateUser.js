import { NextApiRequest, NextApiResponse } from 'next'
import { createUserInDB, getUserByEmail } from './db';

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'Un utilisateur avec cet email existe déjà.' });
    }

    // Créer le nouvel utilisateur
    const user = await createUserInDB({ firstName, lastName, email, password });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur.' });
  }
}

const handler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      return createUser(req, res);
    default:
      return res.status(405).json({ message: 'Méthode non autorisée.' });
  }
}

export default handler;
