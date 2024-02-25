import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal';
import { CiHeart } from "react-icons/ci";
import './CarList.css';

const CarList = ({ adverts }) => {
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  const openModal = (advert) => {
    setSelectedAdvert(advert);
  };

  const closeModal = () => {
    setSelectedAdvert(null);
  };

  const handleAddToFavorites = async (advert) => {
    try {
      // Відправляємо запит POST до бекенду для додавання оголошення до списку улюблених
      await axios.post(`https://65d842e2c96fbb24c1bb1069.mockapi.io/advert/favorites`, advert);
      console.log('Advert added to favorites:', advert);
    } catch (error) {
      console.error('Error adding advert to favorites:', error);
    }
  };

  return (
    <div className="car-list">
      {adverts.map((advert) => {
        const addressParts = advert.address.split(", ");
        const lastWord = addressParts[addressParts.length - 1];
        const secondLastWord = addressParts[addressParts.length - 2];
        const firstWord = addressParts[0];

        const firstAccessory = advert.accessories[0];
        
        return (
          <div key={advert.id} className="car-item">
            <div className="car-image-container">
              <img src={advert.img} alt={advert.make + ' ' + advert.model} className="car-image" />
              <div className="heart-icon" onClick={() => handleAddToFavorites(advert)}>
                <CiHeart className="heart-icon" style={{ width: '18px', height: '18px' }} />
              </div>
            </div>
            <div className="car-details">
              <h3>
                {advert.make} <span className="model">{advert.model}</span>, {advert.year} <span className="rental-price">{advert.rentalPrice}</span>
              </h3>
              <div>
                <p>
                  {secondLastWord ? secondLastWord : ''} | {lastWord ? lastWord : ''} | {firstWord ? firstWord : ''} | {advert.type} | {advert.make} | {advert.id} | {firstAccessory ? firstAccessory : ''}
                </p>
              </div>
              <button className="learn-more-btn" onClick={() => openModal(advert)}>
                Learn more
              </button>
            </div>
          </div>
        );
      })}
      {selectedAdvert && (
        <Modal advert={selectedAdvert} closeModal={closeModal} />
      )}
    </div>
  );
};

export default CarList;