// pages/Home/occasion/SelectCar.js
import styles from './SelectCar.module.css';
import React, { useState } from 'react';

const SelectCar = ({ cars, renderCar }) => {
    const [selectedCar, setSelectedCar] = useState(cars ? cars[0] : null);
    const [carSelected, setCarSelected] = useState(false);

    // par défaut, sélectionnez la première voiture

  const handleChange = (event) => {
    const selectedCarId = event.target.value;
    const selectedCar = cars.find(car => car.id === Number(selectedCarId));
    setSelectedCar(selectedCar);
    setCarSelected(false);
  };

  const handleClick = () => {
    setCarSelected(true);
  }

  return (
    <div>
      <label htmlFor="car-select">Choisir une voiture:</label>
      <select id="car-select" onChange={handleChange} value={selectedCar ? selectedCar.id : ''}>
        {cars && cars.length > 0 && cars.map((car) => (
        <option key={car.id} value={car.id}>{car.model} - {car.year}</option>
        ))}
      </select>
      <button onClick={handleClick}>Sélectionner</button>
      {carSelected && selectedCar && renderCar && renderCar(selectedCar)}
    </div>
  );
};

export default SelectCar;


