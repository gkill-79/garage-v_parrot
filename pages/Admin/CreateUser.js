// pages/Admin/CreateUser.js

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Admin/CreateUser.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';

const CreateUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async e => {
      e.preventDefault();
      if (password !== confirmPassword) {
          alert("Les mots de passe ne correspondent pas !");
      } else {
          try {
              const response = await fetch('/api/users', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ firstName, lastName, email, password }),
              });
              if (!response.ok) {
                  throw new Error('Erreur lors de la création de l\'utilisateur');
              }
              const data = await response.json();
              alert('Utilisateur créé avec succès!');
          } catch (error) {
              alert(error.message);
          }
      }
  }

    return (
        <div>
            <Header />
            <Link href="/Admin/SpaceAdmin" className={styles.adminButton}>Espace Administration</Link>

            <div className={styles.createUserContainer}>
                <h1 className={styles.title}>Créer un compte utilisateur</h1>
                <form className={styles.createUserForm} onSubmit={handleSubmit}>
                    <label htmlFor="firstName">Prénom:</label>
                    <input type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />

                    <label htmlFor="lastName">Nom:</label>
                    <input type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <label htmlFor="password">Mot de passe:</label>
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <label htmlFor="confirmPassword">Confirmez le mot de passe:</label>
                    <input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />

                    <button type="submit" className={styles.submitButton}>Créer le compte</button>
                </form>
                <Link href="/Admin/HandleCars" className={styles.manageCarsLink}>Gérer les voitures d'occasion</Link>
            </div>
            <Footer />
        </div>
    )
}

export default CreateUser;






