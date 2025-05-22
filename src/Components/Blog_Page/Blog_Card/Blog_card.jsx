import { useState } from "react";
import SingleBlogCard from "./Single_blog";
import Card_1 from "./../../../assets/images/card.1.jpg";
import Card_2 from "./../../../assets/images/card.2.webp";
import Card_3 from "./../../../assets/images/card.3.jpg";
import Card_4 from "./../../../assets/images/card.4.jpg";
import Card_5 from "./../../../assets/images/card.5.webp";
import Card_6 from "./../../../assets/images/card.6.png";
import Card_7 from "./../../../assets/images/card.7.jpg";
import Card_8 from "./../../../assets/images/card.8.webp";
import Card_9 from "./../../../assets/images/card.9.jpeg";
import Card_10 from "./../../../assets/images/card.10.jpg";
import Card_11 from "./../../../assets/images/card.11.jpg";
import Card_12 from "./../../../assets/images/card.12.jpg";

const themeStyles = {
  '--bg-color': '#f8f7f0',
  '--primary-color': '#1d8f2c',
  '--secondary-color': '#24231d',
  '--paragraph-color': '#878680',
};

const allBlogs = [
  {
    imageUrl: Card_1,
    date: "16 May 2025",
    author: "Dr R Porselvan",
    title: "Understanding Structures Wind Load Effects on Steel Frame",
    excerpt: "Wind load plays a critical role in the structural design of steel frame systems...",
  },
  {
    imageUrl: Card_2,
    date: "08 May 2025",
    author: "Dr Porselvan R",
    title: "How Temperature Affects Solar Panel Voltage",
    excerpt: "Solar panels turn sunlight into energy using photovoltaic (PV) cells...",
  },
  {
    imageUrl: Card_3,
    date: "08 April 2025",
    author: "Babitha Gaikwad G",
    title: "Protect Your Equipment with Servo Stabilizers",
    excerpt: "Voltage fluctuations in power grids are a common issue...",
  },
  {
    imageUrl: Card_4,
    date: "31 March 2025",
    author: "Babitha Gaikwad",
    title: "Latest KERC Tariff Hike for 2025!",
    excerpt: "The KERC has announced its revised tariff rates for 2025-26...",
  },
  {
    imageUrl: Card_5,
    date: "03 March 2025",
    author: "Prathik",
    title: "India’s Solar Sprint: Racing Towards a 500GW Renewable Future!",
    excerpt: "India has crossed the 100 GW milestone in installed solar capacity...",
  },
  {
    imageUrl: Card_6,
    date: "28 November 2024",
    author: "Ashok Mathew Reji",
    title: "Understanding Your Solar Bill",
    excerpt: "Below is a sample solar net-metering bill from BESCOM...",
  },
  {
    imageUrl: Card_7,
    date: "13 August 2024 ",
    author: "Vasudha G",
    title: "Empowering Sustainable Energy Solutions: EcoSoch and Candi Solar’s Strategic Partnership",
    excerpt: "Below is a sample solar net-metering bill from BESCOM...",
  },
  {
    imageUrl: Card_8,
    date: "13 May 2024 ",
    author: "Ashok Mathew Reji",
    title: "Perovskite Solar Cells: Advancing the Frontier of Photovoltaic Technology",
    excerpt: "Perovskite solar cells have emerged as a groundbreaking innovation in photovoltaic technology.... ",
  },
  {
    imageUrl: Card_9,
    date: "21 June 2024 ",
    author: "By Vasudha G",
    title: "EcoSoch and Plugzmart come together for the first EV Charging Station at SMR Vinay Galaxy Apartment",
    excerpt: "EcoSoch and Plugzmart have come together for the very first installation of an EV charger right here at SMR Vinay Galaxy Apartment... ",
  },
  {
    imageUrl: Card_10,
    date: "15 June 2024 ",
    author: "George",
    title: "How solar panel issues are resolved by EcoSoch’s in-house service team – SolarCare",
    excerpt: "To reap the full benefits of the solar investment, regular maintenance and professional support are essential... ",
  },
  {
    imageUrl: Card_11,
    date: "13 May 2024 ",
    author: "Ashok Mathew Reji",
    title: "EcoSoch Reflects on the Success of Its First EV Charging Station at Salarpuria Greenage, Bangalore",
    excerpt: "EcoSoch is thrilled to highlight the success of its inaugural electric vehicle (EV) charging station... ",
  },
  {
    imageUrl: Card_12,
    date: "16 April 2024 ",
    author: "Ashok Mathew Reji",
    title: "Standpod structures Elevating Solar: Performance and Stability Unleashed",
    excerpt: "The evolution of photovoltaic (PV) technology has introduced sophisticated solutions for optimizing land use and enhancing energy yield... ",
  },
  
  {
    imageUrl: Card_7,
    date: "01 April 2024",
    author: "Sandesh",
    title: "Empowering Sustainable Energy Solutions: EcoSoch and Candi Solar’s Strategic Partnership",
    excerpt: "Below is a sample solar net-metering bill from BESCOM...",
  },
  {
    imageUrl: Card_8,
    date: "14 March 2024 ",
    author: "Sandesh",
    title: "Perovskite Solar Cells: Advancing the Frontier of Photovoltaic Technology",
    excerpt: "Perovskite solar cells have emerged as a groundbreaking innovation in photovoltaic technology.... ",
  },
  {
    imageUrl: Card_9,
    date: "08 March 2024 ",
    author: "Sandesh ",
    title: "EcoSoch and Plugzmart come together for the first EV Charging Station at SMR Vinay Galaxy Apartment",
    excerpt: "EcoSoch and Plugzmart have come together for the very first installation of an EV charger right here at SMR Vinay Galaxy Apartment... ",
  },
  {
    imageUrl: Card_10,
    date: "28 February 2024",
    author: "Ashok Mathew Reji",
    title: "How solar panel issues are resolved by EcoSoch’s in-house service team – SolarCare",
    excerpt: "To reap the full benefits of the solar investment, regular maintenance and professional support are essential... ",
  },
  {
    imageUrl: Card_11,
    date: "18 July 2023 ",
    author: "Newil Antony  ",
    title: "EcoSoch Reflects on the Success of Its First EV Charging Station at Salarpuria Greenage, Bangalore",
    excerpt: "EcoSoch is thrilled to highlight the success of its inaugural electric vehicle (EV) charging station... ",
  },
  {
    imageUrl: Card_12,
    date: "16 July 2023",
    author: "Suraj Kumar",
    title: "Standpod structures Elevating Solar: Performance and Stability Unleashed",
    excerpt: "The evolution of photovoltaic (PV) technology has introduced sophisticated solutions for optimizing land use and enhancing energy yield... ",
  },
  
];

const BlogExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(allBlogs.length / cardsPerPage);

  const startIdx = (currentPage - 1) * cardsPerPage;
  const currentCards = allBlogs.slice(startIdx, startIdx + cardsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="container py-5" style={themeStyles}>
      <div className="row">
        {currentCards.map((blog, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <SingleBlogCard
              imageUrl={blog.imageUrl}
              date={blog.date}
              author={blog.author}
              title={blog.title}
              excerpt={blog.excerpt}
              readMoreLink="#"
            />
          </div>
        ))}
      </div>

          <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                Prev
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BlogExample;
