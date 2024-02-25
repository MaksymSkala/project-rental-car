import React, { useState } from 'react';
import './Filters.css';

const Filters = ({ brands, prices, minMileage, maxMileage, onApplyFilters }) => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [minMileageValue, setMinMileageValue] = useState(minMileage);
  const [maxMileageValue, setMaxMileageValue] = useState(maxMileage);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleMinMileageChange = (event) => {
    setMinMileageValue(event.target.value);
  };

  const handleMaxMileageChange = (event) => {
    setMaxMileageValue(event.target.value);
  };

  const handleApplyFilters = () => {
    const filters = {
      brand: selectedBrand,
      price: selectedPrice,
      minMileage: minMileageValue,
      maxMileage: maxMileageValue,
    };
    onApplyFilters(filters);
  };

  return (
    <div className="filters">
  <div className="input-group">
    <label htmlFor="brand">Car brand:</label>
    <select id="brand" value={selectedBrand} onChange={handleBrandChange}>
      <option value="">All</option>
      {brands.map((brand, index) => (
        <option key={index} value={brand}>
          {brand}
        </option>
      ))}
    </select>
  </div>
  <div className="input-group">
    <label htmlFor="price">Price/ 1 hour:</label>
    <select id="price" value={selectedPrice} onChange={handlePriceChange}>
      <option value="">All</option>
      {prices.map((price, index) => (
        <option key={index} value={price}>
          {price}
        </option>
      ))}
    </select>
  </div>
  <div className="input-group">
    <label htmlFor="mileage">Car mileage / km:</label>
    <div className="mileage-input">
      <input id="minMileage" type="number" value={minMileageValue} onChange={handleMinMileageChange} placeholder="From" />
      
      <input id="maxMileage" type="number" value={maxMileageValue} onChange={handleMaxMileageChange} placeholder="To" />
    </div>
  </div>
  <button onClick={handleApplyFilters}>Search</button>
</div>
  );
};

export default Filters;