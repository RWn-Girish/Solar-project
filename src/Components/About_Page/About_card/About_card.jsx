import React from 'react';
import './About_card.css';
import vision  from "../../../assets/images/vision.png";
import mission  from "../../../assets/images/mision.png";

const About_card = () => {
  return (
    <section className="vm-section">
      <div className="vm-container">
        <div className="vm-card vm-vision">
          <div className="vm-content">
            <div className='d-flex justify-content-between align-items-center'>

            <h3 className="vm-title">Our Vision</h3>
            <img src={vision} alt="Vision"   style={{width: "90px"}}/>
            </div>
            <div className="vm-divider"></div>
            <p className="vm-text">
              To provide Sustainable Energy solutions for Residential and Industrial sectors.
            </p>
          </div>
          <div className="vm-accent"></div>
        </div>

        <div className="vm-card vm-mission">
          <div className="vm-content">
            <div className='d-flex justify-content-between align-items-center'>
            <h3 className="vm-title">Our Mission</h3>
            <img src={mission} alt="Mission"  style={{width: "90px"}}/>
            </div>
            <div className="vm-divider"></div>
            <p className="vm-text">
              To design and integrate decentralized solar photo voltaic "PV" rooftop systems
              on energy efficient buildings and to facilitate proliferation of EV charging
              infrastructure.
            </p>
          </div>
          <div className="vm-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default About_card;