// pages/Home/Services/index.js
import React from 'react';
import Header from '../../../Componente/Header';
import Footer from '../../../Componente/Footer';
import CarouselServices, { services } from '../../../Componente/CarouselServices';
import ServiceData from '../../../Componente/ServiceData';

const ServicesPage = () => {

  return (
    <div>
      <Header />
      <CarouselServices items={ServiceData} />
      <Footer />
    </div>
  );
}

export default ServicesPage;
