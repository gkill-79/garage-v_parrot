

// import React, { useState } from "react";
// import styles from '../../../styles/Home/Register/Register.module.css';
// import Header from '../../Componente/Header';
// import Footer from '../../Componente/Footer';

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div>
//         <Header />
//         <div className={styles.container}>
//         <div className={styles.row}>
//             <div className={styles.col}>
//             <form className={styles.formContainer} onSubmit={submitHandler}>
//                 <h1 className={styles.title}>Inscription</h1>

//                 <div className={styles.formGroup}>
//                 <label htmlFor="name_field" className={styles.formLabel}>Nom</label>
//                 <input
//                     type="text"
//                     id="name_field"
//                     className={styles.formInput}
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 </div>

//                 <div className={styles.formGroup}>
//                 <label htmlFor="email_field" className={styles.formLabel}>Adresse e-mail</label>
//                 <input
//                     type="email"
//                     id="email_field"
//                     className={styles.formInput}
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 </div>

//                 <div className={styles.formGroup}>
//                 <label htmlFor="password_field" className={styles.formLabel}>Mot de passe</label>
//                 <input
//                     type="password"
//                     id="password_field"
//                     className={styles.formInput}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 </div>

//                 <button
//                 type="submit"
//                 className={styles.submitBtn}
//                 >
//                 S'inscrire
//                 </button>
//             </form>
//             </div>
//         </div>
//         </div>
//         <Footer />
//     </div>
//   );
// };

// export default Register;









import React, { useState } from 'react';
import styles from '../../styles/Admin/CreateUser.module.css';

const CreateUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async e => {
      e.preventDefault();
      if (password !== confirmPassword) {
          alert("Les mots de passe ne correspondent pas !");
      } else {
          try {
              const response = await fetch('/api/users', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ firstName, lastName, email, password }),
              });
              if (!response.ok) {
                  throw new Error('Erreur lors de la création de l\'utilisateur');
              }
              const data = await response.json();
              alert('Utilisateur créé avec succès!');
          } catch (error) {
              alert(error.message);
          }
      }
  }

    return (
        <div className={styles.createUserContainer}>
            <h1>Créer un compte utilisateur</h1>
            <form className={styles.createUserForm} onSubmit={handleSubmit}>
                <label htmlFor="firstName">Prénom:</label>
                <input type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />

                <label htmlFor="lastName">Nom:</label>
                <input type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password">Mot de passe:</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />

                <label htmlFor="confirmPassword">Confirmez le mot de passe:</label>
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />

                <button type="submit">Créer le compte</button>
            </form>
        </div>
    )
}

export default CreateUser;
















