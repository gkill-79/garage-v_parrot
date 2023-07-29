// pages/Admin/Login/Login.jsx
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from '../../../styles/Admin/Login.module.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    email: '',
  });
  const history = useHistory();

  const signIn = (creds) => {
    // Implémentez ici la logique de connexion. En fonction de la réussite, vous pouvez rediriger l'utilisateur.

    // Si la connexion est réussie :
    // history.push("/destination-après-connexion");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(credentials);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // affichage du formulaire de connexion
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Identifiant :</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* // affichage du mot de passe  (type="password")   */}


        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* // affichage de l'adresse email  (type="email")   */}
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>

      {/* // affichage du lien de création de compte  (Link)   */}
      <p>
        Vous n'avez pas de compte ?{' '}
        <Link to="/signup" className="create-account">
          Créer un compte
        </Link>
      </p>
    </div>
  );
};

export default Login;














