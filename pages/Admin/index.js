// pages\admin\IndexAdmin.js
import Link from 'next/link';
import styles from '../../styles/Admin/IndexAdmin.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';

const IndexAdmin = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Espace Administration</h1>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link href="/Admin/CreateUser" className={styles.link}>
                            Espace employés
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/Admin/Login" className={styles.link}>
                            Espace administrateur
                        </Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default IndexAdmin;








