import React, { useState } from 'react';
import './ProjectSection.css';
import Card_1 from './../../../assets/images/card.1.jpg';
import Card_2 from './../../../assets/images/card.2.webp';
import Card_3 from './../../../assets/images/card.3.jpg';
import Card_4 from './../../../assets/images/card.4.jpg';
import Card_5 from './../../../assets/images/card.5.webp';
import Card_6 from './../../../assets/images/card.6.png';
import Card_7 from './../../../assets/images/card.7.jpg';
import Card_8 from './../../../assets/images/card.8.webp';
import Card_9 from './../../../assets/images/card.9.jpeg';
import Card_10 from './../../../assets/images/card.10.jpg';
import Card_11 from './../../../assets/images/card.11.jpg';
import Card_12 from './../../../assets/images/card.12.jpg';


const categories = ["ALL", "APARTMENTS", "COMMERCIAL", "INDUSTRIAL", "RESIDENTIAL", "EV"];

const projects = [
    { id: 1, image: Card_1, category: "COMMERCIAL" },
    { id: 2, image: Card_2, category: "RESIDENTIAL" },
    { id: 3, image: Card_3, category: "INDUSTRIAL" },
    { id: 4, image: Card_4, category: "APARTMENTS" },
    { id: 5, image: Card_5, category: "EV" },
    { id: 6, image: Card_6, category: "RESIDENTIAL" },
    { id: 7, image: Card_7, category: "COMMERCIAL" },
    { id: 8, image: Card_8, category: "INDUSTRIAL" },
    { id: 9, image: Card_9, category: "EV" },
    { id: 10, image: Card_10, category: "RESIDENTIAL" },
    { id: 11, image: Card_11, category: "COMMERCIAL" },
    { id: 12, image: Card_12, category: "APARTMENTS" },
    
  ];
  

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = activeCategory === "ALL"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="project-gallery-section">
      <h4 className="gallery-subtitle text-primary">— EXPLORE RECENT WORKS —</h4>
      <p className="gallery-description">EcoSoch Solar offers unparalleled service, quality, and efficiency.</p>

      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="gallery-item">
            <img src={project.image} alt={`Project ${project.id}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
