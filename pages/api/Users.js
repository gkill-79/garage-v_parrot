import mysql from 'mysql';

// Créer une connexion à la base de données
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'bella',
  database: 'v_parrot_garage'
});

// Connecter à la base de données
db.connect((err) => {
  if (err) throw err;
  console.log('Connecté à la base de données');
});

export default (req, res) => {
  if (req.method === 'GET') {
    // Dans une requête GET, on récupère des données de la base de données
    db.query('SELECT * FROM Utilisateurs', (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } else if (req.method === 'POST') {
    // Dans une requête POST, on insère des données dans la base de données
    // Note : dans un vrai cas d'utilisation, assurez-vous de valider et de nettoyer vos données avant de les insérer dans la base de données
    const { Nom, Prenom, Email, MotDePasse, Role } = req.body;
    db.query('INSERT INTO Utilisateurs (Nom, Prenom, Email, MotDePasse, Role) VALUES (?, ?, ?, ?, ?)', [Nom, Prenom, Email, MotDePasse, Role], (err, result) => {
      if (err) throw err;
      res.status(200).json({ message: 'Utilisateur créé avec succès' });
    });
  } else {
    // Si la méthode de la requête n'est ni GET ni POST, on renvoie une erreur 405 (Méthode non autorisée)
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
};
