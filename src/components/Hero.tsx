import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full bg-transparent flex justify-center items-center min-h-[calc(100vh-440px)] px-4 sm:px-6 lg:px-8 pt-10 lg:pt-24">
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Event Banner */}
        <a
          href="#"
          className="relative w-fit inline-flex items-center p-1 rounded-full bg-gray-800/50 border border-gray-700 group backdrop-blur-sm"
        >
          <span className="bg-blue-500 text-white rounded-full px-2 py-0.5 mr-2 text-xs font-semibold">
            LW15
          </span>
          <span className="text-gray-300 group-hover:text-white text-sm mr-1">
            Claim your ticket
          </span>
          <ArrowRight
            className="w-4 h-4 text-gray-400 group-hover:text-white"
            strokeWidth={1.5}
          />
        </a>

        {/* Main Content */}
        <div className="flex flex-col items-center w-full">
          {/* Heading */}
          <div className="flex flex-col items-center w-full">
            <h1 className="text-[#FAFAFA] text-center font-['Helvetica_Neue'] text-4xl md:text-5xl lg:text-[69px] font-medium leading-tight lg:leading-[72px]">
              Engineered to Scale
            </h1>
            <h2 className="text-[#32ADE6] text-center font-['Helvetica_Neue'] text-4xl md:text-5xl lg:text-[70px] font-medium leading-tight lg:leading-[72px]">
              Built to Last
            </h2>
          </div>

          {/* Description */}
          <div className="mt-5">
            <p className="text-[#FAFAFA] text-center font-['Helvetica_Neue'] text-base lg:text-[17px] font-medium leading-7 max-w-[768px]">
              Syntellite is your full-stack engineering partner. Start your
              project with scalable architecture, robust backend systems, modern
              UI/UX, cloud deployment, APIs, real-time features, DevOps
              automation, and AI integrations — all engineered for performance
              and scale.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-4">
          {/* Start your project button */}
          <button className="flex h-[38px] px-[17px] py-[9px] justify-center items-center rounded-md border border-[rgba(62,144,207,0.30)] bg-[#003362] hover:bg-[#004080] transition-colors">
            <span className="text-[#FAFAFA] text-center font-['Helvetica_Neue'] text-[14px] font-medium leading-5">
              Start your project
            </span>
          </button>

          {/* See Our Work button */}
          <button className="flex h-[38px] px-[17px] py-[9px] justify-center items-center rounded-md border border-[#363636] bg-[#242424] hover:bg-[#2a2a2a] transition-colors">
            <span className="text-[#FAFAFA] text-center font-['Helvetica_Neue'] text-[13px] font-medium leading-5">
              See Our Work
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
