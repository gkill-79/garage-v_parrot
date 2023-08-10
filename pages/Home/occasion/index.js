import { useState, useEffect } from 'react';
import CarCard from '../../../Componente/CarCard';  
import Header from '../../../Componente/Header';
import Footer from '../../../Componente/Footer';
import styles from '../../../styles/Home/Occasion/CarPage.module.css';
import { useCars } from './CarContext';

const CarPage = () => {
  const { cars } = useCars();
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    if (cars && cars.length > 0) {
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
    }
  }, [cars]);

  if (!selectedCar) {
    return null;
  }

  return (
    <div className={styles.pageContainer}>
      <Header />
      <CarCard car={selectedCar} />
      <Footer />
    </div>
  );
}

export default CarPage;















