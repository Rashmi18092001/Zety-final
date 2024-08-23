import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// footer and navbar
import Footer from './components/footer(R)';
import Navbar from './components/navbar';

// cv pages
import CvExample from './pages/cv/cv-example';
import CvFormat from './pages/cv/cv-format';
import CvTemplates from './pages/cv/cv-template';
import WriteCV from './pages/cv/how-to-write-cv';
import CVBuilder from './pages/cv/CVBuilder';

// support
import AboutUs from './pages/support/AboutUs';
import Contact from './pages/support/contact';
import EditorialGuidelines from './pages/support/EditorialGuidelines';

// login
import Login from './pages/login/login';
import Signup from './pages/login/signup';


function App() {
    return (
    <>
    <Router>
      {/* <Navbar/> */}
    <Routes>
      <Route path="/footer" element={<Footer />} />

      {/* cv routes */}
      <Route path="/cv-builder" element={< CVBuilder/>} />
      <Route path="/cv-templates" element={< CvTemplates/>} />
      <Route path="/cv-examples" element={< CvExample/>} />
      <Route path="/cv-format" element={< CvFormat/>} />
      <Route path="/how-to-write-a-cv" element={< WriteCV/>} />

      {/* support routes */}
      <Route path="/about" element={< AboutUs/>} />
      <Route path="/contact" element={< Contact/>} />
      <Route path="/editorial-guidelines" element={< EditorialGuidelines/>} />

      {/* login */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
    {/* <Footer/> */}
  </Router>
    </>
  )
}

export default App;
