
// pages/Admin/UpdateTime.js
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Admin/UpdateTime.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';
import { useHoraires } from '../api/Admin/SpaceAdmin/HorairesContext';

const UpdateTime = () => {
  const { horaires, setHoraires } = useHoraires();
  const [tempHoraires, setTempHoraires] = useState(horaires);

  const handleInputChange = ({ target: { name, value }}) => {
    setTempHoraires(prevHoraires => ({ ...prevHoraires, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setHoraires(tempHoraires); // Mettez à jour l'état global

    const response = await fetch('/api/pages/UpdateTime', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tempHoraires),
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
    if(!tempHoraires) {
      return <div>Pas d'horaires à afficher</div>;
    }

    return Object.entries(tempHoraires).map(([day, time]) => (
      <div key={day} className={styles.inputGroup}>
        <label>{day.charAt(0).toUpperCase() + day.slice(1)} :</label>
        <input 
          className={styles.input}
          type="text"
          name={day}
          value={time}
          onChange={handleInputChange}
        />
      </div>
    ));
  };

  return (
    <div>
      <Header />
      <Link href="/Admin" className={styles.adminButton}>Espace Administration</Link>
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

