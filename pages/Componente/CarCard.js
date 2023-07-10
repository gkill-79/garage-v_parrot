import React from 'react';
import styles from './CarCard.module.css';

const CarCard = ({ car }) => {
  if (!car) {
    return <div>Pas de voiture sélectionnée</div>;
  }

  const { price, imageUrl, year, mileage } = car;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="Car" className={styles.carImage} />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.info}>Prix : {price} €</p>
        <p className={styles.info}>Année : {year}</p>
        <p className={styles.info}>Kilométrage : {mileage} km</p>
      </div>
    </div>
  );
};

export default CarCard;

