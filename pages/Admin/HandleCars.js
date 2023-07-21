// pages/Admin/HandleCars.js
import { useState } from 'react';
import { cars } from '../Home/Occasion/Cars';
import styles from '../../styles/Admin/HandleCars.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';

const HandleCars = () => {
  const [selectedCar, setSelectedCar] = useState(cars[0]);
  const [updatedCar, setUpdatedCar] = useState(selectedCar);

  const handleCarSelect = (event) => {
    const selectedCar = cars.find(car => car.id === parseInt(event.target.value));
    setSelectedCar(selectedCar);
    setUpdatedCar(selectedCar);
  };

  const handleInputChange = (event) => {
    setUpdatedCar({
      ...updatedCar,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you would normally update the car data on the server
    // For simplicity, we just log the data to the console
    console.log(updatedCar);
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} className={styles.form}>
        <select value={selectedCar.id} onChange={handleCarSelect} className={styles.select}>
          {cars.map(car => (
            <option key={car.id} value={car.id}>Voiture {car.id}</option>
          ))}
        </select>
        <label>
          Prix :
          <input type="number" name="price" value={updatedCar.price} onChange={handleInputChange} className={styles.input} />
        </label>
        <label>
          URL de l'image :
          <input type="text" name="imageUrl" value={updatedCar.imageUrl} onChange={handleInputChange} className={styles.input} />
        </label>
        <label>
          Année :
          <input type="number" name="year" value={updatedCar.year} onChange={handleInputChange} className={styles.input} />
        </label>
        <label>
          Kilométrage :
          <input type="number" name="mileage" value={updatedCar.mileage} onChange={handleInputChange} className={styles.input} />
        </label>
        <button type="submit" className={styles.button}>Mettre à jour</button>
      </form>
      <Footer />
    </div>
  );
};

export default HandleCars;
