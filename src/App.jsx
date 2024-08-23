import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import ResumeTemplates from './Pages/resume/Resumetemplates';
import ResumeBuilder from './Pages/resume/ResumeBuilder';
import ResumeExamples from './Pages/resume/ResumeExamples';
import Writtingresume from './Pages/resume/write-resume';
import Resumecheck from './Pages/resume/ResumeCheck';
import Resumeformat from './Pages/resume/Resume-format';
import ResumeHelp from './Pages/resume/ResumeHelp';
import NavBar from './component/navBar1'

// footer and navbar
import Footer from './component/footer(R)';

// cv pages
import CvExample from './Pages/cv/cv-example';
import CvFormat from './Pages/cv/cv-format';
import CvTemplates from './Pages/cv/cv-template';
import WriteCV from './Pages/cv/how-to-write-cv';
import CVBuilder from './Pages/cv/CVBuilder';

// support
import AboutUs from './Pages/support/AboutUs';
import Contact from './Pages/support/contact';
import EditorialGuidelines from './pages/support/EditorialGuidelines';

// login
import Login from './Pages/login/login';
import Signup from './Pages/login/signup';
function App() {
  const [count, setCount] = useState(0);

  return (<>
  
    <Router>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/resume-example" element={<ResumeExamples />} />
        <Route path="/resume-templates" element={<ResumeTemplates />} />
        <Route path="/resume-checker" element={<Resumecheck />} />
        <Route path="/resume-format" element={<Resumeformat />} />
        <Route path="/resume-help" element={<ResumeHelp />} />
        <Route path="/how-to-write-a-resume" element={<Writtingresume />} />

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;

