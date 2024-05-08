import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tools from './components/Tools';
import Career from './components/Career';
import Services from './components/Services';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Career" element={<Career/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Tools" element={<Tools/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Policy" element={<Policy/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
     
    </>
    );
}

export default App;
