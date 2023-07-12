// pages/Home/occasion/SelectCar.js
import React from 'react';

const SelectCar = ({ cars, selectedCar, setSelectedCar }) => {

  const handleChange = (event) => {
    const selectedCarId = event.target.value;
    setSelectedCar(cars.find(car => car.id === Number(selectedCarId)));
  };

  return (
    <div>
      <label htmlFor="car-select">Choisir une voiture:</label>
      <select id="car-select" onChange={handleChange} value={selectedCar ? selectedCar.id : ''}>
        {cars && cars.map((car) => ( // ici nous vérifions si 'cars' est défini avant de l'utiliser
          <option key={car.id} value={car.id}>{car.model} - {car.year}</option>
        ))}
      </select>
    </div>
  );
};


export default SelectCar;














