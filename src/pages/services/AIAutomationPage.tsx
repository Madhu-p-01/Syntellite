import React from 'react';
import SEO from '../../components/SEO';
import ServicesLayout from '../../components/ServicesLayout';
import { 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Zap,
  Shield,
  Globe,
  Users,
  Database,
  Cloud,
  Target,
  TrendingUp,
  Layers,
  Code,
  Brain,
  Bot,
  Eye,
  MessageSquare,
  Cpu,
  Settings
} from 'lucide-react';

const AIAutomationPage = () => {
  return (
    <>
      <SEO
        title="AI and Automation Services | Syntellite Innovation Lab"
        description="Intelligent automation solutions with machine learning, NLP, and computer vision. Transform your business with AI-powered automation and smart systems."
        name="Syntellite"
        type="website"
        canonical="https://syntellite.com/services/ai-automation"
      />
      <ServicesLayout>
        <div className="max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 text-pink-400" />
              <span className="text-sm text-pink-400 font-medium uppercase tracking-wider">AI and Automation</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="font-bold italic">INTELLIGENT</span>{" "}
              <span className="font-medium italic text-pink-400">AUTOMATION</span>{" "}
              <span className="font-normal italic">SOLUTIONS</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Transform your business with AI-powered automation. From machine learning models to intelligent chatbots, 
              we build smart systems that learn, adapt, and optimize your operations automatically.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-gradient-to-br from-pink-600/10 to-pink-800/10 border border-pink-600/20 rounded-xl">
              <Brain className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Machine Learning</h3>
              <p className="text-gray-400 text-sm">Advanced ML models that learn from data and improve over time.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-600/20 rounded-xl">
              <Bot className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Process Automation</h3>
              <p className="text-gray-400 text-sm">Automate repetitive tasks and streamline business workflows.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-xl">
              <Eye className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Computer Vision</h3>
              <p className="text-gray-400 text-sm">Image recognition, object detection, and visual analysis systems.</p>
            </div>
          </div>

          {/* AI Technologies */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">AI Technologies We Use</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Machine Learning</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">TensorFlow & PyTorch</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Scikit-learn & Pandas</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">OpenAI GPT & Claude</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Hugging Face Transformers</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Automation & Cloud</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">AWS AI Services</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Google Cloud AI</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Microsoft Azure AI</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Docker & Kubernetes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Our AI Development Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Problem Analysis & Data Assessment</h3>
                  <p className="text-gray-400">
                    Identify automation opportunities, analyze existing data, and define AI objectives and success metrics.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Data Preparation & Model Design</h3>
                  <p className="text-gray-400">
                    Clean and prepare data, select appropriate algorithms, and design the AI model architecture.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Training & Optimization</h3>
                  <p className="text-gray-400">
                    Train models, fine-tune parameters, validate performance, and optimize for production deployment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Deployment & Monitoring</h3>
                  <p className="text-gray-400">
                    Deploy to production, implement monitoring systems, and provide ongoing model maintenance and updates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Solutions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">AI Solutions We Build</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-pink-600/10 to-pink-800/10 border border-pink-600/20 rounded-xl">
                <MessageSquare className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Intelligent Chatbots</h3>
                <p className="text-gray-400 text-sm mb-4">
                  AI-powered conversational agents that understand context and provide human-like interactions.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Natural language processing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Multi-language support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Integration with existing systems
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-600/20 rounded-xl">
                <Eye className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Computer Vision</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Advanced image and video analysis for object detection, recognition, and classification.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Object detection & tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Facial recognition
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Quality inspection
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/20 rounded-xl">
                <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Predictive Analytics</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Machine learning models that predict future trends and outcomes from historical data.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Sales forecasting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Risk assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Demand planning
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-600/20 rounded-xl">
                <Bot className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Process Automation</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Robotic Process Automation (RPA) and intelligent workflow automation solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Document processing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Data entry automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Workflow optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Industry Applications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Healthcare</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Medical image analysis</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Drug discovery</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Patient monitoring</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Finance</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Fraud detection</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Risk assessment</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Algorithmic trading</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Retail & E-commerce</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Recommendation engines</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Inventory optimization</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm">Price optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Investment Levels</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2">AI Starter</h3>
                <p className="text-3xl font-bold text-pink-400 mb-4">₹5L - ₹15L</p>
                <p className="text-gray-400 text-sm mb-4">Basic AI solutions and automation</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Simple chatbot
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Basic automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Data analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    3 months support
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-pink-600/20 to-pink-800/20 border border-pink-600/40 rounded-xl relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pink-600 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Professional</h3>
                <p className="text-3xl font-bold text-pink-400 mb-4">₹15L - ₹50L</p>
                <p className="text-gray-400 text-sm mb-4">Advanced AI and ML solutions</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Custom ML models
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Computer vision
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    6 months support
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2">AI Enterprise</h3>
                <p className="text-3xl font-bold text-pink-400 mb-4">₹50L+</p>
                <p className="text-gray-400 text-sm mb-4">Enterprise-grade AI platforms</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Complex AI systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Multi-model integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Scalable infrastructure
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Dedicated support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Automate with AI?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your business operations with intelligent automation and machine learning solutions that work 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  Start AI Project
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  AI Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </ServicesLayout>
    </>
  );
};

export default AIAutomationPage;
