
// pages/Home/Occasion/CarListPage.js
import React from 'react';
import Header from '../../../Componente/Header';
import Footer from '../../../Componente/Footer';
import CarCard from '../../../Componente/CarCard';
import SelectCar from './SelectCar';
import styles from '../../../styles/Home/Occasion/CarListPage.module.css';

const CarListPage = ({ cars }) => {

  return (
    <div>
      <Header />
      <div className={styles.pageContainer}>
        <SelectCar cars={cars} renderCar={(car) => <CarCard car={car} />} />
      </div>
      <Footer />
    </div>
  );
};

export default CarListPage;
