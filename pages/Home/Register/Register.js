

import React, { useState } from "react";
import styles from './Register.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
        <Header />
        <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.col}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h1 className={styles.title}>Inscription</h1>

                <div className={styles.formGroup}>
                <label htmlFor="name_field" className={styles.formLabel}>Nom</label>
                <input
                    type="text"
                    id="name_field"
                    className={styles.formInput}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </div>

                <div className={styles.formGroup}>
                <label htmlFor="email_field" className={styles.formLabel}>Adresse e-mail</label>
                <input
                    type="email"
                    id="email_field"
                    className={styles.formInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>

                <div className={styles.formGroup}>
                <label htmlFor="password_field" className={styles.formLabel}>Mot de passe</label>
                <input
                    type="password"
                    id="password_field"
                    className={styles.formInput}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>

                <button
                type="submit"
                className={styles.submitBtn}
                >
                S'inscrire
                </button>
            </form>
            </div>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default Register;




