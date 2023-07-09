// Une page ou un composant qui utilise le composant CarCard
import CarCard from '../Componente/CarCard';
import styles from './Second-handGallery.module.css'

const cars = [
  {
    price: 10000,
    imageUrl: 'url1',
    year: 2010,
    mileage: 120000
  },
  {
    price: 15000,
    imageUrl: 'url2',
    year: 2015,
    mileage: 80000
  },
  {
    price: 20000,
    imageUrl: 'url3',
    year: 2018,
    mileage: 50000
  }
];

const SomeComponent = () => (
    <div className={styles.CarContainer}>
      {cars.map((car, index) => <CarCard car={car} key={index} />)}
    </div>
  );

export default SomeComponent;
