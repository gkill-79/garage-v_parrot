// pages/Admin/SpaceAdmin.js
import Link from 'next/link';
import styles from '../../styles/Admin/SpaceAdmin.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';

const Administrateur = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>L'Espace Administrateur</h1>
                <Link href="/Admin" className={styles.adminButton}>Espace Administration</Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/Admin/CreateUser" className={styles.link} passHref>
                            Créer ou supprimer un compte employé
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/Admin/ServiceManagement" className={styles.link} passHref>
                            Ajouter ou enlever des services
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/Admin/UpdateTime" className={styles.link} passHref>
                            Modifier les horaires
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/Admin/HandleCars" className={styles.link} passHref>
                            Changement des véhicules d'occasion
                        </Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Administrateur;
























