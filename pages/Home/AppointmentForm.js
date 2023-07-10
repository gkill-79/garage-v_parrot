// pages/Home/AppointmentForm.js
import React, { useState } from 'react';
import styles from '../../styles/Home/AppointmentForm.module.css';

const AppointmentForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstname, lastname, email, phone, message, date, time, repairType } = event.target.elements;
    const appointment = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
      date: date.value,
      time: time.value,
      repairType: repairType.value,
    };
    console.log(appointment);
  };

  return (
    <div className={styles.appointmentContainer}>
        <h2 className={styles.header}>Réparation mécaniques et carrosseries</h2> 
        <div className={styles.formContainer}>
            <h3 className={styles.title}>Prise de rendez-vous</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <label className={styles.label} htmlFor="firstname">Prénom :</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="firstname"
                            name="firstname"
                            required
                        />
                        <label className={styles.label} htmlFor="lastname">Nom :</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="lastname"
                            name="lastname"
                            required
                        />
                        <label className={styles.label} htmlFor="email">Email :</label>
                        <input
                            className={styles.input}
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                        <label className={styles.label} htmlFor="phone">Téléphone :</label>
                        <input
                            className={styles.input}
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                        />
                    </div>
                    <div className={styles.column}>
                        <label className={styles.label} htmlFor="message">Message :</label>
                        <textarea
                            className={styles.input}
                            id="message"
                            name="message"
                        />
                        <label className={styles.label} htmlFor="date">Date :</label>
                        <input
                            className={styles.input}
                            type="date"
                            id="date"
                            name="date"
                            required
                        />
                        <label className={styles.label} htmlFor="time">Heure :</label>
                        <input
                            className={styles.input}
                            type="time"
                            id="time"
                            name="time"
                            required
                        />
                        <label className={styles.label} htmlFor="repairType">Type de réparation :</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="repairType"
                            name="repairType"
                            required
                        />
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

export default AppointmentForm;



