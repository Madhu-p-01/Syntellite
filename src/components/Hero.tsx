import React, { useState, useEffect, useRef } from "react";
import DesktopVideo from "../assets/media/Desktop.mp4";

const VideoBackground = () => {
  return (
    <>
      {/* Full Screen Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onError={(e) => {
          console.error("Video failed to load:", e);
        }}
      >
        <source src={DesktopVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
    </>
  );
};

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize(); // Set initial value
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Detect very small screens (iPhone SE and similar)
  const isVerySmallScreen = window.innerWidth <= 375;

  // Responsive scroll thresholds - adjusted for proper spacing
  const textScrollEnd = isMobile ? 200 : 600; // Reduced for better transition
  const sectionScrollStart = textScrollEnd; // When section starts scrolling

  // Header height to account for when scrolling
  const headerHeight = 88; // Header height + top margin (20px + 80px height + 8px padding)

  // Only allow text to scroll until textScrollEnd, then pin everything
  const textScrollProgress = Math.min(scrollY / textScrollEnd, 1);

  // Both heading and subtitle move up only (negative transform)
  // Limit the transform to prevent going behind header
  const maxTransform = isVerySmallScreen
    ? headerHeight + 20
    : headerHeight + 40;
  const headingTransform = Math.min(
    scrollY < textScrollEnd ? scrollY * 0.8 : textScrollEnd * 0.8,
    maxTransform
  );
  const headingOpacity = 1; // Always visible

  // Subtitle moves up with heading but with slightly less transform
  const subtitleTransform = Math.min(
    scrollY < textScrollEnd ? scrollY * 0.7 : textScrollEnd * 0.7,
    maxTransform - 20
  );
  const subtitleOpacity = 1; // Always visible

  return (
    <div
      ref={heroRef}
      className="relative"
      style={{ height: "100vh" }} // Fixed: Match video height to eliminate space
    >
      {/* Fixed Video Background - stays pinned until text scroll is complete */}
      <div
        className="w-full h-screen overflow-hidden"
        style={{
          position: scrollY < sectionScrollStart ? "fixed" : "absolute",
          top: scrollY < sectionScrollStart ? "0" : "0px",
          left: "0",
          zIndex: scrollY < sectionScrollStart ? 1 : -10, // Move behind content when scrolled
        }}
      >
        <VideoBackground />

        {/* Hero Text Content */}
        <div
          ref={textRef}
          className="absolute inset-0 flex items-end"
          style={{
            marginTop: "0vh",
            transform: isMobile ? "translateY(-12vh)" : "translateY(10vh)", // Reduced upward transform to show subtitle and button
            paddingBottom: "0vh",
            zIndex: scrollY < sectionScrollStart ? 20 : 20, // Lower z-index when scrolled
          }}
        >
          <div className="w-full max-w-none px-4 sm:px-0">
            {/* Main Heading */}
            <div
              className="relative"
              style={{
                marginLeft: isMobile ? "2vh" : "5vh", // Responsive margin
                transform: `translateY(-${headingTransform}px)`,
                opacity: headingOpacity,
              }}
            >
              <h1
                className={`text-white font-bold leading-tight ${
                  isVerySmallScreen
                    ? "text-4xl"
                    : "text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem]"
                }`}
                style={{
                  lineHeight: "0.9",
                  fontWeight: "700",
                }}
              >
                Impactful <br />
                solutions <br />
                Made <span style={{ color: "#9CA3AF" }}>effortlessly</span>
              </h1>
            </div>

            {/* Subtitle and CTA - positioned off-screen initially */}
            <div
              className="relative"
              style={{
                marginLeft: isMobile ? "2vh" : "5vh", // Responsive margin
                marginTop: isMobile ? "2rem" : "4rem", // Reduced spacing for better fit
                transform: `translateY(-${subtitleTransform}px)`, // Changed to negative (move up)
                opacity: subtitleOpacity,
              }}
            >
              <p
                className={`text-gray-200 max-w-3xl leading-relaxed mb-4 sm:mb-6 md:mb-8 ${
                  isVerySmallScreen
                    ? "text-sm"
                    : "text-lg sm:text-xl md:text-2xl lg:text-3xl"
                }`}
                style={{
                  lineHeight: "1.5",
                }}
              >
                Syntellite is the smarter way to build tech software, hardware,
                or both. Turn your ideas into reality with powerful, scalable
                solutions. No confusion, Just innovation made simple.
              </p>

              <div className="flex">
                <button className="bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4">
                  Book a meeting
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300"
          style={{
            opacity: Math.max(0, 1 - textScrollProgress),
            zIndex: scrollY < sectionScrollStart ? 20 : -5,
          }}
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
