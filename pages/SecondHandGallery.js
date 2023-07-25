

// // pages\Second-handGallery.js
// import React from 'react';
// import CarCard from '../Componente/CarCard';
// import styles from '../styles/Home/Second-handGallery.module.css'

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
//     return (
//       <div className={styles.CarContainer1}>
//         <h2 className={styles.title}>Nos occasions</h2>
//         <div className={styles.CarContainer}>
//             {cars.map(car => (
//                 <CarCard key={car.id} car={car} />
//             ))}
//         </div>
//       </div>
//     );
// };

// export default SecondHandGallery;






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







