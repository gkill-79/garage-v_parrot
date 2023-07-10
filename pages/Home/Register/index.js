// pages\Home\Register\index.js:

import Link from 'next/link';
import styles from './Links.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';

const LinksPage = () => {
  return (
    <div>
        <Header />
    <div className={styles.container}>
      <h1 className={styles.title}>Liens de navigation</h1> 
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/Home/Register/Login" className={styles.link}>
            Se connecter
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/Home/Register/Register" className={styles.link}>
            S'inscrire
          </Link>
        </li>
      </ul>
    </div>
        <Footer />
    </div>
  );
};

export default LinksPage;








