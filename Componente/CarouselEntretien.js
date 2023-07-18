

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import styles from '../styles/Componentes/CarouselEntretien.module.css';

const CarouselEntretien = ({ items }) => {
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
            <div className={styles.card}>
                <img 
                    src={items[currentIndex].image} 
                    alt={items[currentIndex].title} 
                    width={398}
                    height={380}
                />
                <div className={styles['card-content']}>
                    <h4>{items[currentIndex].title}</h4>
                    <p>{items[currentIndex].description}</p>
                    <button className={styles.button}>JE PRENDS RDV</button>
                </div>
            </div>

            <div className={`${styles['carousel-arrow']} ${styles['carousel-arrow-left']}`}>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className={`${styles['carousel-arrow']} ${styles['carousel-arrow-right']}`}>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
        </div>
    );
};

export default CarouselEntretien;






















