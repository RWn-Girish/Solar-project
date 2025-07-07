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
    <div className="tech-container-alt">
      <div className="tech-header">
        <h2 className="tech-title">
          <span className="tech-title-highlight">Solar Technologies</span> for Commercial & Industrial Use
        </h2>
        <p className="tech-subtitle">Explore different solar inverter technologies to find the best solution for your needs</p>
      </div>

      <div className="tab-selector-container">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-option ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </div>
        ))}
      </div>

      <div className={`tech-content ${direction}`}>
        <div className="tech-description">
          <h3 className="tech-content-title">{tabs.find(t => t.id === activeTab).label} Technology</h3>
          <p>{descriptions[activeTab]}</p>

          <div className="tech-benefits">
            <h4>Key Benefits:</h4>
            <ul>
              {benefits[activeTab].map((benefit, index) => (
                <li key={index}>
                  <span className="benefit-icon">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="tech-image-container">
          <img
            src={images[activeTab]}
            alt={`${tabs.find(t => t.id === activeTab).label} diagram`}
            className="tech-image"
          />
          <div className="image-caption">
            {tabs.find(t => t.id === activeTab).label} System Diagram
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyTabs;