import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-[--main-dark-bg] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-400 mt-4">
            We'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-[--card-dark-bg] p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input type="text" id="name" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-sky-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input type="email" id="email" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-sky-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:border-sky-400"></textarea>
              </div>
              <button type="submit" className="bg-sky-500 text-white px-6 py-3 rounded-md hover:bg-sky-600 transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Our Office</h3>
                <p className="text-gray-400">123 Main Street, New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <Mail className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-gray-400">contact@syntellite.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <Phone className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-gray-400">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
