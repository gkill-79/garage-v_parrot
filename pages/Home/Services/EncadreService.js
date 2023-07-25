import React from 'react';
import styles from '../../../styles/Home/Services/EncadreService.module.css';

const EncadreService = ({ image, title, price, text }) => {
  console.log({title, image, price, text});
    return (
      <div className={styles.encadre}>
        <h2>{title}</h2>
        <img src={image} className={styles.encadreImage} alt="" />
        <p>À partir de {price}€</p>
        <p>{text}</p>
        <button className={styles.btn}>Je prends RDV</button>
      </div>
    );
  };

export default EncadreService;





















