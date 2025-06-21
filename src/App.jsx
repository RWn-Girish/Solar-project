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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/SolarRange" element={ <SolarRange/> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
