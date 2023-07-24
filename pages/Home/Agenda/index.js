



import React from 'react';
import Header from '../../../Componente/Header';
import Footer from '../../../Componente/Footer';
import RdvForm from './Form';
import styles from '../../../styles/Home/Prendre_RDV/PrendreRDV.module.css';

const PrendreRDV = () => {


return (
    <div>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.title}>Prendre un Rendez-vous</h1>
            <RdvForm />
        </div>
        <Footer />
    </div>
  );
}

export default PrendreRDV;







