

// import Link from "next/link";
// import React, { useState } from "react";
// import styles from '../../styles/Home/Admin/Login.module.css';
// import Header from '../../Componente/Header';
// import Footer from '../../Componente/Footer';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div>
//         <Header />
//         <div className={styles.container}>
//           <div className={styles.row}>
















// "use client"

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import styles from '../../styles/Home/Admin/Login.module.css';
// import Header from '../../Componente/Header';
// import Footer from '../../Componente/Footer';
// import Link from "next/link";


// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     backgroundColor: '#fff',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// }

// export default function BasicModal() {
//     const [open, setOpen] = React.useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     return (
//         <div>
//             <Header />
//             <div className={styles.container}>
//             <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
//                 <Box sx={style}>
//                     <Typography id="modal-modal-title" variant="h6" component="h2">
//                         Se connecter
//                     </Typography>
//                     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                         <form className={styles.formContainer} onSubmit={submitHandler}>
//                             <div className={styles.formGroup}>


























