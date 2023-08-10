// pages/Home/Occasion/Cars.js
import { CarProvider } from './CarContext'; // Ajuste le chemin si nécessaire
import CarPage from './CarPage'; // Ajuste le chemin si nécessaire
import HandleCars from '../../Admin/HandleCars'; // Ajuste le chemin si nécessaire

const Cars = () => {
  return (
    <div>
      <CarProvider>
        <CarPage />
        <HandleCars />
      </CarProvider>
    </div>
  );
};

export default Cars;
