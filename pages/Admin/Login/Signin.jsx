// pages/Admin/Login/Signin.jsx
import { useState } from "react";
import { useRouter } from 'next/router';
import styles from '../../../styles/Admin/Login/Signin.module.css';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Utiliser useRouter au lieu de useHistory

  const signIn = async (email, password) => {
    // Implémentez ici la logique de connexion.
    // Si la connexion est réussie, retournez true. Sinon, retournez false.
    // C'est juste un placeholder, vous devez le remplacer par votre propre logique d'authentification.
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await signIn(email, password)) {
      router.push("/"); // Utiliser router.push au lieu de history.push
    } else {
      alert("Email ou mot de passe incorrect.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.myTitle}>Signin</h2>
      <form className={styles.myForm} onSubmit={handleSubmit}>
        <input className={styles.mailPass}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className={styles.mailPass}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.signin} type="submit">Signin</button>
      </form>
    </div>
  );
};

export default Signin;

















