
// pages/Home/AppointmentForm.js
import React, { useState } from 'react';
import styles from './AppointmentForm.module.css';

const AppointmentForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { date, time, repairType } = event.target.elements;
    const appointment = {
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
            <h3>Prise de rendez-vous</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
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
            <button className={styles.button} type="submit">Prendre rendez-vous</button>
            </form>
        </div>
    </div>
  );
};

export default AppointmentForm;
