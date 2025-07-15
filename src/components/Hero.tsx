import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full bg-transparent flex justify-center items-center min-h-[calc(100vh-440px)] px-4 sm:px-6 lg:px-8 pt-10 lg:pt-24">
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Main Content */}
        <div className="flex flex-col items-center w-full">
          {/* Heading */}
          <div className="flex flex-col items-center w-full">
            <h1 className="text-[#FAFAFA] text-center font-['Helvetica_Neue'] text-4xl md:text-5xl lg:text-[69px] font-medium leading-tight lg:leading-[72px]">
              Custom Software Development
            </h1>
            <h2 className="text-[#32ADE6] text-center font-['Helvetica_Neue'] text-4xl md:text-5xl lg:text-[70px] font-medium leading-tight lg:leading-[72px]">
              for Scalable Solutions
            </h2>
          </div>

          {/* Description */}
          <div className="mt-5">
            <p className="text-[#FAFAFA] text-center font-['Helvetica_Neue'] text-base lg:text-[17px] font-medium leading-7 max-w-[768px]">
              Syntellite is your trusted partner for full-stack engineering. We deliver high-performance, scalable solutions with robust backends, modern UI/UX, and seamless cloud deployment. Let us build the software that powers your success.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-4">
          {/* Start your project button */}
          <button className="flex h-[38px] px-[17px] py-[9px] justify-center items-center rounded-md border border-[rgba(62,144,207,0.30)] bg-[#003362] hover:bg-[#004080] transition-colors">
            <span className="text-[#FAFAFA] text-center font-['Helvetica_Neue'] text-[14px] font-medium leading-5">
              Get a Free Consultation
            </span>
          </button>

          {/* See Our Work button */}
          <button className="flex h-[38px] px-[17px] py-[9px] justify-center items-center rounded-md border border-[#363636] bg-[#242424] hover:bg-[#2a2a2a] transition-colors">
            <span className="text-[#FAFAFA] text-center font-['Helvetica_Neue'] text-[13px] font-medium leading-5">
              Explore Our Portfolio
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
