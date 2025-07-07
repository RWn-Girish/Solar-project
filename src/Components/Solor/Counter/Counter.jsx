import React, { useEffect, useState } from 'react';
import './Counter.css';
import  money  from "../../../assets/images/money.png";

import home  from "../../../assets/images/home.png";
import energy  from "../../../assets/images/energy.png";


const Counter = () => {

  let moneyImg = <img src={money} alt="" style={{width : "60px"}} />
  let homeImg = <img src={home} alt="" style={{width : "60px"}} />
  let energyImg = <img src={energy} alt="" style={{width : "100px"}} />
  const data = [
    { label: 'Installed capacity', end: 20, suffix: 'MW+',  icon : energyImg  },
    { label: 'Installed Projects', end: 1300, suffix: '+', icon: homeImg },
    { label: 'Savings per Month', end: 100000, prefix: '₹', suffix: '+', icon: moneyImg},
  ];

  const [counts, setCounts] = useState(data.map(() => 0));
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.counter-wrapper');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100 && !animated) {
          setAnimated(true);
          startCounters();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  const startCounters = () => {
    const intervals = data.map((item, i) => {
      const step = Math.ceil(item.end / 100);
      return setInterval(() => {
        setCounts(prev => {
          const updated = [...prev];
          if (updated[i] < item.end) {
            updated[i] = Math.min(updated[i] + step, item.end);
          }
          return updated;
        });
      }, 20);
    });

    setTimeout(() => {
      intervals.forEach(clearInterval);
    }, 2000);
  };

  return (
    <div className="counter-wrapper">
      <div className="counter-container">
        {data.map((item, index) => (
          <div 
            className={`counter-box ${animated ? 'animated' : ''}`} 
            key={index}
            style={{ '--delay': index * 0.2 + 's' }}
          >
            <div className="counter-icon">{item.icon}</div>
            <h2 className="counter-number">
              {item.prefix || ''}
              <span className="count">{counts[index].toLocaleString()}</span>
              {item.suffix || ''}
            </h2>
            <p className="counter-label">{item.label}</p>
            <div className="counter-wave"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;