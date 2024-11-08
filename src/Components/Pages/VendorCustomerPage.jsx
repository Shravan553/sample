import './VendorCustomerPage.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import React, { useState, useEffect } from 'react';

// Import images
import marketImage from '../../assets/6.png';
import potatoImage1 from '../../assets/3797.jpeg';
import potatoImage2 from '../../assets/302.jpeg';
import potatoImage3 from '../../assets/Chipsona.jpeg';
import potatoImage4 from '../../assets/2001.jpeg';
import potatoImage5 from '../../assets/Mohan.jpeg';
import potatoImage6 from '../../assets/kyathi.jpeg';
import potatoImage7 from '../../assets/jyothi.jpeg';
import potatoImage8 from '../../assets/hasan.jpeg';
import frozenProductImage from '../../assets/Mohan.jpeg';
import byproductImage from '../../assets/Mohan.jpeg';

// Category Images
import freshPotatoesIcon from '../../assets/302.jpeg';
import frozenProductsIcon from '../../assets/vandc2.jpg';
import byproductsIcon from '../../assets/vandc3.jpg';


import f1 from '../../assets/vandc4.jpg';
import f2 from '../../assets/vandc5.jpg';
import f3 from '../../assets/vandc6.png';
import f4 from '../../assets/ingran.png';

import Vegburger1 from '../../assets/Vegburger1.jpg';
import curf from '../../assets/curf.jpg';
import sv1 from '../../assets/sv1.jpeg';
import sv2 from '../../assets/sv2.jpg';
import hashBrown from '../../assets/hash.jpg';
import tikka1 from '../../assets/tikka1.png';
import chilli from '../../assets/chilli1.webp';
import bite1 from '../../assets/bite1.jpg';

import balls1 from '../../assets/balls1.jpg';













const VendorCustomerPage = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const potatoVariants = [
    { name: '3797', description: 'A high-yield variety.', image: potatoImage1 },
    { name: '302 Hybrid', description: 'Resistant to diseases.', image: potatoImage2 },
    { name: 'Chipsona', description: 'Popular for its taste.', image: potatoImage3 },
    { name: '2001', description: 'Ideal for making chips.', image: potatoImage4 },
    { name: 'Mohan', description: 'Known for its quality.', image: potatoImage5 },
    { name: 'Kyathi', description: 'Excellent cooking variety.', image: potatoImage6 },
    { name: 'Jyothi', description: 'Great for frying.', image: potatoImage7 },
    { name: 'Hasan Potatoes', description: 'Well-suited for various recipes.', image: potatoImage8 },
  ];

  const byProducts = [
    { name: 'Potato Flour', description: 'A fine, gluten-free flour perfect for baking and thickening sauces.', image: f2 },
{ name: 'Potato Milk', description: 'A dairy-free, plant-based milk alternative derived from potatoes.', image: f3 },
{ name: 'Potato Fries', description: 'Crispy, golden fries made from fresh potatoes; perfect as a snack or side.', image: f1 },
{ name: 'Potato Granules', description: 'Dehydrated potato granules, great for quick mashed potatoes or thickening soups.', image: f4 },

  ];

  const frozenProducts = [
    { name: 'Veg Burger Patty', description: 'Juicy veg patties, perfect for burgers.', image: Vegburger1 },
    { name: 'Crinkle Cut French Fries', description: 'Perfectly crispy crinkle-cut fries.', image: curf},
    { name: 'Spicy Wedges', description: 'Seasoned, crispy potato wedges.', image: sv1 },
    { name: 'Veggie Finger', description: 'Crispy veggie fingers, packed with flavor.', image:sv2},
    { name: 'Hash Brown', description: 'Golden, crispy hash browns.', image: hashBrown },
    { name: 'Aloo Tikki', description: 'Traditional, spiced aloo tikkis.', image: tikka1 }, 
     { name: 'Herb Chilli Patty', description: 'A flavorful herb and chili patty.', image: chilli},
    { name: 'Chilli Garlic Bites', description: 'Spicy bites with a kick of garlic.', image: bite1},  
    { name: 'Potato Cheese Shotz', description: 'Cheesy goodness in every bite..', image: balls1 },
  ];
  

  const getDisplayItems = () => {
    if (expandedCategory === 'Fresh Potatoes') return potatoVariants;
    if (expandedCategory === 'Byproducts') return byProducts;
    if (expandedCategory === 'Frozen Products') return frozenProducts;
    return [];
  };

  return (
    <div className="container">
      <img src={marketImage} alt="Marketplace" className="market-image" />
      <br>
      </br>
      <h1 className="headingpot">Browse Our Products: Choose What You’d Like to Buy or Sell.</h1>
      <br>
      </br>

      {/* Category Images */}
      <div className="category-images">
        <div onClick={() => setExpandedCategory(expandedCategory === 'Fresh Potatoes' ? null : 'Fresh Potatoes')}>
          <img src={freshPotatoesIcon} alt="Fresh Potatoes" className="category-image" />
          <p className="category-title1">Fresh Potatoes</p>
        </div>
        <div onClick={() => setExpandedCategory(expandedCategory === 'Frozen Products' ? null : 'Frozen Products')}>
          <img src={frozenProductsIcon} alt="Frozen Products" className="category-image" />
          <p className="category-title1">Frozen Products</p>
        </div>
        <div onClick={() => setExpandedCategory(expandedCategory === 'Byproducts' ? null : 'Byproducts')}>
          <img src={byproductsIcon} alt="Byproducts" className="category-image" />
          <p className="category-title1">Byproducts</p>
        </div>
      </div>

      {/* Display Items based on the selected category */}
      {expandedCategory && (
        <div className="potato-images-container">
          {getDisplayItems().map((item) => (
            <div className="potato-item" key={item.name}>
              <div className="potato-info-row">
                <img src={item.image} alt={item.name} className="potato-image" />
                <div className="potato-details">
                  <h3 className="potato-name">{item.name}</h3>
                  <p className="potato-description">{item.description}</p>
                </div>
                <div className="potato-buttons">
                <Link to="/Buy" state={{ potatoName: item.name }}>
  <button className="buy-button">Buy</button>
</Link>
  <Link to="/Sell" state={{ potatoName: item.name }}>
  <button className="sell-button">Sell</button>
</Link>
</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default VendorCustomerPage;
