import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './CalculatorCards.css';
import PublicChargingImage from "../../../assets/images/PublicCharging.webp";
import HomeChargingImage from "../../../assets/images/HomeChargin.jpg";

const CalculatorCards = () => {
  const cards = [
    {
      title: 'Public Charging Calculator',
      desc: 'Estimate costs for charging at public stations',
      img: PublicChargingImage,
      link: '#',
      bgClass: 'public-card'
    },
    {
      title: 'Home Charging Calculator',
      desc: 'Calculate your home charging expenses',
      img: HomeChargingImage,
      link: '#',
      bgClass: 'home-card'
    },
  ];

  return (
    <section className="charging-calc-section">
      <div className="charging-calc-container">
        {cards.map((card, i) => (
          <div className={`charging-calc-card ${card.bgClass}`} key={i}>
            <div className="card-image-wrapper">
              <img src={card.img} alt={card.title} className="card-image" />
            </div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <a href={card.link} className="calc-button">
                Calculate Now <FiArrowUpRight className="arrow-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalculatorCards;