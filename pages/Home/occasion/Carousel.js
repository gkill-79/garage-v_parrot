

// pages\Home\Services\Carousel.js
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import EncadreService from '../Services/EncadreService';
import styles from '../../../styles/Home/Services/Carousel.module.css';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === items.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    return (
      <div className={styles['carousel-container']}>
        <EncadreService 
          image={items[currentIndex].image} 
          price={items[currentIndex].price} 
          text={items[currentIndex].text} 
          className={styles['carousel-slide']} 
        />
        {/* Left Arrow */}
        <div className={`${styles['carousel-arrow']} ${styles['carousel-arrow-left']}`}>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className={`${styles['carousel-arrow']} ${styles['carousel-arrow-right']}`}>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
    );
};
  
export default Carousel;



























