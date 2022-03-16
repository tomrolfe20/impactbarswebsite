import React from 'react';
// import Products from './components/Products/Products';
// import { productData } from './components/Products/data'
import Hero from './components/Hero';
import { GlobalStyle } from './components/GlobalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
// import Team from './components/Team';
// import { teamData } from './components/Team/data';
import WhatWeDo from './components/WhatWeDo';
import Home from './pages';
import Work from './components/Work';
import Testimonials2 from './components/Testimonials2';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Clients from './components/Clients';

function App() {
  return (
    
    <Router>
      
    <GlobalStyle />
    <Home />
    <Hero />
    <WhatWeDo />
    <Clients />
    <Work />
    {/* <Products heading='Previous events' data={productData} /> */}
    <Testimonials2 />
    <Contact />
    <Footer />
    </Router>
  );
}

export default App;