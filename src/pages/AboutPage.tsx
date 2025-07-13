import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-[--main-dark-bg] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold">About Syntellite</h1>
          <p className="text-lg sm:text-xl text-gray-400 mt-4">
            We are a team of passionate engineers, designers, and strategists dedicated to building exceptional software.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-400 mb-6">
              Our mission is to empower businesses with technology. We believe that well-crafted software can be a transformative force, and we are committed to helping our clients achieve their goals through innovative and reliable solutions.
            </p>
            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                <span className="font-semibold text-white">Customer-Centric:</span> We put our clients at the heart of everything we do.
              </li>
              <li>
                <span className="font-semibold text-white">Quality-Driven:</span> We are committed to delivering high-quality, well-tested software.
              </li>
              <li>
                <span className="font-semibold text-white">Innovative:</span> We are always learning and exploring new technologies to find the best solutions.
              </li>
              <li>
                <span className="font-semibold text-white">Collaborative:</span> We work closely with our clients to ensure we are building the right product.
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Our team"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
