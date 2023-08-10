

// pages/Second-handGallery.js
import React from 'react';
import CarCard from '../Componente/CarCard';
import styles from '../styles/Home/SecondHandGallery.module.css'
import { CarData } from './Home/Occasion/CarData';

const SecondHandGallery = () => {
   
    const cars = CarData ?? [];

    return (
      <div className={styles.CarContainer1}>
        <h2 className={styles.title}>Nos occasions</h2>
        <div className={styles.CarContainer}>
            {cars.slice(0, 3).map(car => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
      </div>
    );
};

export default SecondHandGallery;







