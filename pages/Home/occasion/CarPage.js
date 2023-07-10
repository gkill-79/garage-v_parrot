

// pages/Car/CarPage.js
import React from 'react';
import styles from '../../../styles/Home/Occasion/CarPage.module.css';

const CarPage = ({ car }) => {
  const { price, imageUrl, year, mileage } = car;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.imageContainer}>
        <img src={car.imageUrl} alt={`Car ${car.id}`} className={styles.carImage} />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>Détails du véhicule</h1>
        <p className={styles.info}>Prix : {price} €</p>
        <p className={styles.info}>Année de mise en circulation : {year}</p>
        <p className={styles.info}>Kilométrage : {mileage} km</p>
      </div>
    </div>
  );
};

export default CarPage;




















