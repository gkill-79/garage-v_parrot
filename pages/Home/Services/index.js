// ServicePage.js
import Header from '../../../Componente/Header';
import Footer from '../../../Componente/Footer';
import EncadreService from './EncadreService';
import styles from '../../../styles/Home/Services/ServicePage.module.css';

const ServicePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Nos Services</h1> 
        <EncadreService 
          image="/images/entretien/vidange.avif"
          imgClassName={styles.encadreService}  // ajoutez cette ligne
          price="79.90"
          text="Il est important de faire une révision complète et la vidange de sa voiture avant un long trajet. Si vous partez en vacances, prenez rendez-vous dans un garage AD afin"
        />
        {/* Ajoute ici les autres encadrés avec les différentes informations */}
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
















