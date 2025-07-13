import React from 'react';
import ourProcessImage from '../assets/Ourprocess.png';

const OurProcess = () => {
  return (
    <section className="py-20 bg-[--main-dark-bg] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <div className="text-sky-400 text-xs font-normal uppercase tracking-[1.2px] font-mono">
            Our Process
          </div>
          <h2 className="text-[35px] leading-[43px] font-medium max-w-[448px] mt-4">
            <span className="text-white">A streamlined approach to</span>
            <span className="text-gray-400"> delivering excellence.</span>
          </h2>
        </div>
        <div>
          <img src={ourProcessImage} alt="Our Process" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
