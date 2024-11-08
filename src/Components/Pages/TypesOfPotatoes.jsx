import React from "react";
import Slider from "react-slick";
import "./TypesOfPotatoes.css"; // Import the CSS file for styling
import { Link } from "react-router-dom"; // Import Link for navigation
// Import your potato images
import russetImage from "../../assets/prime.jpg";
import fingerImage from "../../assets/hybrid.jpeg";
import yellowImage from "../../assets/yellow.jpg";
import redImage from "../../assets/2001.webp";
import purpleImage from "../../assets/chipsona.jpg";
import alooDhokla from "../../assets/russet1.png";
import alooBukharaRed from "../../assets/red1.png";
import alooKesar from "../../assets/yellow1.png";
import alooBukharaWhite from "../../assets/white1.png";
import alooChipsona from "../../assets/purple1.png";
import fingerlingPotatoes from "../../assets/finger1.png";
import diversityIcon from "../../assets/diversity.png";
import flavorIcon from "../../assets/flavor.png";
import nutritionIcon from "../../assets/nutrit.png";
import cookingIcon from "../../assets/cooking.png";
import mohanImage from "../../assets/mohan.png";
import kyathiImage from "../../assets/kyati.jpg";
import hasanImage from "../../assets/hasan.jpeg";
import jyothiImage from "../../assets/jyothi.webp";

import tyImage from "../../assets/websiteimage3.jpg";

import Footer from "../Footer/Footer";
import Scroll from './scroll';

// Slider data
const potatoTypes = [
  {
    title: "Prime 3797",
    description: "Great for baking and mashing due to their fluffy texture.",
    imageUrl: russetImage,
    link: "/finger",
  },
  {
    title: "Hybrid 302",
    description: "Small, waxy potatoes perfect for roasting and salads.",
    imageUrl: fingerImage,
    link: "/red",
  },
  {
    title: "Chipsona Delight",
    description: "Specially grown for making crispy chips!",
    imageUrl: purpleImage,
    link: "/chip",
  },
  {
    title: "Classic 2001",
    description: "Best for soups and salads due to their firm texture.",
    imageUrl: redImage,
    link: "/russet",
  },
  {
    title: "Mohan Special",
    description: "A versatile potato good for various dishes.",
    imageUrl: mohanImage,
    link: "/Yellow",
  },
  {
    title: "Kyathi Gold",
    description: "A buttery-textured potato that's great for all kinds of dishes.",
    imageUrl: kyathiImage,
    link: "/kyathi",
  },
  {
    title: "Jyothi Star",
    description: "Excellent for frying and making curries.",
    imageUrl: jyothiImage,
    link: "/jyothi",
  },
  {
    title: "Hasan Best",
    description: "Ideal for making delicious mashed potatoes.",
    imageUrl: hasanImage,
    link: "/hasan",
  },
];

const TypesOfPotatoes = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  };

  return (
    <div className="potato-slider-containers">
      {/* Hero Section */}
      <div className="tyhero-section">
        <img
          src={tyImage}
          alt="Types of Potatoes"
          className="tyhero-image"
        />
        <div className="tyhero-overlay">
          <h1 className="header-titles">Types of Potatoes</h1>
        </div>
      </div>

      <br />

      <section className="potato-types-section">
        <div className="potato-types-container">
          <h2 className="potato-types-heading">Types of Potatoes</h2>
          <p className="potato-types-paragraph">
            Potatoes come in many varieties, each with its unique characteristics. Whether you're looking for a potato that's perfect for baking, frying, or mashing, there's a type that suits your needs. From waxy to starchy, the types of potatoes offer endless possibilities for delicious dishes.
          </p>
        </div>
      </section>

      <br />
      <div className="potato-cards-container">
        {potatoTypes.map((potato, index) => (
          <div key={index} className="potato-card">
            <img
              src={potato.imageUrl}
              alt={potato.title}
              className="potato-card-image"
            />
            <div className="potato-card-info">
              <h3>{potato.title}</h3>
              <p>{potato.description}</p>
              <Link to={potato.link} className="know-more-btn">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Content */}
      <div className="additional-content">
        <div className="centered-section">
          <h2>How Many Types of Potatoes Are There?</h2>
          <p>
            There are more than 200 varieties of potatoes sold throughout the United States. Each of these varieties fits into one of seven potato type categories: russet, red, white, yellow, blue/purple, fingerling, and petite. Potatoes can be used to fuel the body and the brain throughout the day. Easy to prepare and pair with a variety of cuisines, potatoes lend themselves to convenient meal prep to fuel you throughout the week.
          </p>
        </div>

        {/* Potato Varieties Section */}
        <section className="potato-varieties">
          {potatoTypes.map((potato, index) => (
            <div key={index} className="potato-card">
              <div className="potato-content">
                <div className="potato-front">
                  <h3>{potato.title}</h3>
                </div>
                <div className="potato-back">
                  <p>{potato.description}</p>
                  <Link to={potato.link} className="learn-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Scroll />
      <Footer />
    </div>
  );
};

export default TypesOfPotatoes;
