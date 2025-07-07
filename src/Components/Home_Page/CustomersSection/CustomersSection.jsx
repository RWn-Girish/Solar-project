import React from 'react';
import Slider from 'react-slick';
import './CustomerSection.css';

import Customers_2 from "../../../assets/images/customers-2.png";
import Customers_3 from "../../../assets/images/customers-3.jpeg";
import Customers_4 from "../../../assets/images/customers-4.jpeg";
import Customers_5 from "../../../assets/images/customers-5.png";
import Customers_6 from "../../../assets/images/customers-6.jpeg";
import Customers_7 from "../../../assets/images/customers-7.jpg";
import Customers_8 from "../../../assets/images/customers-8.png";
import Customers_9 from "../../../assets/images/customers-9.png";
import Customers_12 from "../../../assets/images/customers-12.png";

const defaultLogos = [
  Customers_2,
  Customers_3,
  Customers_4,
  Customers_5,
  Customers_6,
  Customers_7,
  Customers_8,
  Customers_9,
  Customers_12,
];

const CustomerSection = ({
  logos = defaultLogos,
  title = "Our Valued Customers",
  subtitle = "— CUSTOMERS —"
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="customer-section">
      <h4 className="section-subtitle-customers text-primary">{subtitle}</h4>
      <h2 className="section-title-customers">{title}</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide">
              <img src={logo} alt={`Customer ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerSection;