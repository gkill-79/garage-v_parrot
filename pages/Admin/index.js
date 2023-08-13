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
                        <Link href="/Admin/SpaceUsed" className={styles.link} passHref>
                            Espace employés
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/Admin/SpaceAdmin" className={styles.link} passHref>
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









// // pages\admin\IndexAdmin.js
// import Link from 'next/link';
// import styles from '../../styles/Admin/IndexAdmin.module.css';
// import Header from '../../Componente/Header';
// import Footer from '../../Componente/Footer';

// const IndexAdmin = () => {
//     return (
//         <div>
//             <Header />
//             <div className={styles.container}>
//                 <h1 className={styles.title}>Espace Administration</h1>
//                 <ul className={styles.list}>
//                     <li className={styles.listItem}>
//                         <Link href="/Admin/Signin" className={styles.link}>
//                             Espace employés
//                         </Link>
//                     </li>
//                     <li className={styles.listItem}>
//                         <Link href="/Admin/Signup" className={styles.link}>
//                             Espace administrateur
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default IndexAdmin;