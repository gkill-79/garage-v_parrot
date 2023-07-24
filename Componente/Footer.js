



// import React from 'react';
// import styles from '../styles/Componentes/Footer.module.css';

// const Footer = () => {
//     return (
//         <footer className={styles.footer}>
//             <div className={styles['footer-center']}>
//                     <h3>Garage V Parrot</h3>
//             </div>
//             <div className={styles['footer-content']}>
//                 <div className={styles['footer-left']}>
//                     <p>Lundi: Fermé</p>
//                     <p>Mardi - Vendredi: 9h00 - 12h30, 14h00 - 18h30</p>
//                     <p>Samedi: 9h00 - 12h30, 14h00 - 19h00</p>
//                     <p>Dimanche: Fermé</p>
//                 </div>

//                 <div className={styles['footer-right']}>
//                     <h3>Liens Utiles</h3>
//                     <ul>
//                         <li><a href="#">Mentions Légales</a></li>
//                         <li><a href="#">Politique de confidentialité</a></li>
//                         <li><a href="#">Préférences en matière de cookies</a></li>
//                         <li><a href="#">Public Ciblées</a></li>
//                         <li><a href="#">Recrutement</a></li>
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
        lundi: 'Fermé',
        mardi: '9h00 - 12h30, 14h00 - 18h30',
        mercredi: '9h00 - 12h30, 14h00 - 18h30',
        jeudi: '9h00 - 12h30, 14h00 - 18h30',
        vendredi: '9h00 - 12h30, 14h00 - 18h30',
        samedi: '9h00 - 12h30, 14h00 - 19h00',
        dimanche: 'Fermé',
    });

    // Simule l'appel au backend pour récupérer les horaires
    useEffect(() => {
        // Suppose que fetchHoraires() retourne les horaires du backend
        // setHoraires(fetchHoraires());
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={styles['footer-center']}>
                <h3>Garage V Parrot</h3>
            </div>
            <div className={styles['footer-content']}>
                <div className={styles['footer-left']}>
                    <p>Lundi: {horaires.lundi}</p>
                    <p>Mardi: {horaires.mardi}</p>
                    <p>Mercredi: {horaires.mercredi}</p>
                    <p>Jeudi: {horaires.jeudi}</p>
                    <p>Vendredi: {horaires.vendredi}</p>
                    <p>Samedi: {horaires.samedi}</p>
                    <p>Dimanche: {horaires.dimanche}</p>
                </div>
                <div className={styles['footer-right']}>
                    <h3>Liens Utiles</h3>
                    <ul className={styles['footer-list']}>
                        <li className={styles['footer-list-item']}><a href="#">Mentions Légales</a></li>
                        <li className={styles['footer-list-item']}><a href="#">Politique de confidentialité</a></li>
                        <li className={styles['footer-list-item']}><a href="#">Préférences en matière de cookies</a></li>
                        <li className={styles['footer-list-item']}><a href="#">Public Ciblées</a></li>
                        <li className={styles['footer-list-item']}><a href="#">Recrutement</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;







