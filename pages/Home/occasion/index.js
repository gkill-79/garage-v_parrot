// pages/Home/Occasion/CarListPage.js
import React, { useState } from 'react';
import Header from '../../../Componente/Header';
import Footer from '../../../Componente/Footer';
import CarPage from './CarPage';
import SelectCar from './SelectCar';
import styles from '../../../styles/Home/Occasion/CarListPage.module.css';

const CarListPage = ({ cars }) => {
  const [selectedCar, setSelectedCar] = useState(null); // aucune voiture sélectionnée par défaut

  return (
    <div>
      <Header />
      <div className={styles.pageContainer}>
        <SelectCar cars={cars} selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
        {selectedCar && <CarPage car={selectedCar} />}
      </div>
      <Footer />
    </div>
  );
};

export default CarListPage;

