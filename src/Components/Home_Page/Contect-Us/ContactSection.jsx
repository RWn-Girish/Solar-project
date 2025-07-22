import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ContactSection.css';

const initialState = {
    name: '',
    email: '',
    city: '',
    mobile: '',
    pinCode: '',
    message: ''
  };
  
  const ContactSection = () => {
    const [formData, setFormData] = useState(initialState);
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = ({ target: { name, value } }) => {
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log('Form submitted:', formData);
      setIsSubmitted(true);
  
      setTimeout(() => {
        setFormData(initialState);
        setIsSubmitted(false);
      }, 3000);
    };

  return (
    <section className="contact-section position-relative py-5">
      <div className="contact-overlay position-absolute w-100 h-100"></div>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <p className="contact-highlight mb-2 text-primary">
              <span className="text-primary me-4">FEEL FREE</span> — TO CONTACT US —
            </p>
            <h2 className="contact-title position-relative pb-3 mb-4">
              Let's Get in Touch
            </h2>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={6}>
            <div className="contact-form-box p-4 h-100">
              <div className="form-header">
                <p className="form-subtitle text-muted">
                  Have questions about solar solutions? We're here to help!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <Row className="g-3">
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Your Name* :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address* :</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email"
                        required
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="city" className="form-label">City :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter Your City"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="mobile" className="form-label">Mobile Number* :</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter Your Number"
                        required
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="form-group">
                      <label htmlFor="pinCode" className="form-label">Pin Code :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="pinCode"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        placeholder="Enter Pin Code"
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Your Message* :</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Drop Your Message"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                  </Col>
                  <Col md={12}>
                    <button type="submit" className="contact-btn w-100">
                      {isSubmitted ? 'Message Sent!' : 'Send Message'}
                    </button>
                    {isSubmitted && (
                      <div className="alert alert-success mt-3 mb-0">
                        Thank you for your message! We'll get back to you soon.
                      </div>
                    )}
                  </Col>
                </Row>
              </form>
            </div>
          </Col>

          <Col lg={6}>
            <div className="contact-map-box h-100">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.423532658532!2d77.59075691469436!3d12.955632090866809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15cdcf6a8673%3A0xf726db80fa579dc!2sEcoSoch!5e0!3m2!1sen!2sin!4v1622800283204!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-100 w-100"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;