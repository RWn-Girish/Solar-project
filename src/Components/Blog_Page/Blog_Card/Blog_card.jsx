import { useState } from 'react';
import SingleBlogCard from './Single_blog';
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
import Card_13 from './../../../assets/images/card.13.jpeg';
import Card_14 from './../../../assets/images/card.14.jpeg';
import Card_15 from './../../../assets/images/card.15.jpeg';
import Card_16 from './../../../assets/images/card.16.avif';
import Card_17 from './../../../assets/images/card.17.webp';
import Card_18 from './../../../assets/images/card.18.webp';
import Card_19 from './../../../assets/images/card.19.jpg';
import Card_20 from './../../../assets/images/card.20.avif';
import Card_21 from './../../../assets/images/card.21.webp';
import Card_22 from './../../../assets/images/card.22.webp';
import Card_23 from './../../../assets/images/card.23.jpg';
import Card_24 from './../../../assets/images/card.24.jpg';
import Card_25 from './../../../assets/images/card.25.jpg';
import Card_26 from './../../../assets/images/card.26.png';
import Card_27 from './../../../assets/images/card.27.avif';
import Card_28 from './../../../assets/images/card.28.avif';
import Card_29 from './../../../assets/images/card.29.jpg';
import Card_30 from './../../../assets/images/card.30.avif';
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
    imageUrl: Card_7,
    date: '28 November 2024',
    author: 'Babitha Gaikwad',
    title: 'Latest KERC Tariff Hike for 2025! Here’s What You Need to Know | Karnataka',
    excerpt: 'The KERC has announced its revised tariff rates for the financial year 2025-26, and consumers across all categories need to brace for some changes. Whether you'
  },
  {
    imageUrl: Card_8,
    date: '28 November 2024',
    author: 'Ashok Mathew Reji',
    title: 'India’s Solar Sprint: Racing Towards a 500GW Renewable Future!',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_9,
    date: '28 November 2024',
    author: 'Ashok Mathew Reji',
    title: 'How It Works and Ways to Save : Understanding Your Solar Bill',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_10,
    date: '3 August 2024 ',
    author: 'Vasudha G',
    title: 'Empowering Sustainable Energy Solutions: EcoSoch and Candi Solar’s Strategic Partnership',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_11,
    date: '26 June 2024',
    author: 'Vasudha G',
    title: 'EcoSoch and Plugzmart come together for the first EV Charging Station at SMR Vinay Galaxy Apartment',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_12,
    date: '21 June 2024',
    author: 'By Vasudha G',
    title: 'How solar panel issues are resolved by EcoSoch’s in-house service team – SolarCare',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_13,
    date: '15 June 2024',
    author: 'George',
    title: 'EcoSoch Reflects on the Success of Its First EV Charging Station at Salarpuria Greenage, Bangalore',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_14,
    date: '13 May 2024',
    author: 'Ashok Mathew Reji',
    title: 'Perovskite Solar Cells: Advancing the Frontier of Photovoltaic Technology',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_15,
    date: '16 April 2024',
    author: 'Ashok Mathew Reji',
    title: 'Standpod structures Elevating Solar: Performance and Stability Unleashed',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_16,
    date: '01 April 2024',
    author: 'Sandesh',
    title: 'Sweeping Success: The Power of Maintenance and Cleaning in Solar Panel Generation/Performance',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_17,
    date: '14 March 2024',
    author: 'Sandesh',
    title: 'Apartment Rooftop Solar: Solutions & Subsidy Opportunities in Bangalore',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_18,
    date: '08 March 2024',
    author: 'Sandesh',
    title: 'Solar rooftop subsidy scheme from Central Govt for residential consumers',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_19,
    date: '28 February 2024',
    author: 'Ashok Mathew Reji',
    title: 'Reengineering Energy: Ecosochs Role in Shaping a Decarbonized Solar Future',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_20,
    date: '18 July 2023',
    author: 'Newil Antony',
    title: 'Voltage Fluctuations Begone! Experience Stable Power with Servo Stabilizer for Your Residence.',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_21,
    date: '16 July 2023',
    author: 'Suraj Kumar',
    title: 'BESCOM SRTPV Policy for FY-23/24',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_22,
    date: '03 June 2023',
    author: 'By Venkat',
    title: 'SPD – Working, Construction and Which voltage to select (280V or 320V)?',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_23,
    date: '24 January 2023 ',
    author: 'Venkat',
    title: 'Need for AC earth pits in solar installations?',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_24,
    date: '20 April 2022',
    author: 'Venkat',
    title: 'Criteria for sizing battery banks',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_25,
    date: '11 December 2021',
    author: 'Venkat',
    title: 'Acceptable variation in Tilt angle of solar panels at a site',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_26,
    date: '11 October 2021',
    author: 'Venkat',
    title: 'Can DC, AC and LA earth pits be connected together?',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_27,
    date: '21 September 2021',
    author: 'Venkat',
    title: 'Earthing practices at EcoSoch',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_28,
    date: '17 July 2021',
    author: 'Pramod Satish Rapeti',
    title: 'KERC Revises Electricity bills For FY 2021-22',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_29,
    date: '17 November 2020',
    author: 'Venkat',
    title: 'UPVC Conduits Vs Pre-GI Cable Trays for Outdoor Use',
    excerpt: 'Below is a sample solar net-metering bill from BESCOM...'
  },
  {
    imageUrl: Card_30,
    date: '20 October 2020',
    author: 'Samant Jain',
    title: 'Safety Aspects',
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
            <SingleBlogCard {...blog} readMoreLink={`/blog-detail/${idx}`} />
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