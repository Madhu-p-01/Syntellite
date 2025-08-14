import React from "react";
import SEO from "../components/SEO";
import { Lightbulb, Cpu, Zap, Users } from "lucide-react";
import aboutUsImage from "../assets/about-us.JPG?url";
import directorsImage from "../assets/directors.JPG?url";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Syntellite | Modern Tech Innovation Lab"
        description="Syntellite Innovations Private Limited is a modern tech company dedicated to turning bold ideas into engineered realities. Blending software development, electronics, and automation."
        name="Syntellite"
        type="website"
        canonical="https://syntellite.com/about"
      />
      <div className="bg-black text-white">
        {/* Hero Section */}
        <div className="pt-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-left mb-16">
              <div className="text-xs text-blue-400 uppercase tracking-wider mb-4">
                <span className="font-bold italic">ABOUT</span>{" "}
                <span className="font-medium italic">
                  SYNTELLITE INNOVATIONS PRIVATE LIMITED
                </span>
              </div>
              <div className="text-4xl lg:text-6xl leading-tight mb-6">
                <span className="font-bold italic">BOLD</span>{" "}
                <span className="font-medium italic">IDEAS</span>{" "}
                <span className="font-normal italic">ENGINEERED.</span>
              </div>
              <p className="text-xl text-gray-400 max-w-3xl">
                Turning bold ideas into engineered realities through software
                development, electronics, and automation.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Content */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Who We Are
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    <span className="text-white font-semibold">
                      Syntellite Innovations Private Limited
                    </span>{" "}
                    is a modern tech company dedicated to turning bold ideas
                    into engineered realities. Blending the worlds of software
                    development, electronics, and automation, Syntellite offers
                    end-to-end solutions that empower individuals and teams to
                    build real, scalable projects.
                  </p>
                  <p>
                    Whether it's custom software, hardware circuit design, IoT
                    integrations, or system automation, Syntellite provides the
                    tools, guidance, and support to make innovation simple and
                    accessible.
                  </p>
                  <p>
                    Designed as a hands-on innovation lab, it welcomes creators
                    of all ages—from curious kids to seasoned professionals—to
                    learn by building.
                  </p>
                </div>
              </div>

              {/* About Us Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={aboutUsImage}
                    alt="Syntellite Innovation Lab - Our team working on cutting-edge technology projects"
                    className="w-full h-auto object-cover rounded-3xl shadow-2xl"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 rounded-3xl"></div>
                </div>
              </div>
            </div>

            {/* Board of Directors Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Directors Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={directorsImage}
                    alt="Syntellite Board of Directors - CEO Roshan, COO Prateek, CTO Madhu"
                    className="w-full h-auto object-cover rounded-3xl shadow-2xl"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20 rounded-3xl"></div>
                </div>
              </div>

              {/* Directors Content */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Board of Directors
                </h2>
                <div className="space-y-8">
                  {/* CEO */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-bold text-purple-400 mb-2">Roshan</h3>
                    <p className="text-lg font-semibold text-white mb-2">Chief Executive Officer (CEO)</p>
                    <p className="text-gray-400 leading-relaxed">
                      Visionary leader driving Syntellite's strategic direction and innovation initiatives. With extensive experience in technology leadership, Roshan guides the company's mission to turn bold ideas into engineered realities.
                    </p>
                  </div>

                  {/* COO */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Prateek</h3>
                    <p className="text-lg font-semibold text-white mb-2">Chief Operating Officer (COO)</p>
                    <p className="text-gray-400 leading-relaxed">
                      Operations excellence expert ensuring seamless project delivery and client satisfaction. Prateek oversees day-to-day operations, process optimization, and team coordination across all departments.
                    </p>
                  </div>

                  {/* CTO */}
                  <div className="border-l-4 border-pink-500 pl-6">
                    <h3 className="text-xl font-bold text-pink-400 mb-2">Madhu</h3>
                    <p className="text-lg font-semibold text-white mb-2">Chief Technology Officer (CTO)</p>
                    <p className="text-gray-400 leading-relaxed">
                      Technology architect and innovation catalyst leading Syntellite's technical vision. Madhu spearheads cutting-edge development practices, emerging technology adoption, and technical excellence across all projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Our Philosophy
              </h2>
              <div className="bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-3xl p-8 lg:p-12">
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  With a philosophy rooted in{" "}
                  <span className="text-purple-400 font-semibold">clarity</span>
                  ,{" "}
                  <span className="text-blue-400 font-semibold">
                    creativity
                  </span>
                  , and{" "}
                  <span className="text-pink-400 font-semibold">
                    collaboration
                  </span>
                  , Syntellite redefines how technology is imagined, built, and
                  experienced.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Clarity */}
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  Clarity
                </h3>
                <p className="text-gray-400">
                  We believe in clear communication, transparent processes, and
                  straightforward solutions that everyone can understand.
                </p>
              </div>

              {/* Creativity */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  Creativity
                </h3>
                <p className="text-gray-400">
                  Innovation drives us forward. We approach every challenge with
                  fresh perspectives and creative problem-solving.
                </p>
              </div>

              {/* Collaboration */}
              <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/20 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pink-400">
                  Collaboration
                </h3>
                <p className="text-gray-400">
                  We work hand-in-hand with our clients and community, fostering
                  partnerships that drive mutual success.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-20">
              <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-3xl p-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join our innovation lab and turn your ideas into reality with
                  cutting-edge technology and expert guidance.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
