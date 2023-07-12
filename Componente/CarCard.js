// import React from 'react';
// import styles from '../styles/CarCard.module.css';

// const CarCard = ({ car }) => {
//   if (!car) {
//     return <div>Pas de voiture sélectionnée</div>;
//   }

//   const { price, imageUrl, year, mileage } = car;

//   return (
//     <div className={styles.cardContainer}>
//       <div className={styles.imageContainer}>
//         <img src={imageUrl} alt="Car" className={styles.carImage} />
//       </div>
//       <div className={styles.infoContainer}>
//         <p className={styles.info}>Prix : {price} €</p>
//         <p className={styles.info}>Année : {year}</p>
//         <p className={styles.info}>Kilométrage : {mileage} km</p>
//       </div>
//     </div>
//   );
// };

// export default CarCard;







// pages/Home/Occasion/CarCard.js
import React from 'react';

const CarCard = ({ car, setSelectedCar }) => {
  const { price, imageUrl, year, mileage } = car;

  const handleClick = () => {
    setSelectedCar(car);
  };

  return (
    <div onClick={handleClick}>
      <div>
        <img src={car.imageUrl} alt={`Car ${car.id}`} />
      </div>
      <div>
        <h1>Détails du véhicule</h1>
        <p>Prix : {price} €</p>
        <p>Année de mise en circulation : {year}</p>
        <p>Kilométrage : {mileage} km</p>
      </div>
    </div>
  );
};

export default CarCard;




