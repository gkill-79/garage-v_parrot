// src/pages/Signin.jsx
// import React, { useState, useContext } from "react";
// import { useRouter } from 'next/router'; // importez le hook useRouter de next/router
// import { AuthContext } from "./AuthContext";
// import styles from './Signin.module.css'; // importez votre fichier CSS comme un module

// // Composant de connexion (formulaire) avec hooks et fonction fléchée (useState) et useContext (AuthContext)  (contexte d'authentification)
// const Signin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { signIn } = useContext(AuthContext);
//   const router = useRouter(); // utilisez le hook useRouter


//   // fonction de soumission du formulaire de connexion
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (signIn(email, password)) {
// //       router.push("/"); // utilisez router.push pour naviguer
// //     } else {
// //       alert("Email ou mot de passe incorrect.");
// //     }
// //   };

//   // affichage du formulaire de connexion
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>Se connecter</h2>
//       <form onSubmit={handleSubmit}>
//         <input className={styles['mail-pass']}
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input className={styles['mail-pass']}
//           type="password"
//           placeholder="Mot de passe"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className={styles.signin} type="submit">Se connecter</button>
//       </form>
//     </div>
//   );
// };

// export default Signin;
