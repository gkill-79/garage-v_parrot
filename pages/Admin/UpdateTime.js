// pages/Admin/UpdateTime.js
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Admin/UpdateTime.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';

const UpdateTime = () => {
  const [horaires, setHoraires] = useState({
    lundi: 'Fermé',
    mardi: '9h00 - 12h30, 14h00 - 18h30',
    mercredi: '9h00 - 12h30, 14h00 - 18h30',
    jeudi: '9h00 - 12h30, 14h00 - 18h30',
    vendredi: '9h00 - 12h30, 14h00 - 18h30',
    samedi: '9h00 - 12h30, 14h00 - 19h00',
    dimanche: 'Fermé',
  });

  const handleInputChange = (event) => {
    setHoraires({
      ...horaires,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, tu peux gérer l'envoi des nouvelles horaires au backend
    console.log(horaires);
  };

  return (
    <div>
        <Header />
        <Link href="/Admin/SpaceAdmin"> {/* Lien vers l'espace administrateur ici */}
            <a className={styles.adminButton}>Espace Administrateur</a>
        </Link>
        <div className={styles.container}>
        <h1 className={styles.title}>Modifier les horaires</h1>
        <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
            <label>Lundi :</label>
            <input className={styles.input} type="text" name="lundi" value={horaires.lundi} onChange={handleInputChange} />
            </div>
            <div className={styles.inputGroup}>
            <label>Mardi :</label>
            <input className={styles.input} type="text" name="mardi" value={horaires.mardi} onChange={handleInputChange} />
            </div>
            <div className={styles.inputGroup}>
            <label>Mercredi :</label>
            <input className={styles.input} type="text" name="mercredi" value={horaires.mercredi} onChange={handleInputChange} />
            </div>
            <div className={styles.inputGroup}>
            <label>Jeudi :</label>
            <input className={styles.input} type="text" name="jeudi" value={horaires.jeudi} onChange={handleInputChange} />
            </div>
            <div className={styles.inputGroup}>
            <label>Vendredi :</label>
            <input className={styles.input} type="text" name="vendredi" value={horaires.vendredi} onChange={handleInputChange} />
            </div>
            <div className={styles.inputGroup}>
            <label>Samedi :</label>
            <input className={styles.input} type="text" name="samedi" value={horaires.samedi} onChange={handleInputChange} />
            </div>
            <div className={styles.inputGroup}>
            <label>Dimanche :</label>
            <input className={styles.input} type="text" name="dimanche" value={horaires.dimanche} onChange={handleInputChange} />
            </div>
            <button className={styles.submitButton} type="submit">Enregistrer</button>
        </form>
        </div>
        <Footer />
    </div>
  );
};

export default UpdateTime;

