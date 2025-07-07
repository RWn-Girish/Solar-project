import React from 'react';
// import 'AboutSection.css';
 import  "../../About_Page/About_us/AboutSection.css";
import image1 from '../../../assets/images/card.6.png'; 
import image2 from '../../../assets/images/card.8.webp';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="section-header">
            {/* <span className="section-tag">About Us</span> */}
            <h2 className="about-heading">
              <span className="heading-highlight"> Associate</span> Partner Program
            </h2>
            <div className="divider"></div>
          </div>
          
          <p className="about-description">
          Welcome to EcoSoch Solar, where we are on a mission to help grow the solar industry and create a sustainable future. We believe in the power of collaboration and are looking for dedicated associate partners to join us in our journey. As an Associate Partner, you will play a vital role in bringing solar energy to rooftops across the nation, driving positive change, and earning generous compensation along the way.
          </p>
          
         
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