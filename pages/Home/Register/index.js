// pages\Home\Register\index.js:

import Link from 'next/link';
import styles from './Links.module.css';

const LinksPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Liens de navigation</h1> 
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/Home/Signin" className={styles.link}>
            Se connecter
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/Home/Signup" className={styles.link}>
            S'inscrire
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LinksPage;








