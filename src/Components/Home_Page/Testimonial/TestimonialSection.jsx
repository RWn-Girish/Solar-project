import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './TestimonialSection.css';
import { Container, Row, Col } from 'react-bootstrap';
import user_1 from  "../../../assets/images/team-1.jpg"
import user_2 from  "../../../assets/images/team-2.jpg"
import user_3 from  "../../../assets/images/team-3.jpg"
import user_4 from  "../../../assets/images/team-4.jpg"
import user_5 from  "../../../assets/images/team-5.jpg"
import user_6 from  "../../../assets/images/team-6.jpg"
import comma from  "../../../assets/images/comma.png"
{/* <img src={item.image} alt={item.name} /> */}


const testimonials = [
        {
          id: 1,
          name: "Virat Kohli",
          review: "This platform exceeded my expectations! Truly amazing work and great support.",
          image: user_1,
          role: "Marketing Director"
        },
        {
          id: 2,
          name: "Mitali Raj",
          review: "I loved the smooth experience and professional design. Highly recommended!",
          image: user_2,
          role: "Product Manager"
        },
        {
          id: 3,
          name: "Rohit Sharma",
          review: "Incredible service, fast results and great design sense. Kudos to the team!",
          image: user_3,
          role: "CTO"
        },
        {
          id: 4,
          name: "Harmanpreet Kaur",
          review: "Reliable, fast and beautiful results. Will work with them again.",
          image: user_4,
          role: "Product Manager"
        },
        {
          id: 5,
          name: "Shreysh Iyer",
          review: "Exceptional professionalism and clean user interfaces.",
          image: user_5,
          role: "UI/UX Lead"
        },
        {
          id: 6,
          name: "Renuka Sing Thakur ",
          review: "Very creative team, delivered exactly what we needed!",
          image: user_6,
          role: "CTO"
        }
      
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-overlay"></div>
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={8} className="text-center d-flex  flex-column  align-items-center">
            <h6 className="section-subtitle-testimonial text-primary mb-2"> — Testimonial —</h6>
            <h2 className="section-title-testimonial text-dark mb-3">What Our Clients Say</h2>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                768: {
                  slidesPerView: 2
                },
                992: {
                  slidesPerView: 3
                }
              }}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="quote-icon">
                        <img src={comma} alt=""  style={{width : "35px" , opacity : ".3"}}/>
                      </div>
                      <p className="review-text">{item.review}</p>
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="author-details">
                          <h5 className="author-name">{item.name}</h5>
                          <span className="author-role">{item.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialSection;