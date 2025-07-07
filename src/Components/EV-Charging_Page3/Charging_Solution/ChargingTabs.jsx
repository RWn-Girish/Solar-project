import React, { useState } from 'react';
import './ChargingTabs.css';

const tabData = {
  Apartment: {
    highlight: "Turn your apartment into an EV–friendly hub! Book a free consultation with Ecosoch today!",
    points: [
      ["Seamless Installation", "We handle everything from assessment to setup."],
      ["Shared & Individual Charging", "Install chargers in common areas or dedicated parking spots."],
      ["Smart Charging System", "Residents can track usage and make payments via a mobile app."],
      ["Cost-Effective & Scalable", "Expand charging to individual parking spots as demand increases."],
      ["Enhance Property Value", "Make your apartment EV-friendly and future-ready."]
    ]
  },
  Business: {
    highlight: "Power up your commercial space with efficient EV charging solutions!",
    points: [
      ["Custom Plans", "Tailored solutions for business parking and fleet needs."],
      ["High Power Stations", "Support for fast charging commercial EVs."],
      ["Billing Integration", "Generate invoices and reports easily for multiple vehicles."],
      ["Remote Monitoring", "Manage stations remotely and track usage."]
    ]
  },
  "House Owners": {
    highlight: "Install personal EV chargers at home with ease!",
    points: [
      ["Fast Installation", "Get your EV charger installed quickly and safely."],
      ["Smart App Control", "Manage charging times and monitor usage."],
      ["Affordable Pricing", "Low-cost home charging options."]
    ]
  },
  "Solar Integrated Charger": {
    highlight: "Go green with solar-integrated EV charging systems!",
    points: [
      ["Sustainable Energy", "Charge using solar panels for zero-emission power."],
      ["Battery Backup", "Store solar energy and charge even during outages."],
      ["Smart Optimization", "Automatically switch between grid and solar power."]
    ]
  },
  Fleets: {
    highlight: "Upgrade your EV fleet with scalable and smart charging infrastructure.",
    points: [
      ["Bulk Charging", "Multiple EVs charged simultaneously."],
      ["Fleet Management", "Track usage and control cost with advanced tools."],
      ["Priority Charging", "Assign slots based on urgency."]
    ]
  },
  "EV Care": {
    highlight: "Keep your chargers healthy with regular EV maintenance services.",
    points: [
      ["Scheduled Checkups", "Timely hardware & software diagnostics."],
      ["Emergency Support", "24/7 helpline for unexpected issues."],
      ["Upgrade Assistance", "Get help upgrading to latest tech."]
    ]
  }
};

const ChargingTabs = () => {
  const [activeTab, setActiveTab] = useState('Apartment');

  return (
    <section className="ev-charging-tabs-section">
      <div className="ev-charging-container">
        <div className="ev-charging-header text-center mb-5">
          <h2 className="ev-charging-title">Charging Solutions</h2>
          <p className="ev-charging-subtitle">Tailored solutions for every EV charging need</p>
        </div>

        <div className="ev-tabs-wrapper">
          <div className="ev-tabs-buttons">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                className={`ev-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="ev-tab-content">
            <div className="ev-highlight-box">
              <p className="ev-highlight-text">{tabData[activeTab].highlight}</p>
            </div>
            <div className="ev-tab-points">
              <h3 className="ev-tab-title">Why Choose Ecosoch for {activeTab} EV Charging?</h3>
              <ul className="ev-tab-points-list">
                {tabData[activeTab].points.map(([title, desc], index) => (
                  <li key={index} className="ev-tab-point-item">
                    <div className="ev-point-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="ev-point-content">
                      <strong>{title}</strong>
                      <p>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChargingTabs;
