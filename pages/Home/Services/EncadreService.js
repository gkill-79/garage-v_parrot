

// EncadreService.js
import React from 'react';
import styles from '../../../styles/Home/Services/EncadreService.module.css';

const EncadreService = ({ image, imgClassName, price, text }) => {
    return (
      <div className={styles.encadre}>
        <img src={image} className={styles.encadreImage} alt="" />
        <p>À partir de {price}€</p>
        <p>{text}</p>
        <button className={styles.btn}>Je prends RDV</button>
      </div>
    );
  };

export default EncadreService;






















