


// pages/Home/Occasion/CarPage.js
import { useState, useEffect } from 'react';
import CarCard from '../../../Componente/CarCard';  
import Header from '../../../Componente/Header';
import Footer from '../../../Componente/Footer';
import styles from '../../../styles/Home/Occasion/CarPage.module.css';
import { cars } from './Cars';  

const CarPage = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const changeCar = () => {
      const randomIndex = Math.floor(Math.random() * cars.length);
      setSelectedCar(cars[randomIndex]);
    }

    // Changer de voiture immédiatement au chargement de la page
    changeCar();

    // Puis changer de voiture toutes les 3 secondes
    const intervalId = setInterval(changeCar, 3000);

    // Nettoyer l'intervalle quand le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  if (!selectedCar) {
    return null;
  }

  return (
    <div>
      <Header />
      <div className={styles.pageContainer}>
        <CarCard car={selectedCar} />
      </div>
      <Footer />
    </div>
  );
};

export default CarPage;









