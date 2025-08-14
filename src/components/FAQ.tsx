import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const faqData = [
  {
    category: 'Process & Timeline',
    questions: [
      {
        question: 'How long does a typical development project take?',
        answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, mobile apps 6-12 weeks, and enterprise solutions 3-6 months. We provide detailed timelines during our discovery phase.'
      },
      {
        question: 'What\'s included in the discovery phase?',
        answer: 'Our discovery phase includes project scope definition, technical feasibility analysis, timeline estimation, wireframe creation, and technology stack recommendation. This ensures we fully understand your requirements before development begins.'
      },
      {
        question: 'How do you ensure projects stay on schedule?',
        answer: 'We use agile methodology with weekly sprints, regular milestone reviews, and continuous client communication. Our project managers provide weekly updates and proactively address any potential delays.'
      }
    ]
  },
  {
    category: 'Pricing & Payment',
    questions: [
      {
        question: 'How do you price your projects?',
        answer: 'We offer fixed-price projects based on detailed scope analysis. After the discovery phase, you\'ll receive a comprehensive quote with no hidden costs. We also offer hourly rates for ongoing maintenance and support.'
      },
      {
        question: 'What are your payment terms?',
        answer: 'We typically work with a 50% upfront payment and 50% upon completion for smaller projects. Larger projects are broken into milestone-based payments. We accept bank transfers, credit cards, and digital payments.'
      },
      {
        question: 'Do you offer any guarantees?',
        answer: 'Yes! We guarantee 100% project completion, on-time delivery, and provide a 30-day bug-fix warranty. If you\'re not satisfied with our work, we\'ll make it right at no additional cost.'
      }
    ]
  },
  {
    category: 'Technical',
    questions: [
      {
        question: 'What technologies do you specialize in?',
        answer: 'We specialize in React, Node.js, Python, React Native, Flutter, AWS, and AI/ML technologies. Our full-stack team covers frontend, backend, mobile, cloud, and emerging technologies like blockchain and IoT.'
      },
      {
        question: 'Do you provide ongoing maintenance and support?',
        answer: 'Absolutely! We offer 24/7 support packages including bug fixes, security updates, performance monitoring, and feature enhancements. Our support plans start at $500/month for basic maintenance.'
      },
      {
        question: 'Can you work with our existing tech stack?',
        answer: 'Yes, we can integrate with and enhance your existing systems. Our team has experience with legacy systems, third-party APIs, and can provide migration services if needed.'
      }
    ]
  },
  {
    category: 'Communication',
    questions: [
      {
        question: 'How often do you provide project updates?',
        answer: 'We provide weekly progress reports with screenshots, completed features, and upcoming milestones. You\'ll also have access to our project dashboard for real-time progress tracking.'
      },
      {
        question: 'What\'s your response time for queries?',
        answer: 'We respond to all queries within 4 hours during business hours and within 24 hours on weekends. For urgent issues, we offer emergency support with 1-hour response time.'
      },
      {
        question: 'Which communication channels do you use?',
        answer: 'We use Slack for daily communication, Zoom for weekly meetings, and email for formal updates. You can choose your preferred communication method during project kickoff.'
      }
    ]
  }
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const navigate = useNavigate();

  // Filter FAQs based on search term
  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleQuestion = (questionId: string) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-16 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ background: '#EC4899' }}></div>
        <div className="absolute bottom-40 right-16 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" style={{ background: '#8B5CF6' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" style={{ background: '#3B82F6' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs text-blue-400 uppercase tracking-wider mb-4"
          >
            <span className="font-bold italic">FREQUENTLY</span>{" "}
            <span className="font-medium italic">ASKED QUESTIONS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            Got Questions?
            <br />
            <span className="text-blue-400">
              We Have Answers
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Find answers to common questions about our development process, pricing, 
            timelines, and support services.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-950 border border-gray-800 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => {
              setActiveCategory(null);
              setSearchTerm('');
            }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            All Questions
          </button>
          {faqData.map((category, index) => (
            <button
              key={category.category}
              onClick={() => {
                setActiveCategory(category.category);
                setSearchTerm('');
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {category.category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {(activeCategory 
            ? faqData.filter(cat => cat.category === activeCategory)
            : searchTerm 
            ? filteredFAQs 
            : faqData
          ).map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold mb-6 text-center lg:text-left">
                <span className="text-blue-400">
                  {category.category}
                </span>
              </h3>
              
              {category.questions.map((faq, questionIndex) => {
                const questionId = `${category.category}-${questionIndex}`;
                const isActive = activeQuestion === questionId;
                
                return (
                  <motion.div
                    key={questionId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (questionIndex * 0.05) }}
                    className="bg-gray-950 rounded-2xl border border-gray-800 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(questionId)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-900 transition-colors"
                    >
                      <span className="font-medium text-white pr-4">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16 bg-gray-950 rounded-2xl p-8 border border-gray-800"
        >
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-blue-400">
              Still Have Questions?
            </span>
          </h3>
          <p className="text-gray-400 mb-6">
            Can't find what you're looking for? Our team is here to help with any specific questions about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                navigate('/contact');
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Request a Call back
            </button>
            <button 
              onClick={() => {
                navigate('/book-meeting');
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              className="border border-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              Book a Meeting
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
