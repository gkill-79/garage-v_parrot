// pages/Employee/EmployeeSpace.js

import Link from 'next/link';
import styles from '../../styles/Admin/SpaceUsed.module.css';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';

const SpaceUsed = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>L'Espace Employé</h1>
                <Link href="/Admin" className={styles.employeeButton}>Espace Administration</Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/Admin/ModerateVisitorMessages" className={styles.link} passHref>
                            Modération des Messages des Visiteurs
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/Admin/HandleCars" className={styles.link} passHref>
                            Changement des Véhicules d'Occasion
                        </Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default SpaceUsed;
























