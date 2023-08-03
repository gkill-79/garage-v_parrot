

// // pages/Componentes/Footer.js
// import React, { useState, useEffect } from 'react';
// import styles from '../styles/Componentes/Footer.module.css';

// const Footer = () => {
//   const [horaires, setHoraires] = useState({
//     lundi: '',
//     mardi: '',
//     mercredi: '',
//     jeudi: '',
//     vendredi: '',
//     samedi: '',
//     dimanche: '',
//   });

//   useEffect(() => {
//     const fetchHoraires = async () => {
//       const response = await fetch('/api/pages/UpdateTime');
//       const data = await response.json();
//       setHoraires(data);
//     };

//     fetchHoraires();
//   }, []);

//     return (
//         <footer className={styles.footer}>
//             <div className={styles['footer-center']}>
//                 <h3>Garage V Parrot</h3>
//             </div>
//             <div className={styles['footer-content']}>
//                 <div className={styles['footer-left']}>
//                     <p>Lundi: {horaires.lundi}</p>
//                     <p>Mardi: {horaires.mardi}</p>
//                     <p>Mercredi: {horaires.mercredi}</p>
//                     <p>Jeudi: {horaires.jeudi}</p>
//                     <p>Vendredi: {horaires.vendredi}</p>
//                     <p>Samedi: {horaires.samedi}</p>
//                     <p>Dimanche: {horaires.dimanche}</p>
//                 </div>
//                 <div className={styles['footer-right']}>
//                     <h3>Liens Utiles</h3>
//                     <ul className={styles['footer-list']}>
//                         <li className={styles['footer-list-item']}><a href="#">Mentions Légales</a></li>
//                         <li className={styles['footer-list-item']}><a href="#">Politique de confidentialité</a></li>
//                         <li className={styles['footer-list-item']}><a href="#">Préférences en matière de cookies</a></li>
//                         <li className={styles['footer-list-item']}><a href="#">Public Ciblées</a></li>
//                         <li className={styles['footer-list-item']}><a href="#">Recrutement</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;







import React, { useState, useEffect } from 'react';
import styles from '../styles/Componentes/Footer.module.css';

const Footer = () => {
  const [horaires, setHoraires] = useState({
    lundi: '',
    mardi: '',
    mercredi: '',
    jeudi: '',
    vendredi: '',
    samedi: '',
    dimanche: '',
  });

  useEffect(() => {
    const fetchHoraires = async () => {
      const response = await fetch('/api/pages/UpdateTime');
      const data = await response.json();
      setHoraires(data);
    };

    fetchHoraires();
  }, []);

  return (
    <footer className={styles.footer}>
      <h2>Horaires d'ouverture</h2>
      <ul>
        <li>Lundi: {horaires.lundi}</li>
        <li>Mardi: {horaires.mardi}</li>
        <li>Mercredi: {horaires.mercredi}</li>
        <li>Jeudi: {horaires.jeudi}</li>
        <li>Vendredi: {horaires.vendredi}</li>
        <li>Samedi: {horaires.samedi}</li>
        <li>Dimanche: {horaires.dimanche}</li>
      </ul>
    </footer>
  );
};

export default Footer;
