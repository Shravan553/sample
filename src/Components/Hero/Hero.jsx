import React, { useState, useEffect } from 'react';
import './Hero.css';
import img1 from '../../assets/extra7.jpg';
import img2 from '../../assets/ma.png';
import img3 from '../../assets/websiteimage3.jpg';
import img4 from '../../assets/webimage8.png';
import img5 from '../../assets/websiteimage7.png';
import img6 from '../../assets/websiteimage9.png';
import img7 from '../../assets/websiteimage10.png';

const slides = [
  {
    image: img5,
    heading: " agpotato - Crust & Pure , Sustainable Potato Flour",
    description: "AGPotato is committed to producing high-quality potato flour through sustainable practices. Our potato flour is not only rich in nutrients but also versatile."
  },
  {
    image: img4,
    heading: "Global Excellence in Potato Export",
    description: "Exporting the Best of Potatoes, With a Focus on Sustainability",
    showText: false, // This will control whether to display the text
  },
  {
    image: img2,
    heading: "agpotato - Leading the Way in Farming Innovation",
    description: "At AGPotato, we champion cutting-edge, sustainable farming techniques, empowering farmers to optimize their potato crops for maximum yield and quality."
  },
  {
    image: img3,
    heading: "agpotato - Revolutionizing the Future of agriculture",
description: "AGPotato transforms potato farming with advanced eco-friendly techniques, ensuring higher yields while fostering a sustainable agricultural future."
  },
  {
    image: img7,
    heading: "agpotato - Pure, Natural & Sustainable Potato Flour",
    description: "AGPotato is committed to producing high-quality potato flour through sustainable practices. Our potato flour is not only rich in nutrients but also versatile."
  }
];

const WebHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000); // Change slide every 9 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="web-hero">
      <div className="web-hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`web-hero-slide ${index === currentIndex ? 'web-active' : ''} ${slide.image === img4 ? 'img4-active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Render text conditionally */}
            {slide.showText !== false && (
              <div className="web-hero-text">
                <h1>{slide.heading}</h1>
                <p>{slide.description}</p>
              </div>
            )}
          </div>
        ))}
        <div className="web-slider-controls">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`web-slider-dot ${index === currentIndex ? 'web-active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebHero;