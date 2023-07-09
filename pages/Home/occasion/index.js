// pages/CarListPage.js
import React from 'react';
import styles from './CarListPage.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';
import CarPage from './CarPage';

const CarListPage = ({ featuredCar, cars }) => {
  return (
    <div>
      <Header />
    <div className={styles.pageContainer}>
          <div className={styles.featuredCarContainer}>
          <div className={styles.imageContainer}>
          <img src={featuredCar?.imageUrl} alt="Featured Car" className={styles.carImage} />
                             ^
          </div>
          <div className={styles.infoContainer}>
          <h2 className={styles.title}>Véhicule en vedette</h2>

          <p className={styles.info}>Prix : {featuredCar?.price} €</p>
          <p className={styles.info}>Année : {featuredCar?.year}</p>
          <p className={styles.info}>Kilométrage : {featuredCar?.mileage} km</p>
        </div>
      </div>
      <div className={styles.carListContainer}>
        {cars?.map((car) => (
        <CarPage key={car.id} car={car} />
        ))}
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default CarListPage;

