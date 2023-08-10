// pages/Home/AppointmentForm.js
import React from 'react';
import styles from '../../../styles/Home/AppointmentForm.module.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  message: yup.string().required(),
  date: yup.date().required(),
  time: yup.string().required(),
});

const RdvForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  
  const onSubmit = async (appointment) => {
    const response = await fetch('/api/AppointmentForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointment),
    });
    
    if (response.ok) {
      console.log('Succès:', await response.json());
      alert('Votre rendez-vous a bien été pris en compte !');
    } else {
      console.error('Erreur:', await response.json());
    }
  };

  return (
    <div className={styles.appointmentContainer}>
        <h2 className={styles.header}>Réparation mécaniques et carrosseries</h2> 
        <div className={styles.formContainer}>
            <h3 className={styles.title}>Prise de rendez-vous</h3>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} action='/AppointmentForm' method='post'>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <label className={styles.label} htmlFor="firstname">Prénom :</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="firstname"
                            name="firstname"
                            {...register("firstname")}
                        />
                        <label className={styles.label} htmlFor="lastname">Nom :</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="lastname"
                            name="lastname"
                            {...register("lastname")}
                        />
                        <label className={styles.label} htmlFor="email">Email :</label>
                        <input
                            className={styles.input}
                            type="email"
                            id="email"
                            name="email"
                            {...register("email")}
                        />
                        <label className={styles.label} htmlFor="phone">Téléphone :</label>
                        <input
                            className={styles.input}
                            type="tel"
                            id="phone"
                            name="phone"
                            {...register("phone")}
                        />
                    </div>
                    <div className={styles.column}>
                        <label className={styles.label} htmlFor="message">Message :</label>
                        <textarea
                            className={styles.input}
                            id="message"
                            name="message"
                            {...register("message")}
                        />
                        <label className={styles.label} htmlFor="date">Date :</label>
                        <input
                            className={styles.input}
                            type="date"
                            id="date"
                            name="date"
                            {...register("date")}
                        />
                        <label className={styles.label} htmlFor="time">Heure :</label>
                        <input
                            className={styles.input}
                            type="time"
                            id="time"
                            name="time"
                            {...register("time")}
                        />
                        {/* <label className={styles.label} htmlFor="repairType">Type de réparation :</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="repairType"
                            name="repairType"
                            required
                        /> */}
                    </div>
                </div>
                <div className={styles.submitButton}>
                    <button className={styles.button} type="submit">Prendre rendez-vous</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default RdvForm;

















