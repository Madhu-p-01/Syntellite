import React from "react";

const HomePageV2 = () => {
  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img
            src="images/company logo.png"
            alt="Company Logo"
            className="navbar-logo"
            style={{ height: "2em", width: "auto" }}
          />
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/work" className="hover:text-gray-400">
            Services
          </a>
          <a href="/news" className="hover:text-gray-400">
            Careers
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <div>
          <a
            href="https://app.ew.studio/"
            target="_blank"
            className="bg-white text-black py-2 px-4 rounded-full font-semibold"
          >
            Request A Callback
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="media/Desktop.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-8xl font-bold leading-tight">
            Impactful <br />
            solutions <br />
            Made <span className="text-gray-400">effortlessly</span>
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Our passion for design and technology drives our commitment to
            digital craftsmanship.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="bg-white text-black py-3 px-8 rounded-full font-semibold text-lg"
            >
              Book a meeting
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Services</h2>
            <span className="text-4xl">↓</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <video
                className="w-full h-64 object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="media/Alice-11x.mp4" type="video/mp4" />
              </video>
              <div className="p-6">
                <h3 className="text-2xl font-bold">Web and App Solutions</h3>
                <p className="text-gray-400 mt-2">Web, Apps & Payments</p>
                <div className="mt-4 bg-gray-700 text-white py-1 px-3 rounded-full inline-block">
                  With latest and advanced tech stack's
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="images/img.jpg"
                alt="Engineering & AI"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Engineering & AI</h3>
                <p className="text-gray-400 mt-2">AI, Software & SaaS</p>
                <div className="mt-4 bg-gray-700 text-white py-1 px-3 rounded-full inline-block">
                  White label, SaaS & more
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="images/6823131e67b336d47715b9ba_compileit-thumb.webp"
                alt="Compilit"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Compilit</h3>
                <p className="text-gray-400 mt-2">Creating digital success</p>
                <div className="mt-4 bg-gray-700 text-white py-1 px-3 rounded-full inline-block">
                  Brand Identity & Web
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Screen Image Section */}
      <section className="h-screen bg-black flex items-center justify-center">
        <div className="relative w-full h-full">
          <img
            src="images/65565e3235658e62267e7c9e_irnova-hero-transparant.webp"
            alt="IRnova"
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="text-4xl font-bold">IRnova</h3>
            <p className="text-2xl text-gray-400">The Revolution of T2SL</p>
            <a
              href="/work/irnova"
              className="mt-4 inline-block text-white font-semibold"
            >
              View project →
            </a>
          </div>
        </div>
      </section>

      {/* Contact and Social Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold">
                We’re always looking for new collaborations.
              </h3>
            </div>
            <div>
              <a href="/contact" className="text-white font-semibold">
                Contact us →
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold">
                Check out our latest news on instagram
              </h3>
            </div>
            <div>
              <a
                href="https://www.instagram.com/ehrenstrahlewagnert/"
                target="_blank"
                className="text-white font-semibold"
              >
                Go to instagram →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-4">
        <div className="container mx-auto text-center text-gray-500">
          <p>© Copyright Ehrenstråhle & Wågnert</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePageV2;
