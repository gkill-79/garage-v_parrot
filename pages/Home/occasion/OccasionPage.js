// pages/Home/Occasion/OccasionPage.js
import React, { useState } from 'react';
import SelectCar from './SelectCar';
import CarPage from './Car/CarPage';
import { cars } from '../../Second-handGallery';

const OccasionPage = () => {
  const [selectedCar, setSelectedCar] = useState(null); 

  return (
    <div>
      <SelectCar cars={cars} selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
      {selectedCar && <CarPage car={selectedCar} />}
    </div>
  );
};

export default OccasionPage;
