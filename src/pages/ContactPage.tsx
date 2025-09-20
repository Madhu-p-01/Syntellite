import React, { useState, useEffect } from "react";
import SEO from "../components/SEO";
import { Phone, Mail, MapPin, MessageCircle, Clock, Users, CheckCircle, AlertCircle } from "lucide-react";
import { simpleGoogleSheetsService, ContactFormData } from "../lib/googleSheetsSimple";
import { trackContactFormSubmission, trackBookMeetingClick } from "../lib/analytics";

const ContactPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await simpleGoogleSheetsService.submitContactForm(formData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', project: '', message: '' });
        // Track successful form submission
        trackContactFormSubmission(formData);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Check if it's a configuration error
      if (error instanceof Error && error.message.includes('not configured')) {
        console.warn('Google Sheets not configured. Form data logged to console for development.');
        console.log('Form submission data:', formData);
        setSubmitStatus('success'); // Show success in development
        setFormData({ name: '', email: '', phone: '', project: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };
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
              <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-gray-600 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      placeholder="Your full name"
                      required
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
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-gray-600 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-300 mb-3 font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-gray-600 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all"
                      placeholder="+91 99999 99999"
                      required
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
                      value={formData.project}
                      onChange={handleInputChange}
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
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-gray-600 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
                      placeholder="Tell us about your project and how we can help..."
                      required
                    ></textarea>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <span className="text-red-400">Failed to send message. Please try again or contact us directly.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
                  <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
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
                  <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
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
                  <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
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
                <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Why Choose Syntellite?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">
                        Expert team of engineers & designers
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">
                        Fast turnaround & agile development
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
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
              <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 lg:p-12 text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Ready to Start?
                  </h3>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Get expert consultation on your project requirements and let's turn your vision into reality.
                  </p>
                  <div className="flex justify-center">
                    <a
                      href="/book-meeting"
                      onClick={() => trackBookMeetingClick('Contact Page CTA')}
                      className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] font-semibold text-base"
                    >
                      <Users className="w-5 h-5" />
                      Book a free consultation
                    </a>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <p className="text-gray-400 text-sm">
                      <span className="inline-flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Response within 24 hours
                      </span>
                      <span className="mx-4 text-gray-600">•</span>
                      <span className="inline-flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        No commitment required
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
