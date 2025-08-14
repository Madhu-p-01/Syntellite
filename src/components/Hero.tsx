import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MobileVideoWebM from "../assets/media/_MConverter.eu_Mobile.webm";
import DesktopVideoWebM from "../assets/media/_MConverter.eu_Desktop.webm";
import DesktopThumbnail from "../assets/desktop-thumbnail-hero.png";
import MobileThumbnail from "../assets/mobile-thumbnail-hero.png";

const VideoBackground = ({ isMobile }: { isMobile: boolean }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <>
      {/* Thumbnail Image */}
      <div
        className="absolute inset-0 w-full h-full object-cover z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            isMobile ? MobileThumbnail : DesktopThumbnail
          })`,
          opacity: isVideoLoaded ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      {/* Full Screen Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsVideoLoaded(true)}
        onError={(e) => {
          console.error("Video failed to load:", e);
        }}
        key={isMobile ? "mobile" : "desktop"}
        style={{
          opacity: isVideoLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <source
          src={isMobile ? MobileVideoWebM : DesktopVideoWebM}
          type="video/webm"
        />
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
  const navigate = useNavigate();

  // Add specific styles for 1205x551 resolution
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media (width: 1280px) and (height: 720px) {
        .hero-heading-1205 {
          font-size: 5rem !important;
        }
        .hero-subtitle-1205 {
          font-size: 2rem !important;
        }
        .hero-content-1205 {
          align-items: center !important;
          transform: translateY(-10vh) !important;
        }
        .hero-container-1205 {
          margin-top: 200px !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleBookMeeting = () => {
    navigate("/book-meeting");
  };

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
      style={{ height: "100svh" }} // Changed to svh for better mobile support
    >
      {/* Fixed Video Background - stays pinned until text scroll is complete */}
      <div
        className="w-full h-screen overflow-hidden"
        style={{
          position: "sticky",
          top: "0",
          left: "0",
          zIndex: 1,
        }}
      >
        <VideoBackground isMobile={isMobile} />

        {/* Hero Text Content */}
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center hero-content-1205"
          style={{
            marginTop: "0vh",
            transform: isMobile ? "translateY(15vh)" : "translateY(9vh)", // Moved up to show button
            paddingBottom: "0vh",
            zIndex: scrollY < sectionScrollStart ? 20 : 20, // Lower z-index when scrolled
          }}
        >
          <div className="w-full max-w-none px-4 sm:px-0 hero-container-1205">
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
                className={`text-white font-bold leading-tight hero-heading-1205 ${
                  isVerySmallScreen
                    ? "text-3xl"
                    : "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem]"
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
                className={`text-gray-200 max-w-3xl leading-relaxed mb-4 sm:mb-6 md:mb-8 hero-subtitle-1205 ${
                  isVerySmallScreen
                    ? "text-xs"
                    : "text-base sm:text-lg md:text-xl lg:text-2xl"
                }`}
                style={{
                  lineHeight: "1.5",
                }}
              >
                Syntellite is the smarter way to build tech software, hardware,
                or both. Turn your ideas into reality with Syntellite.
              </p>

              <div className="flex">
                <button
                  onClick={handleBookMeeting}
                  className="bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4"
                >
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
            display: "none",
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
