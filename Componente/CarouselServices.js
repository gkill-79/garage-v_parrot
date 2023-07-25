import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import styles from '../styles/Componentes/CarouselEntretien.module.css';
import EncadreService from '../pages/Home/Services/EncadreService';

const CarouselServices = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(oldIndex => (oldIndex === items.length - 1 ? 0 : oldIndex + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, [items]);

  const prevSlide = () => {
    setCurrentIndex(oldIndex => (oldIndex === 0 ? items.length - 1 : oldIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(oldIndex => (oldIndex === items.length - 1 ? 0 : oldIndex + 1));
  };

  return (
    <div className={styles['carousel-container']}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className={index === currentIndex ? styles['carousel-visible'] : styles['carousel-hidden']}
        >
          <EncadreService
            title={item.title}
            image={item.image}
            price={item.price}
            text={item.description}
          />
        </div>
      ))}
      <div className={`${styles['carousel-arrow']} ${styles['carousel-arrow-left']}`} onClick={prevSlide}>
        <BsChevronCompactLeft size={30} />
      </div>
      <div className={`${styles['carousel-arrow']} ${styles['carousel-arrow-right']}`} onClick={nextSlide}>
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );  
};

export default CarouselServices;





