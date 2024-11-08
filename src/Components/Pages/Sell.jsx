import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import './Sell.css';

const Sell = () => {
  const location = useLocation();
  const { potatoName } = location.state || {}; // Access potato name passed via state

  // States for form input values
  const [personName, setPersonName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to send via EmailJS
    const formData = {
      personName,
      email,
      phone,
      address,
      quantity,
      message,
      potatoName,
    };

    // Send email using EmailJS
    emailjs
      .send('service_q0gs61m', 'template_2gxuf3j', formData, 'L8En_cO-RON3rVcq7')
      .then(
        () => {
          setResult('Your order has been submitted successfully!');
          // Reset form
          setPersonName('');
          setEmail('');
          setPhone('');
          setAddress('');
          setQuantity('');
          setMessage('');
        },
        (error) => {
          setResult('Failed to submit your order. Please try again.');
          console.error(error);
        }
      );
  };

  return (
    <div className="buy-container">
      {potatoName ? (
        <>
          <h2 className="buy-title">Selling: {potatoName}</h2>
          <p className="buy-description">Fill in the form to list your items for sale.</p>
          <form className="buy-form" onSubmit={handleSubmit}>
            {/* Potato Name (non-editable field) */}
            <div className="form-group">
              <label htmlFor="potatoName">Potato Item</label>
              <input
                type="text"
                id="potatoName"
                value={potatoName}
                readOnly
                className="readonly-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="personName">Your Name</label>
              <input
                type="text"
                id="personName"
                placeholder="Enter your name"
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                placeholder="Enter quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Message</label>
              <textarea
                id="message"
                placeholder="Any special instructions or requests"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="buy-button">Submit Order</button>
            {result && <p className="form-result">{result}</p>}
          </form>
        </>
      ) : (
        <p className="error-message">Potato type not selected!</p>
      )}
    </div>
  );
};

export default Sell;
