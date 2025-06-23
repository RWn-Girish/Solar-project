import React, { useState } from 'react';
import './ContactForm.css';

const initialState = {
  name: '',
  email: '',
  city: '',
  mobile: '',
  zipCode: '',
  message: ''
};

const ContactForm = () => {
    const [formData, setFormData] = useState(initialState);
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = ({ target: { name, value } }) =>
      setFormData(prev => ({ ...prev, [name]: value }));
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData(initialState);
        setIsSubmitted(false);
      }, 3000);
    };  
  
  return (
    <div className="contact-form-container">
      <div className="form-header">
        <h2>Get in Touch</h2>
        <p className="form-subtitle">Have questions about solar solutions? We're here to help!</p>
      </div>

      
        <form onSubmit={handleSubmit} className="contact-form ">

            <div className='d-flex gap-3 full-group'>
            <div className="form-group ">
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                id="name"
                placeholder='Enter Your Name'
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group ">
              <label htmlFor="email">Email Address*</label>
              <input
              placeholder='Enter Your Email'
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            </div>

            <div className='d-flex gap-3 full-group'>

            <div className="form-group ">
              <label htmlFor="city">City</label>
              <input
                type="text"
                placeholder='Enter Your City'
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group ">
              <label htmlFor="mobile">Mobile Number*</label>
              <input
                type="tel"
                id="mobile"
                placeholder='Enter Your placeholder'
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            </div>

            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                placeholder='Enter Your zipCode'
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="form-input"
              />
            </div>

          <div className="form-group message-group">
            <label htmlFor="message">Your Message*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Drop Your Message'
              required
              className="form-textarea"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      
    </div>
  );
};

export default ContactForm;