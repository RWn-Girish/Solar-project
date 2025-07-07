import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlogPage from './Pages/BlogPage';
import { Route, Routes } from 'react-router';
import FAQPage from './Pages/FAQPage';
import Header from './Components/Common_Comp/Navbar/Header';
import Footer from './Components/Common_Comp/Footer/Footer';
import SolarRange from './Components/SolarRange_Page/SolarRange';
import Home from './Pages/Home';
import Project from './Pages/Projects';
import Solar from './Pages/Solor';
import EV_Charging from './Pages/EV-Charging';
import NotFoundPage from './Components/404_page/NotFoundPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/SolarRange" element={<SolarRange />} />
        <Route path="/ev-charging" element={<EV_Charging />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Solar" element={<Solar />} />
        <Route path="/*" element={<NotFoundPage />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
