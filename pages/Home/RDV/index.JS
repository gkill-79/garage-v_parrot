// pages/Home/Prendre_RDV.js
import Header from '../../../Componente/Header';
import Footer from '../../../Componente/Footer';
import Form from './Form';
import styles from '../../../styles/Home/PrendreRDV.module.css';

const PrendreRDV = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Prendre un Rendez-vous</h1>
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default PrendreRDV;
