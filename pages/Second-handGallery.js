

// // pages\Second-handGallery.js
// import React, { useState } from 'react';
// import CarCard from '../Componente/CarCard';
// import CarPage from './Home/Occasion/CarPage';
// import styles from '../styles/Home/Second-handGallery.module.css'
// import SelectCar from './Home/Occasion/SelectCar';

// const cars = [
//     {
//       id: 1,
//       price: 10000,
//       imageUrl: '/images/v-occas1.jpg',
//       year: 2010,
//       mileage: 120000
//     },
//     {
//       id: 2,
//       price: 15000,
//       imageUrl: '/images/v-occas2.jpg',
//       year: 2015,
//       mileage: 80000
//     },
//     {
//       id: 3,
//       price: 20000,
//       imageUrl: '/images/v-occas3.jpg',
//       year: 2018,
//       mileage: 50000
//     }
//   ];
  
// const SecondHandGallery = () => {
//     const [selectedCar, setSelectedCar] = useState(null); // aucune voiture sélectionnée par défaut

//     return (
//         <div className={styles.CarContainer}>
//             <SelectCar cars={cars} selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
//             {cars.map(car => (
//                 <CarCard key={car.id} car={car} setSelectedCar={setSelectedCar} />
//             ))}
//             {selectedCar && <CarPage car={selectedCar} />}
//         </div>
//     );
// };

// export default SecondHandGallery;









// pages\Second-handGallery.js
import React from 'react';
import CarCard from '../Componente/CarCard';
import styles from '../styles/Home/Second-handGallery.module.css'

const cars = [
    {
      id: 1,
      price: 10000,
      imageUrl: '/images/v-occas1.jpg',
      year: 2010,
      mileage: 120000
    },
    {
      id: 2,
      price: 15000,
      imageUrl: '/images/v-occas2.jpg',
      year: 2015,
      mileage: 80000
    },
    {
      id: 3,
      price: 20000,
      imageUrl: '/images/v-occas3.jpg',
      year: 2018,
      mileage: 50000
    }
  ];
  
const SecondHandGallery = () => {
    return (
      <div className={styles.CarContainer1}>
        <h2 className={styles.title}>Nos occasions</h2>
        <div className={styles.CarContainer}>
            {cars.map(car => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
      </div>
    );
};

export default SecondHandGallery;













