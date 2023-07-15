
// Componente\CarSelectionPage.js
import React, { useState } from 'react';
import cars from '../Second-handGallery'; // Ici on importe les voitures de Second-handGallery.js

const CarSelectionPage = () => {
    const [selectedCar, setSelectedCar] = useState(null); // aucune voiture sélectionnée par défaut

    return (
        <div>
            <SelectCar cars={cars} selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
            {selectedCar && <CarPage car={selectedCar} />}
        </div>
    );
};

export default CarSelectionPage;














