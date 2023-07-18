import React from 'react';
import Header from '../../../Componente/Header';
import Footer from '../../../Componente/Footer';
import CarouselEntretien from '../../../Componente/CarouselEntretien';

const EntretienPage = () => {
    // Vous pouvez remplacer ceci par les données de votre choix
    const items = [
        {
            image: '/images/entretien.jpg',
            title: 'Vidange et Révision',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi quo a placeat voluptatem at vitae molestias aspernatur, corrupti voluptatum.'
        },
        // Plus d'items ici...
    ];
    
    return (
        <div>
            <Header />
            <CarouselEntretien items={items} />
            <Footer />
        </div>
    );
}

export default EntretienPage;

