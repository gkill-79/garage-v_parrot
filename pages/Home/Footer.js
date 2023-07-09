



import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-center']}>
                    <h3>Garage V Parrot</h3>
            </div>
            <div className={styles['footer-content']}>
                <div className={styles['footer-left']}>
                    <p>Lundi: Fermé</p>
                    <p>Mardi - Vendredi: 9h00 - 12h30, 14h00 - 18h30</p>
                    <p>Samedi: 9h00 - 12h30, 14h00 - 19h00</p>
                    <p>Dimanche: Fermé</p>
                </div>

                <div className={styles['footer-right']}>
                    <h3>Liens Utiles</h3>
                    <ul>
                        <li><a href="#">Mentions Légales</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                        <li><a href="#">Préférences en matière de cookies</a></li>
                        <li><a href="#">Public Ciblées</a></li>
                        <li><a href="#">Recrutement</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



















