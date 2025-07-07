import React from 'react';
import './AboutSection.css';

import image2 from '../../../assets/images/card.19.jpg'; 
import image1 from '../../../assets/images/card.1.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="section-header">
            <span className="section-tag">About Us</span>
            <h2 className="about-heading">
              <span className="heading-highlight">EcoSoch</span> Solar Company in Bangalore
            </h2>
            <div className="divider"></div>
          </div>
          
          <p className="about-description">
            Ecosoch is dedicated to transforming India's energy landscape by providing innovative and sustainable energy solutions.
          </p>
          
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">♻️</div>
              <h4 className="feature-title">Sustainable Solutions</h4>
              <p className="feature-text">Eco-friendly solar systems tailored to your needs</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h4 className="feature-title">Industry Experts</h4>
              <p className="feature-text">Certified professionals with decade of experience</p>
            </div>
          </div>
        </div>
        
        <div className="about-image-container">
          <div className="image-stack">
            <div className="image-card main-image">
              <img 
                src={image1} 
                alt="Solar panel installation" 
                className="about-image"
              />
              <div className="image-caption">Professional Installation</div>
            </div>
            <div className="image-card secondary-image">
              <img 
                src={image2} 
                alt="Solar system planning" 
                className="about-image"
              />
              <div className="image-caption">Custom System Design</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;