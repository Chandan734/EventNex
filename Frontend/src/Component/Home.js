import React from 'react';

import Poster from './Poster';
import Service from './Service';
import About from './About';
import Gallery from './Gallery';
import Pricing from './Pricing';
import Review from './Review';
import Contact from './Contact';
import Footer from './Footer';
import Toggle from './Toggle';

function Home() {
  return (
  <>
  <Poster />
  <Service />
  <About />
  <Gallery />
  <Pricing />
  <Review />
  <Contact />
  <Footer />
  <Toggle />
  </>
  );
}

export default Home;
