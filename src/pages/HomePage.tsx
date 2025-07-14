import React from 'react';
import Hero from '../components/Hero';
import TechLogos from '../components/TechLogos';
import FeaturesGrid from '../components/FeaturesGrid';
import CustomerStories from '../components/CustomerStories';
import Testimonials from '../components/Testimonials';
import OurProcess from '../components/OurProcess';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Syntellite | Custom Software Development & IT Solutions"
        description="Syntellite is a leading software development company specializing in custom web and mobile applications, UI/UX design, and scalable IT solutions for businesses of all sizes."
        name="Syntellite"
        type="website"
      />
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
