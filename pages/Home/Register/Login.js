

import Link from "next/link";
import React, { useState } from "react";
import styles from '../../../styles/Home/Register/Login.module.css';
import Header from '../../../Componente/Header';
import Footer from '../../../Componente/Footer';

const Login = () => {
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
                <h1 className={styles.title}>Se connecter</h1>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="email_field">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    id="email_field"
                    className={styles.formInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="password_field">
                    Mot de passe
                  </label>
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
                  Se connecter
                </button>

                <div className={styles.textCenter}>
                  <p>
                    Pas encore membre ? <Link href="/Home/Register/Register" className={styles.link}>S'inscrire</Link>


                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
};

export default Login;

















