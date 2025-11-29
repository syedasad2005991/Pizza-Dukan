import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Index from './pages/Index';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Blogpost from './pages/Blogpost';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Index2 from './pages/Index2';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogpost' element={<Blogpost />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/index2' element={<Index2 />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App;
