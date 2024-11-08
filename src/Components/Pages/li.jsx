import React from 'react';
import { Link } from 'react-router-dom';
import './li.css';
import tre from '../../assets/f.png'; // Path to your image

const Li = () => {
  return (
    <div className="potato-potato-section">
      {/* Image container */}
      <div className="potato-image-container">
        <img src={tre} alt="Woman on phone" className="potato-main-image" />
      </div>

      {/* Mobile-only content */}
      <div className="mobile-content">
        Potatoes: A Nutrient-Rich Superfood

        {/* Mobile Buttons */}
        <div className="mobile-button-container">
          <Link to="/AboutUS" className="mobile-button mobile-know-more">Know More</Link>
          <Link to="/nutritional-facts" className="mobile-button mobile-facts">Facts</Link>
        </div>
      </div>

      {/* Desktop content */}
      <div className="potato-content-wrapper">
        <h2 className="potato-title">Potato Nutrition</h2>
        <div className="potato-gradient-bar"></div>

        <h4 className="potato-subtitle">Fueling Performance</h4>
        <p className="potato-paragraph">Potatoes are a nutrient-dense powerhouse that provides the energy, potassium, and vitamin C you need to fuel your day.</p>

        <h4 className="potato-subtitle">Get the Facts</h4>
        <p className="potato-paragraph">Potatoes are more energy-packed than any other popular vegetable, are an excellent source of vitamin C, and have more potassium than a banana.</p>

        <h4 className="potato-subtitle">In Your Diet</h4>
        <p className="potato-paragraph">Potatoes are naturally fat-free, cholesterol-free, and sodium-free, with only 110 calories per 5.3-ounce serving.</p>

        {/* Buttons displayed only in desktop view */}
        <div className="potato-button-container">
          <Link to="/AboutUS" className="potato-button potato-about-us">ABOUT US</Link>
          <Link to="/nutritional-facts" className="potato-button potato-our-team">FACTS</Link>
        </div>
      </div>
    </div>
  );
};

export default Li;
