import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPage from './Pages/BlogPage';
import { Route, Routes } from 'react-router';
import FAQPage from './Pages/FAQPage';
import Header from './Components/Common_Comp/Navbar/Header';
import Footer from './Components/Common_Comp/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faqs" element={<FAQPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
