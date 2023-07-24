// pages/Admin/ServiceManagement.js
import React, { useState } from 'react';
import Header from '../../Componente/Header';
import Footer from '../../Componente/Footer';
import ServiceForm from '../../Componente/ServiceForm';
import ServiceData from '../../Componente/ServiceData';

const ServiceManagement = () => {
  const [services, setServices] = useState(ServiceData);

  return (
    <div>
      <Header />
      <ServiceForm services={services} setServices={setServices} />
      <Footer />
    </div>
  );
};

export default ServiceManagement;
