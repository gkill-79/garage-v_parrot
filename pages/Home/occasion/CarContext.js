
// pages/Home/Occasion/CarContext.js
import React, { createContext, useState, useContext } from 'react';
import { CarData } from './CarData';

export const CarContext = createContext();

export const useCars = () => {
    const context = useContext(CarContext);
    if (!context) {
      throw new Error('useCars doit être utilisé dans un CarProvider');
    }
    return context;
};


export const CarProvider = ({ children }) => {
    const [cars, setCars] = useState(CarData);
  
    const value = {
      cars,
      setCars
    };
  
    return (
        <CarContext.Provider value={value}>
        {children}
        </CarContext.Provider>
    )
  };
  

export default CarContext;


















