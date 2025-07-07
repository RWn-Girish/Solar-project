import React from "react";
import SingleCard from "./Single_card";
import "./Commercial_card.css";

import assuredIcon from "../../../assets/images/money.png";
import taxIcon from "../../../assets/images/Tax.png";
import financeIcon from "../../../assets/images/finace.png";
import zeroInvestIcon from "../../../assets/images/Zero.png";

const Commercial_Card = () => {
  const features = [
    {
      icon: assuredIcon,
      title: "Assured Returns",
      description:
        "The payback period is only 3–4 years for your investment and you can enjoy returns of around 25–30% (IRR). The cost of producing 1 unit of solar energy would be only Rs 2/unit for a period of 25 years. This will hedge against future increases in electricity prices by the DISCOM.",
    },
    {
      icon: taxIcon,
      title: "Tax Benefits",
      description:
        "40% Accelerated Depreciation benefit is available for Companies and up to 60% Depreciation benefit is available for Manufacturers. Tax savings will power the growth of your business further.",
    },
    {
      icon: financeIcon,
      title: "Easy Finance",
      description:
        "Avail collateral free finance from our financial partners for your rooftop solar plant. We will take care of all the paperwork and the loan can be sanctioned in 7 days.",
      readMore: { link: "#finance" },
    },
    {
      icon: zeroInvestIcon,
      title: "Zero-Investment",
      description:
        "We have tied up with investors to offer the standard RESCO and Co-RESCO model in Karnataka for Commercial and Industrial units. No investment is required from you to put up the solar plant.",
      readMore: { link: "#zero-investment" },
    },
  ];

  return (
    <section className="features-section">
      <h2 className="section-title-Commercial">
        <span className="orange-bar" /> Features For Commercial And Industrial Sector <span className="orange-bar" />
      </h2>
      <div className="feature-cards-container">
        {features.map((item, index) => (
          <SingleCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Commercial_Card;