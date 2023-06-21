import Image from 'next/image'
import styles from './Header.module.css'

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
                </div>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li><a href="/occasion">Occasion</a></li>
                    <li><a href="/entretient">Entretient</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/bon-plan">Bon Plan</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header