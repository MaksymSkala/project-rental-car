import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // імпорт стилів

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Car rental</h1>
      <p>Considering today's economic situation, our company offers affordable and loyal car rental prices.</p>
      {/* Додано ServicesSection */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service">
          <h3>Service 1</h3>
          <p>Description of service 1.</p>
        </div>
        <div className="service">
          <h3>Service 2</h3>
          <p>Description of service 2.</p>
        </div>
        <div className="service">
          <h3>Service 3</h3>
          <p>Description of service 3.</p>
        </div>
      </section>
      <div>
      
      <Link to="/catalog" className="button">
        View Catalog
      </Link>
      <Link to="/favorites">Favorites</Link>
    </div>
    </div>
  );
};

export default HomePage;
