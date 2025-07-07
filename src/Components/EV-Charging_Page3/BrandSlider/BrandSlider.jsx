import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './BrandLogosSlider.css';

const BrandLogosSlider = ({ logos = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, arrows: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, arrows: false },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, arrows: false },
      },
    ],
  };

  return (
    <section className="ev-brand-section">
      <h4 className="ev-brand-subtitle">— EV BRANDS —</h4>
      <h2 className="ev-brand-title">Our Charging Partners</h2>
      <div className="ev-brand-slider-wrapper">
        <Slider {...settings} className="ev-brand-slider">
          {logos.map((logo, index) => (
            <div key={index} className="ev-brand-slide">
              <div className="ev-brand-logo-wrapper">
                <img src={logo} alt={`Brand ${index + 1}`} className="ev-brand-logo" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ev-slider-arrow ev-next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ev-slider-arrow ev-prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

export default BrandLogosSlider;
