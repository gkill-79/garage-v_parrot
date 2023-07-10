
// pages\Home\Second-handGallery.js
// Une page ou un composant qui utilise le composant CarCard
import CarCard from '../../Componente/CarCard';
import styles from '../../styles/Home/Second-handGallery.module.css'
import SelectCar from './Occasion/SelectCar';


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
  
  

  const SomeComponent = () => {
    const renderCar = (car) => {
        return <CarCard car={car} />;
    };

    return (
        <div className={styles.CarContainer}>
            <SelectCar cars={cars} renderCar={renderCar} />
        </div>
    );
};


export default SomeComponent;
