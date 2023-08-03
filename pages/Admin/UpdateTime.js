// pages/Admin/UpdateTime.js
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Admin/UpdateTime.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';

const UpdateTime = () => {
  const defaultHoraires = {
    lundi: 'Fermé',
    mardi: '9h00 - 12h30, 14h00 - 18h30',
    mercredi: '9h00 - 12h30, 14h00 - 18h30',
    jeudi: '9h00 - 12h30, 14h00 - 18h30',
    vendredi: '9h00 - 12h30, 14h00 - 18h30',
    samedi: '9h00 - 12h30, 14h00 - 19h00',
    dimanche: 'Fermé',
  };
  
  const [horaires, setHoraires] = useState(defaultHoraires);

  const handleInputChange = ({ target: { name, value }}) => {
    setHoraires(prevHoraires => ({ ...prevHoraires, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/pages/UpdateTime', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(horaires),
    });

    if(response.ok) {
      const result = await response.json();
      console.log('Succès:', result);
      alert('Les horaires ont bien été mis à jour !');
    } else {
      console.error('Erreur lors de la mise à jour des horaires.');
    }
  };

  const renderForm = () => {
    if(!defaultHoraires) {
      return <div>Pas d'horaires à afficher</div>;
    }

    return Object.entries(defaultHoraires).map(([day,]) => (
      <div key={day} className={styles.inputGroup}>
        <label>{day.charAt(0).toUpperCase() + day.slice(1)} :</label>
        <input 
          className={styles.input}
          type="text"
          name={day}
          value={horaires[day]}
          onChange={handleInputChange}
        />
      </div>
    ));
  };

  return (
    <div>
      <Header />
      <Link href="/Admin/SpaceAdmin" className={styles.adminButton}>Espace Administrateur</Link>
      <div className={styles.container}>
        <h1 className={styles.title}>Modifier les horaires</h1>
        <form onSubmit={handleSubmit}>
          {renderForm()}
          <button className={styles.submitButton} type="submit">Enregistrer</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateTime;

