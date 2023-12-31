


// src/pages/Signup.jsx

import React, { useState } from 'react';
import styles from '../../../styles/Admin/Login/Signup.module.css';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Appel à votre API pour enregistrer les informations d'utilisateur
      const response = await fetch('https://votre-api.com/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        // Les informations d'utilisateur ont été enregistrées avec succès
        console.log('Inscription réussie !');
        // Réinitialiser les champs du formulaire après la soumission
        setCredentials({
          username: '',
          password: '',
          email: '',
        });
      } else {
        // Gérer les erreurs d'enregistrement
        console.log('Erreur lors de l\'inscription');
      }
    } catch (error) {
      // Gérer les erreurs de connexion à l'API
      console.log('Erreur de connexion à l\'API');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles.signupContainer}>
      <h1>Créer un compte</h1>
      <form className={styles.myForm} onSubmit={handleSubmit}>
        <div>
          <label className={styles.label} htmlFor="username">Identifiant :</label>
          <input
            className={styles.input}
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="password">Mot de passe :</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="email">Email :</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <button className={styles.button} type="submit">Créer un compte</button>
      </form>
    </div>
  );
};

export default Signup;












