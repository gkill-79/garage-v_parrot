// Components/ServiceForm.js
import React, { useState } from 'react';
import styles from '../styles/Componentes/ServiceForm.module.css';
import { useRouter } from 'next/router';
import Dropzone from './Dropzone';

const ServiceForm = ({ services, setServices }) => {
  const [service, setService] = useState({
    id: '',
    title: '',
    description: '',
    price: '',
    image: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setServices([...services, service]);
    setService({
      id: '',
      title: '',
      description: '',
      price: '',
      image: '',
    });
  };

  const handleDelete = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const handleAdminClick = () => {
    router.push('/Admin/SpaceAdmin');
  };

  const renderService = (service) => (
    <div key={service.id} className={styles['service-item']}>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <p>{service.price}</p>
      <button onClick={() => handleDelete(service.id)} className={styles['delete-button']}>Supprimer ce service</button>
    </div>
  );

  return (
    <div className={styles['form-container']}>
      <div className={styles['admin-title']}>
        <button onClick={handleAdminClick} className={styles['admin-button']}>Espace Administrateur</button>
      </div>
      <h1 className={styles.title}>Ajouter un service</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles['form-input']}
          type="number"
          name="id"
          value={service.id}
          onChange={handleChange}
          placeholder="ID du service"
          required
        />
        <input
          type="text"
          name="title"
          value={service.title}
          onChange={handleChange}
          placeholder="Titre du service"
          required
        />
        <textarea
          className={styles['form-input']}
          name="description"
          value={service.description}
          onChange={handleChange}
          placeholder="Description du service"
          required
        />
        <input
          type="text"
          name="price"
          value={service.price}
          onChange={handleChange}
          placeholder="Prix du service"
          required
        />
        <input
          type="text"
          name="image"
          value={service.image}
          onChange={handleChange}
          placeholder="URL de l'image du service"
          required
        />
        <Dropzone />
        <button type="submit" className={styles.button}>Ajouter un service</button>
      </form>
      <div>
        {services.map(renderService)}
      </div>
    </div>
  );
};

export default ServiceForm;














