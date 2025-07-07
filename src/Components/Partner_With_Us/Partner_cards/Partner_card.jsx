import React from 'react';
import './Partner_Card.css';

import icon1 from '../../../assets/images/icons1.png';
import icon2 from '../../../assets/images/icons2.avif';
import icon3 from '../../../assets/images/icons3.png';
import icon4 from '../../../assets/images/icons4.png';
import icon5 from '../../../assets/images/icons5.png';
import icon6 from '../../../assets/images/icons6.avif';

const benefits = [
    {
    icon: icon1,
    title: 'Entrepreneurship Development Program',
    description: 'We can also help our Associate Partners to eventually become Entrepreneurs in the Solar industry and extend full support in terms of training, material supply, Engg. & Design services, etc. when they decide to take the plunge. In short, we will handhold you all the way until you become a full fledged entrepreneur.',
  },
  {
    icon: icon2,
    title: 'Sustainable Impact',
    description: 'By promoting solar energy and helping us execute solar rooftop projects, you contribute to a sustainable future. Together, we can reduce carbon emissions, combat climate change, and create a greener world for generations to come.',
  },
  {
    icon: icon3,
    title: 'Comprehensive Support',
    description: 'We value the success of our associate partners and provide comprehensive support to help you achieve your goals. From training and sales materials to marketing collateral and technical assistance.',
  },
  {
    icon: icon4,
    title: 'Extensive Project Portfolio',
    description: 'We take pride in an impressive portfolio of successful solar rooftop projects. Our track record speaks for itself, showcasing our ability to deliver innovative, efficient, and cost-effective solar solutions.',
  },
  {
    icon: icon5,
    title: 'Lucrative Compensation Structure',
    description: 'As an EcoSoch Associate Partner, you will have the opportunity to earn attractive commissions on each successful solar rooftop project you bring to us. Our commission structure rewards dedication.',
  },
  {
    icon: icon6,
    title: 'Reputed Leader',
    description: 'EcoSoch Solar is a renowned name in the solar energy sector, known for its expertise, high-quality solutions, and exceptional customer service. You gain access to a strong brand that inspires trust.',
  },
];

const Partner_Card = () => {
  return (
    <section className="partner-section">
      <div className="section-header">
        <h2 className="section-title">Partner <span className="highlight">Benefits</span></h2>
        <p className="section-subtitle">Why join EcoSoch Solar as an Associate Partner</p>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div 
            className="benefit-card" 
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-inner">
              <div className="card-front">
                <div className="icon-container">
                  <img src={benefit.icon} alt={benefit.title} className="benefit-icon" />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
              </div>
              <div className="card-back">
                <p className="benefit-description">{benefit.description}</p>
                <div className="card-accent"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner_Card;