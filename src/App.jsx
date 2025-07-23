import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from 'react-router';
import Header from './Components/Common_Comp/Navbar/Header';
import Footer from './Components/Common_Comp/Footer/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Project from './Pages/Projects';
import BlogPage from './Pages/BlogPage';
import FAQPage from './Pages/FAQPage';
import SolarRange from './Components/SolarRange_Page/SolarRange';
import Solar from './Pages/Solor';
import EV_Charging from './Pages/EV-Charging';
import NotFoundPage from './Components/404_page/NotFoundPage';
import Partner from './Pages/Partner';
import ScrollToTopButton from './Components/ScrollUptoTop/ScrollToTopButton';
import BlogDetailPage from './Components/Blog_Detail_Page/BlogDetailPage';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={ <AboutUs/> } />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog-detail/:id" element={<BlogDetailPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/solar-calculator" element={<SolarRange />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/Solar" element={<Solar />} />
        <Route path="/out-partner" element={ <Partner/> } />
        <Route path="/*" element={<NotFoundPage />} />
        {/* <Route path="/ev-charging" element={<EV_Charging />} /> */}
        {/* <Route path="/SolarRange" element={ <SolarRange/> } />
        <Route path="/Project" element={ <Project/> } />
        <Route path="/Solar" element={ <Solar/> } /> */}

      </Routes>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
