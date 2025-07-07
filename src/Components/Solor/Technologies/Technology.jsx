import React, { useState } from 'react';
import './TechnologyTabs.css';

import optimizerDiagram from '../../../assets/images/daigram_1.jpg';
import microDiagram from '../../../assets/images/daigram_2.webp';
import stringDiagram from '../../../assets/images/daigram_3.webp';

const tabs = [
  {
    id: 'optimizer',
    label: 'Power Optimizers',
    icon: '⚡'
  },
  {
    id: 'micro',
    label: 'Micro Inverter',
    icon: '🔄'
  },
  {
    id: 'string',
    label: 'String Inverter',
    icon: '🔗'
  },
];

const descriptions = {
  optimizer: `Power optimizers offer module-level optimization while sending DC to a central inverter. They perform well in shaded conditions and allow for flexible system design with monitoring capabilities.`,
  micro: `Micro inverters convert DC to AC at each panel, providing complete independence. Ideal for complex roofs with shading issues, they offer panel-level monitoring and maximize production.`,
  string: `String inverters connect series-wired panels to a central inverter. Most cost-effective for unshaded installations, though performance depends on the weakest panel in the string.`,
};

const images = {
  optimizer: optimizerDiagram,
  micro: microDiagram,
  string: stringDiagram,
};

const benefits = {
  optimizer: ['Module-level optimization', 'Shade tolerance', 'Flexible design', 'Cost-effective'],
  micro: ['Panel independence', 'Maximum shade tolerance', 'Detailed monitoring', 'Easy expansion'],
  string: ['Lowest cost', 'Simple installation', 'Proven technology', 'High efficiency']
};

const TechnologyTabs = () => {
  const [activeTab, setActiveTab] = useState('optimizer');
  const [direction, setDirection] = useState('right');

  const handleTabChange = (tabId) => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    const newIndex = tabs.findIndex(tab => tab.id === tabId);

    setDirection(newIndex > currentIndex ? 'right' : 'left');
    setActiveTab(tabId);
  };

  return (
    <div className="solar-tabs-wrapper">
      <div className="solar-tabs-header">
        <h2 className="solar-tabs-title">
          <span className="solar-tabs-highlight">Solar Technologies</span> for Commercial & Industrial Use
        </h2>
        <p className="solar-tabs-subtitle">Explore different solar inverter technologies to find the best solution for your needs</p>
      </div>

      <div className="solar-tab-list">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`solar-tab-item ${activeTab === tab.id ? 'selected' : ''}`}
            onClick={() => handleTabChange(tab.id)}
          >
            <span className="solar-tab-icon">{tab.icon}</span>
            <span className="solar-tab-label">{tab.label}</span>
          </div>
        ))}
      </div>

      <div className={`solar-tab-content ${direction}`}>
        <div className="solar-description-box">
          <h3 className="solar-tab-heading">{tabs.find(t => t.id === activeTab).label} Technology</h3>
          <p className="solar-tab-text">{descriptions[activeTab]}</p>

          <div className="solar-benefits">
            <h4 className="solar-benefits-heading">Key Benefits:</h4>
            <ul className="solar-benefits-list">
              {benefits[activeTab].map((benefit, index) => (
                <li key={index} className="solar-benefit-item">
                  <span className="solar-benefit-check">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="solar-image-box">
          <img
            src={images[activeTab]}
            alt={`${tabs.find(t => t.id === activeTab).label} diagram`}
            className="solar-tech-image"
          />
          <div className="solar-image-caption">
            {tabs.find(t => t.id === activeTab).label} System Diagram
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyTabs;