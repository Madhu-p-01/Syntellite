import React from "react";
import Hero from "../components/Hero";
import BuildForBusiness from "../components/BuildForBusiness";
import OurServices from "../components/OurServices";
import OurProcess from "../components/OurProcess";
import SEO from "../components/SEO";

const HomePage = () => {
  return (
    <>
      <SEO
        title="Syntellite | Custom Software Development & IT Solutions"
        description="Syntellite is a leading software development company specializing in custom web and mobile applications, UI/UX design, and scalable IT solutions for businesses of all sizes."
        name="Syntellite"
        type="website"
        canonical="https://syntellite.com/"
      />
      <Hero />
      <BuildForBusiness />
      <OurServices />
      <OurProcess />
    </>
  );
};

export default HomePage;
