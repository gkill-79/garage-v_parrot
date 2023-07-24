// // pages/Home/Occasion/Cars.js
// import React, { useState } from 'react';
// import CarPage from './index';
// import HandleCars from '../../Admin/HandleCars';

// export const Cars = () => {
//   const [cars, setCars] = useState([
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
//     },
//     // Vous pouvez ajouter autant de voitures que vous le souhaitez ici...
//   ]);

//   return (
//     <div>
//       <CarPage cars={cars} />
//       <HandleCars cars={cars} setCars={setCars} />
//     </div>
//   );
// };

// export default Cars;











// pages/Home/Occasion/Cars.js
import React, { useState } from 'react';
import CarPage from './index';
import HandleCars from '../../Admin/HandleCars';
import { CarData } from './CarData';

export const Cars = () => {
  const [cars, setCars] = useState(CarData);

  return (
    <div>
      <CarPage cars={cars} />
      <HandleCars cars={cars} setCars={setCars} />
    </div>
  );
};

export default Cars;





