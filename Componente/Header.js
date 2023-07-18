


// src/components/Header.js
import Link from 'next/link' // Changer de react-router-dom à next/link&
import Image from 'next/image'
import styles from '../styles/Componentes/Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoSection}>
                <Image src="/path-to-logo.png" alt="Logo" width={60} height={60} />
                <h1 className={styles.title}>v.parrot garage</h1>
            </div>
            <div className={styles.middleSection}>
                <input type="search" placeholder="Rechercher" className={styles.search} />
                <div className={styles.contact}>
                    <Image src="/path-to-phone-icon.png" alt="Téléphone" width={30} height={30} />
                    <span>+33 1 23 45 67 89</span>
                    <Image src="/path-to-user-icon.png" alt="Connexion" width={30} height={30} />
                        <Link href="/Home/Register" legacyBehavior>
                        <a className={styles.card}>
                            <h2>Se connecter</h2>
                            <p>Accédez à votre compte.</p>
                            </a>
                        </Link>
                </div>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Home/Occasion">Occasion</a></li>
                    <li><a href="/Home/Entretien">Entretien</a></li>
                    <li><a href="/Home/Services">Services</a></li>
                    <li><a href="/bon-plan">Bon Plan</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
















