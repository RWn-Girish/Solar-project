import React, { useState } from 'react';
import Sun  from "../../../assets/images/sun.png";
import battry  from "../../../assets/images/battry.png";
import rular  from "../../../assets/images/rular.png";
import home  from "../../../assets/images/home.png";
import  money  from "../../../assets/images/money.png";

import './SolarCalculator.css';

const SolarCalculator = () => {
  const [bill, setBill] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const systemSize = Math.ceil(bill / 750);
  const minCost = (systemSize * 0.9).toFixed(2);
  const maxCost = (systemSize * 1.07).toFixed(2);
  const area = systemSize * 80;

  const handleSliderChange = (e) => {
    setBill(Number(e.target.value));
    setShowResults(true);
  };

  return (
    <div className="solar-calculator-container">
      <div className="calculator-header">
        <div className="sun-icon">
        <img src={Sun}  style={{width : "75px"}}/></div>
        <h2>Solar Rooftop Savings Calculator</h2>
        <p className="calculator-subtitle">Discover how much you can save with solar energy</p>
      </div>

      <div className="calculator-controls">
        <label htmlFor="rangeInput">
          Monthly Electricity Bill: <strong>₹{bill}</strong>
        </label>
        <div className="slider-container">
          <input
            type="range"
            id="rangeInput"
            min="500"
            max="10000"
            step="100"
            value={bill}
            onChange={handleSliderChange}
            className="themed-slider"
          />
          <div className="slider-labels">
            <span>₹500</span>
            <span>₹10,000</span>
          </div>
        </div>
      </div>

      {showResults && (
        <div className="results-box">
          <div className="results-header">
            <h3>Your Custom Solar Solution</h3>
            <div className="solar-panel-icon">  <img src={battry} style={{ width :"60px"}} alt="" /></div>
          </div>
          <div className="results-grid">
            <div className="result-item">
              <div className="result-label">System Size</div>
              <div className="result-icon"> <img src={rular} style={{ width :"40px"}} alt="" /></div>
              <div className="result-value">{systemSize} KW</div>
            </div>
            <div className="result-item">
              <div className="result-label">Estimated Cost</div>
              <div className="result-icon"> <img src={money} style={{ width :"40px"}} alt="" /></div>
              <div className="result-value">₹{minCost} - ₹{maxCost} Lakhs</div>
            </div>
            <div className="result-item">
              <div className="result-label">Rooftop Area</div>
              <div className="result-icon"> <img src={home} style={{ width :"40px"}} alt="" /></div>
              <div className="result-value">{area} Sq. Ft.</div>
            </div>
          </div>
          <button className="cta-button">
            Get Personalized Quote
            <span className="arrow-icon">→</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SolarCalculator;