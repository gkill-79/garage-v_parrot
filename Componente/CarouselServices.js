
// // componentes/CarouselEntretien.js 
// import React, { useState, useEffect } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import styles from '../styles/Componentes/CarouselEntretien.module.css';

// const CarouselEntretien = ({ items }) => {
//   if (!items || items.length === 0) {
//     return null;
//   }

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex(oldIndex => oldIndex === items.length - 1 ? 0 : oldIndex + 1);
//     }, 2000);

//     return () => clearInterval(timer);
//   }, [items]);

//   const prevSlide = () => {
//     setCurrentIndex(oldIndex => oldIndex === 0 ? items.length - 1 : oldIndex - 1);
//   };

//   const nextSlide = () => {
//     setCurrentIndex(oldIndex => oldIndex === items.length - 1 ? 0 : oldIndex + 1);
//   };

//   const currentItem = items[currentIndex];

//   return (
//     <div className={styles['carousel-container']}>
//       <div className={styles.card}>
//         <h4>{currentItem.title}</h4>
//         <img 
//           src={currentItem.image} 
//           alt={currentItem.title} 
//           width={398}
//           height={380}
//         />
//         <div className={styles['card-content']}>
//           <p>{currentItem.price}</p>
//           <p>{currentItem.description}</p>
//           <button className={styles.button}>JE PRENDS RDV</button>
//         </div>
//       </div>
//       <div className={`${styles['carousel-arrow']} ${styles['carousel-arrow-left']}`}>
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       <div className={`${styles['carousel-arrow']} ${styles['carousel-arrow-right']}`}>
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>
//     </div>
//   );
// };

// export default CarouselEntretien;















// componentes/CarouselServices.js 
import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import styles from '../styles/Componentes/CarouselEntretien.module.css';
import EncadreService from '../pages/Home/Services/EncadreService';

const CarouselServices = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(oldIndex => oldIndex === items.length - 1 ? 0 : oldIndex + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, [items]);

  const prevSlide = () => {
    setCurrentIndex(oldIndex => oldIndex === 0 ? items.length - 1 : oldIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(oldIndex => oldIndex === items.length - 1 ? 0 : oldIndex + 1);
  };

  const currentItem = items[currentIndex];

  return (
    <div className={styles['carousel-container']}>
      <EncadreService
        image={currentItem.image}
        price={currentItem.price}
        text={currentItem.description}
      />
      <div className={`${styles['carousel-arrow']} ${styles['carousel-arrow-left']}`}>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className={`${styles['carousel-arrow']} ${styles['carousel-arrow-right']}`}>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default CarouselServices;





