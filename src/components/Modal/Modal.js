import React from 'react';
import './Modal.css';

const Modal = ({ advert, closeModal, secondLastWord, lastWord }) => {
    const addressParts = advert.address.split(", ");
  const last = addressParts[addressParts.length - 1];
  const secondLast = addressParts[addressParts.length - 2];

  const rentalConditionsParts = advert.rentalConditions.split("\n");
  const firstRentalCondition = rentalConditionsParts[0];
  const secondRentalCondition = rentalConditionsParts[1];
  const thirdRentalCondition = rentalConditionsParts[2];

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>&times;</span>
        <div className="car-details">
          <div className="car-image">
            <img src={advert.img} alt={`${advert.make} ${advert.model}`} />
          </div>
          <div className="car-info">
          <h3>
                {advert.make} <span className="model">{advert.model}</span>, {advert.year}
              </h3>
            <p>{secondLast ? secondLast : ''} | {last ? last : ''} | Id: {advert.id} | Year: {advert.year} | Type: {advert.type} | Fuel Consumption: {advert.fuelConsumption} | Engine Size: {advert.engineSize}</p>
            <h4 className="model-description">{advert.description}</h4>            
            <div className="accessories">
              <h3>Accessories and functionalities:</h3>
              <p>{advert.accessories.join(' | ')}</p>
            </div>
            <h3>Rental Conditions:</h3>
            <div className="rental-conditions">              
              <h4 className="condition">{firstRentalCondition ? firstRentalCondition : ''}</h4>
              <h4 className="condition">{secondRentalCondition ? secondRentalCondition : ''}</h4>
              <h4 className="condition">{thirdRentalCondition ? thirdRentalCondition : ''}</h4>
              <h4 className="condition">Mileage: <span className="model">{advert.mileage}</span></h4>
              <h4 className="condition">Price: <span className="model">{advert.rentalPrice}</span></h4>
            </div>
            <button className="rental-btn">Rental car</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;