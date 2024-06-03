import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'; 
import React from 'react';
import HeaderMenu from './Headers.js'; 
import FooterMenu from './Footer.js';
import HomePage from './Home'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './About.js';
import ContactUs from './ContactUs.js'
import SignUp from './SignUp.js'
import LogIn from './LogIn.js'
import Service from './Service.js'



const App = () => {
  

  return (
    <Router>
       <div>
       

      <HeaderMenu />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<About />} />  
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/Service" element={<Service />} />

        </Routes>

      <FooterMenu  />

    </div>
    </Router>

   
  



  );
};

export default App;
