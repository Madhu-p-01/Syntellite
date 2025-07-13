import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[--main-dark-bg] overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0, -100, 0],
            y: [0, 50, 100, 50, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"
          animate={{
            x: [0, -100, 0, 100, 0],
            y: [0, -50, -100, -50, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
