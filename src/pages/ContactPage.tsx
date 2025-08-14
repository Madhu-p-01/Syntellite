import React, { useState, useEffect } from "react";
import SEO from "../components/SEO";
import { Phone, Mail, MapPin, MessageCircle, Clock, Users } from "lucide-react";

const ContactPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <SEO
        title="Contact Us | Syntellite Innovation Lab"
        description="Get in touch with Syntellite Innovations. Let's turn your bold ideas into engineered realities together."
        name="Syntellite"
        type="website"
        canonical="https://syntellite.com/contact"
      />
      <div className="bg-black text-white">
        {/* Hero Section */}
        <div className="pt-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-left mb-16">
              <div className="text-xs text-blue-400 uppercase tracking-wider mb-4">
                <span className="font-bold italic">CONTACT</span>{" "}
                <span className="font-medium italic">SYNTELLITE</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Let's Build Something Amazing Together
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl">
                Ready to turn your bold ideas into engineered realities? Get in
                touch with our innovation lab and let's start building.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 mb-3 font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/5 border border-gray-600 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 mb-3 font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/5 border border-gray-600 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="project"
                      className="block text-gray-300 mb-3 font-medium"
                    >
                      Project Type
                    </label>
                    <select
                      id="project"
                      className="w-full bg-white/5 border border-gray-600 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all"
                    >
                      <option value="">Select project type</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="iot-hardware">IoT & Hardware</option>
                      <option value="automation">System Automation</option>
                      <option value="consulting">Consulting & Strategy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-300 mb-3 font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full bg-white/5 border border-gray-600 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-xl hover:from-purple-600 hover:via-blue-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-8">
                    Contact Information
                  </h2>

                  {/* Email */}
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-400 mb-2">
                          Email Us
                        </h3>
                        <p className="text-gray-300">contact@syntellite.com</p>
                        <p className="text-gray-400 text-sm mt-1">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-purple-400 mb-2">
                          Call Us
                        </h3>
                        <p className="text-gray-300">+91 99722 00910</p>
                        <p className="text-gray-400 text-sm mt-1">
                          Mon-Fri, 9 AM - 6 PM IST
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/20 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-pink-400 mb-2">
                          HeadQuarters
                        </h3>
                        <p className="text-gray-300">
                          2423 KK HALLI, Kacharakanahalli, St. Thomas Town
                        </p>
                        <p className="text-gray-300">
                          Bangalore, Karnataka, India
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          By appointment only
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Why Choose Syntellite?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">
                        Expert team of engineers & designers
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">
                        Fast turnaround & agile development
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">
                        Clear communication & collaboration
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20">
              <div className="bg-gradient-to-br from-gray-900 to-purple-900/50 border border-purple-600/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Ready to Start?
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get expert consultation on your project requirements.
                </p>
                <a
                  href="mailto:contact@syntellite.com"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm"
                >
                  <Users className="w-4 h-4" />
                  Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
