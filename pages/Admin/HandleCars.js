// components/HandleCars/index.js
import React, { useState, useEffect } from 'react';
import styles from '../../styles/Admin/HandleCars.module.css'
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';
import Link from 'next/link';

const HandleCars = ({ cars, setCars }) => {
  const [id, setId] = useState(null);
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');

  const resetForm = () => {
    setId(null);
    setPrice('');
    setImageUrl('');
    setYear('');
    setMileage('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const carData = { id: id || Date.now(), price, imageUrl, year, mileage };
    const updatedCars = id ? cars.map(car => car.id === id ? carData : car) : [...cars, carData];
    setCars(updatedCars);
    alert(id ? 'Voiture mise à jour avec succès !' : 'Voiture ajoutée avec succès !');
    resetForm();
  };

  const onDelete = (id) => {
    setCars(cars.filter((car) => car.id !== id));
    alert('Voiture supprimée avec succès !');
  };

  const onEdit = (car) => {
    setId(car.id);
    setPrice(car.price);
    setImageUrl(car.imageUrl);
    setYear(car.year);
    setMileage(car.mileage);
  };

  return (
    <div>
        <Header />
        <Link href="/Admin" className={styles.adminButton}>Espace Administration</Link>
        <div className={styles.handleCarsContainer}>
            <h1 className={styles.title}>{id ? 'Modifier une voiture' : 'Ajouter une voiture'}</h1>
            <form className={styles.handleCarsForm} onSubmit={onSubmit}>
            <label htmlFor="price">Prix :</label>
            <input type="text" id="price" value={price} onChange={e => setPrice(e.target.value)} />

            <label htmlFor="imageUrl">URL de l'image :</label>
            <input type="text" id="imageUrl" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />

            <label htmlFor="year">Année :</label>
            <input type="text" id="year" value={year} onChange={e => setYear(e.target.value)} />

            <label htmlFor="mileage">Kilométrage :</label>
            <input type="text" id="mileage" value={mileage} onChange={e => setMileage(e.target.value)} />

            <button type="submit" className={styles.submitButton}>
                {id ? 'Mettre à jour la voiture' : 'Ajouter la voiture'}
            </button>
            </form>
            {cars && cars.length > 0 && cars.map((car) => (
            <div key={car.id} className={styles.carCard}>
                <h2>Prix : {car.price}</h2>
                <p>Année : {car.year}</p>
                <p>Kilométrage : {car.mileage}</p>
                <img src={car.imageUrl} alt="Voiture"/>
                <button onClick={() => onEdit(car)} className={styles.editButton}>Modifier</button>
                <button onClick={() => onDelete(car.id)} className={styles.deleteButton}>Supprimer</button>
            </div>
            ))}
        </div>
      <Footer />
    </div>
  );
};

export default HandleCars;

