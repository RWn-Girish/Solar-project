import React, { useState } from 'react';
import SingleBlogCard from './Single_blog';
import Card_1 from './../../../assets/images/card.1.jpg';
import Card_2 from './../../../assets/images/card.2.webp';
import Card_3 from './../../../assets/images/card.3.jpg';
import Card_4 from './../../../assets/images/card.4.jpg';
import Card_5 from './../../../assets/images/card.5.webp';
import Card_6 from './../../../assets/images/card.6.png';

const blogData = [
  {
    imageUrl: Card_1,
    date: '16 May 2025',
    author: 'Dr R Porselvan',
    title: 'UnderstandingStructures Wind Load Effects on Steel Frame',
    excerpt: 'Wind load plays a critical role in the structural design of steel frame systems...'
  },
  {
    imageUrl: Card_2,
    date: '08 May 2025',
    author: 'Dr Porselvan R',
    title: 'How Temperature Affects Solar Panel Voltage: A Seasonal Insight',
    excerpt: 'Solar panels turn sunlight into energy using photovoltaic (PV) cells...'
  },
  {
    imageUrl: Card_3,
    date: '08 April 2025',
    author: 'Babitha Gaikwad G',
    title: 'Protect Your Equipment with Servo Stabilizers',
    excerpt: 'Voltage fluctuations in power grids are a common issue...'
  },
  {
    imageUrl: Card_4,
    date: '31 March 2025',
    author: 'Babitha Gaikwad',
    title: 'Latest KERC Tariff Hike for 2025! Here’s What You Need to Know | Karnataka',
    excerpt: 'The KERC has announced its revised tariff rates for the financial year 2025-26...'
  },
  {
    imageUrl: Card_5,
    date: '03 March 2025',
    author: 'Prathik',
    title: 'India’s Solar Sprint: Racing Towards a 500GW Renewable Future!',
    excerpt: 'As of January 2025, India has crossed the 100 GW milestone...'
  },
  {
    imageUrl: Card_6,
    date: '28 November 2024',
    author: 'Ashok Mathew Reji',
    title: 'How It Works and Ways to Save : Understanding Your Solar Bill',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_6,
    date: '28 November 2024',
    author: 'Ashok Mathew Reji',
    title: 'How It Works and Ways to Save : Understanding Your Solar Bill',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_6,
    date: '28 November 2024',
    author: 'Ashok Mathew Reji',
    title: 'How It Works and Ways to Save : Understanding Your Solar Bill',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
];

const BlogExample = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const filteredBlogs = blogData.filter(({ title, excerpt, date, author }) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      title.toLowerCase().includes(lowerSearch) ||
      excerpt.toLowerCase().includes(lowerSearch) ||
      date.toLowerCase().includes(lowerSearch) ||
      author.toLowerCase().includes(lowerSearch)
    );
  });

  const totalPages = Math.ceil(filteredBlogs.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const displayedBlogs = filteredBlogs.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="container py-5">
      <div className="row">
        {displayedBlogs.map((blog, idx) => (
          <div key={idx} className="col-md-6 col-lg-4 mb-4">
            <SingleBlogCard {...blog} readMoreLink="#" />
          </div>
        ))}
      </div>

      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <li
              key={idx}
              className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}
            >
              <button onClick={() => setCurrentPage(idx + 1)} className="page-link">
                {idx + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BlogExample;