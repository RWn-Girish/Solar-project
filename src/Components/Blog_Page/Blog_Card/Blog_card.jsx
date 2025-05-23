import SingleBlogCard from './Single_blog';
import Card_1 from './../../../assets/images/card.1.jpg';
import Card_2 from './../../../assets/images/card.2.webp';
import Card_3 from './../../../assets/images/card.3.jpg';
import Card_4 from './../../../assets/images/card.4.jpg';
import Card_5 from './../../../assets/images/card.5.webp';
import Card_6 from './../../../assets/images/card.6.png';

const BlogExample = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <SingleBlogCard
            imageUrl={Card_1}
            date="16 May 2025"
            author="Dr R Porselvan"
            title="UnderstandingStructures Wind Load Effects on Steel Frame "
            excerpt="Wind load plays a critical role in the structural design of steel frame systems, particularly for elevated and open-area installations such as solar panel mounting structures, industrial sheds and rooftop systems."
            readMoreLink="#"
          />
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <SingleBlogCard
            imageUrl={Card_2}
            date="08 May 2025"
            author="Dr Porselvan R"
            title="How Temperature Affects Solar Panel Voltage: A Seasonal Insight"
            excerpt="Solar panels turn sunlight into energy using photovoltaic (PV) cells. While sunlight is vital for energy production temperature has a significant impact in voltage output. "
            readMoreLink="#"
          />
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <SingleBlogCard
            imageUrl={Card_3}
            date="08 April 2025"
            author="Babitha Gaikwad G"
            title="Protect Your Equipment with Servo Stabilizers"
            excerpt="Voltage fluctuations in power grids are a common issue that can lead to equipment damage, reduced efficiency, and operational failures. In single-phase systems, voltage levels can fluctuate between 170V and 270V"
            readMoreLink="#"
          />
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <SingleBlogCard
            imageUrl={Card_4}
            date="31 March 2025"
            author="Babitha Gaikwad"
            title="Latest KERC Tariff Hike for 2025! Here’s What You Need to Know | Karnataka"
            excerpt="The KERC has announced its revised tariff rates for the financial year 2025-26, and consumers across all categories need to brace for some changes"
            readMoreLink="#"
          />
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <SingleBlogCard
            imageUrl={Card_5}
            date="03 March 2025"
            author="Prathik"
            title="India’s Solar Sprint: Racing Towards a 500GW Renewable Future!"
            excerpt="As of January 2025, India has crossed the 100 GW milestone in installed solar capacity—an astounding 3,450% increase from just 2.82 GW in 2014 (pv-magazine.com)."
            readMoreLink="#"
          />
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <SingleBlogCard
            imageUrl={Card_6}
            date="28 November 2024"
            author="Ashok Mathew Reji"
            title="How It Works and Ways to Save : Understanding Your Solar Bill"
            excerpt="Below is a sample solar net-metering bill from BESCOM (Bangalore Electricity Supply Company) which is the distribution company in Bangalore: "
            readMoreLink="#"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogExample;
