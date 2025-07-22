import { Container, Row, Col, Button } from "react-bootstrap";
import Card_1 from './../../assets/images/card.1.jpg';
import "./BlogDetailPage.css";
import { useNavigate } from "react-router";

const BlogDetailPage = () => {
    const navigate = useNavigate();
  return (
    <section className="single-blog-page py-5">
        <Container>
        <Button variant="outline-success" onClick={() => navigate("/blogs")} className="mb-4">
        ← Back
        </Button>
      
        <Row>
          {/* Main Blog Content */}
          <Col lg={8}>
            <div className="blog-detail">
              <img
                src={Card_1}
                alt="Blog Cover"
                className="blog-image"
              />
              <h2 className="blog-title mt-4">The Future of Clean Energy in India</h2>
              <p className="blog-meta">By <strong>Admin</strong> | July 21, 2025</p>

              <div className="blog-content">
                <p>
                  Clean energy is no longer just a trend – it’s the necessity of the hour.
                  India is witnessing a rapid shift in renewable energy adoption driven by
                  environmental concerns and technological advancement.
                </p>

                <h4>Why Clean Energy?</h4>
                <p>
                  As the demand for power rises, traditional fossil fuels are unable to sustain the load
                  without environmental consequences. Clean sources like solar, wind, and hydro can meet the
                  demand sustainably.
                </p>

                <img
                  src="https://source.unsplash.com/800x400/?solar,renewable"
                  alt="Renewable energy"
                  className="blog-subimage"
                />

                <h4>Government Initiatives</h4>
                <p>
                  The Indian government has launched several schemes like PM-KUSUM, Solar Rooftop initiatives,
                  and green bonds to promote cleaner technologies and infrastructure.
                </p>

                <h4>Conclusion</h4>
                <p>
                  Embracing green energy today secures a cleaner and more sustainable future for generations to come.
                </p>
              </div>
            </div>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            <div className="blog-sidebar">
              <h4>Recent Posts</h4>
              <ul className="recent-posts">
                <li><a href="#">Top 5 Solar Panel Brands in India</a></li>
                <li><a href="#">Benefits of Switching to LED Lighting</a></li>
                <li><a href="#">How to Reduce Your Electricity Bill</a></li>
                <li><a href="#">Government Incentives for Solar</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetailPage;