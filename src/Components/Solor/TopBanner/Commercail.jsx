import React, { useEffect, useRef } from 'react';
import './Commercial.css';
import bannerImage from '../../../assets/images/commercial-img.webp';

const TopBanner = () => {
  const bannerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrollPosition = window.pageYOffset;
        bannerRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="top-banner" 
      ref={bannerRef}
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="overlay" />
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            animationDelay: `${Math.random() * 5}s`
          }} />
        ))}
      </div>
      <div className="banner-content" ref={contentRef}>
        <h1 className="animated-headline">
          <span className="word-slider">
            <span className="word">Save</span>
            <span className="word">Reduce</span>
            <span className="word">Optimize</span>
          </span>
          <br />
          Every Month on Power Bills.
        </h1>
        <div className="cta-container">
          <button className="magnetic-btn">
            <span className="btn-text">Get Solar Quote</span>
            <span className="btn-icon">→</span>
          </button>
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrows">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;