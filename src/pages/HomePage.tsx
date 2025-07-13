import React from 'react';
import Hero from '../components/Hero';
import TechLogos from '../components/TechLogos';
import FeaturesGrid from '../components/FeaturesGrid';
import CustomerStories from '../components/CustomerStories';
import Testimonials from '../components/Testimonials';
import OurProcess from '../components/OurProcess';

const HomePage = () => {
  return (
    <>
      <Hero />
      <TechLogos />
      <FeaturesGrid />
      <CustomerStories />
      <OurProcess />
      <Testimonials />
    </>
  );
};

export default HomePage;
