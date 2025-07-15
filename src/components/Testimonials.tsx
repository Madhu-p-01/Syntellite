import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const testimonials = [
  {
    quote: "Syntellite transformed our operations with a custom ERP system. Their team is professional, responsive, and highly skilled. We couldn't be happier with the result.",
    name: "John Doe",
    title: "CEO, TechCorp",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The mobile app developed by Syntellite has been a game-changer for our business. It's intuitive, fast, and has received amazing feedback from our users.",
    name: "Jane Smith",
    title: "Product Manager, Innovate Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Working with Syntellite on our cloud migration was a seamless experience. Their expertise in AWS and DevOps is unparalleled.",
    name: "Sam Wilson",
    title: "CTO, Future Solutions",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    quote: "The team at Syntellite is top-notch. Their attention to detail and commitment to quality is evident in everything they do.",
    name: "Emily Johnson",
    title: "Head of Product, Digital Ventures",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "We've worked with many development agencies, but Syntellite stands out. Their ability to understand our needs and deliver a product that exceeds our expectations is truly remarkable.",
    name: "Michael Brown",
    title: "Founder, CodeBase",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg"
  },
  {
    quote: "The mobile app developed by Syntellite has been a game-changer for our business. It's intuitive, fast, and has received amazing feedback from our users.",
    name: "Jane Smith",
    title: "Product Manager, Innovate Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
];

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  title: string;
  avatar: string;
  className?: string;
}> = ({ quote, name, title, avatar, className }) => (
  <div
    className={cn(
      "relative min-h-[200px] rounded-xl overflow-hidden group",
      "bg-gradient-to-b from-[#2E2E2E] to-[rgba(46,46,46,0.5)]",
      "p-[1px]",
      className,
    )}
  >
    <div className="h-full w-full bg-[#171717] rounded-[11px] p-8 flex flex-col justify-between">
      <p className="text-[#898989] text-[15px] font-medium leading-6 mb-6">
        "{quote}"
      </p>
      <div className="flex items-center mt-auto">
        <img src={avatar} alt={`Avatar of ${name}`} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  return (
    <section id="testimonials" className=" bg-[--main-dark-bg] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <div className="text-sky-400 text-xs font-normal uppercase tracking-[1.2px] font-mono">
            Testimonials
          </div>
          <h2 className="text-[35px] leading-[43px] font-medium max-w-[448px] mt-4">
            <span className="text-white">What Our Clients Say</span>
            <span className="text-gray-400"> About Us</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 animate-scroll-fast">
              <div className="flex gap-4 min-w-max">
                {firstRow.map((testimonial, index) => (
                  <div key={index} className="w-[350px]">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {firstRow.map((testimonial, index) => (
                  <div key={`duplicate-${index}`} className="w-[350px]">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-4 animate-scroll-slow">
              <div className="flex gap-4 min-w-max">
                {secondRow.map((testimonial, index) => (
                  <div key={index} className="w-[350px]">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {secondRow.map((testimonial, index) => (
                  <div key={`duplicate-${index}`} className="w-[350px]">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[--main-dark-bg] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[--main-dark-bg] to-transparent pointer-events-none z-10" />
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scroll-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-slow {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-fast {
          animation: scroll-fast 30s linear infinite;
        }
        
        .animate-scroll-slow {
            animation: scroll-slow 30s linear infinite;
        }

        .animate-scroll-fast:hover, .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
        `,
        }}
      />
    </section>
  );
};

export default Testimonials;
