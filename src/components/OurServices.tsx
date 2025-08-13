import React, { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Globe, Database, Palette, Cloud, BarChart3, CreditCard, Lightbulb, Users, Megaphone } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  icon: Icon, 
  gradient, 
  textColor = "text-white",
  iconColor = "text-white",
  size = "normal" 
}: {
  title: string;
  icon: any;
  gradient: string;
  textColor?: string;
  iconColor?: string;
  size?: "normal" | "large";
}) => (
  <div className={`${gradient} rounded-3xl p-6 lg:p-8 relative overflow-hidden ${
    size === "large" ? "lg:col-span-2" : ""
  }`}>
    <div className="relative z-10">
      <div className={`${iconColor} mb-4`}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className={`${textColor} font-bold ${
        size === "large" ? "text-4xl lg:text-5xl" : "text-2xl lg:text-3xl"
      } leading-tight`}>
        {title}
      </h3>
    </div>
    
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-4 right-4">
        <Icon className="w-16 h-16 opacity-30" />
      </div>
    </div>
  </div>
);

const AnalyticsCard = () => (
  <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-3xl p-6 lg:p-8 relative overflow-hidden">
    <div className="relative z-10">
      <div className="text-white mb-4">
        <BarChart3 className="w-8 h-8" />
      </div>
      <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight mb-6">
        Analytics & <br />Insights
      </h3>
      
      {/* Chart Visualization */}
      <div className="flex items-end justify-between h-24 gap-2">
        {[40, 60, 35, 80, 45, 70, 90, 55, 75, 85, 65, 95].map((height, i) => (
          <div
            key={i}
            className="bg-cyan-400 rounded-t flex-1 transition-all duration-300 hover:bg-cyan-300"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  </div>
);

const DataCard = () => (
  <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl p-6 lg:p-8 relative overflow-hidden lg:col-span-2">
    <div className="relative z-10">
      <div className="text-white mb-4">
        <Database className="w-8 h-8" />
      </div>
      <h3 className="text-white font-bold text-4xl lg:text-5xl leading-tight mb-6">
        Data Solutions
      </h3>
      
      {/* Data Visualization */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
        <div className="text-xs text-white/70 mb-2 flex items-center justify-between">
          <span>Top Services</span>
          <span>Usage</span>
        </div>
        
        <div className="space-y-3">
          {[
            { name: "Web Development", value: 85, color: "bg-cyan-400" },
            { name: "Mobile Apps", value: 70, color: "bg-blue-400" },
            { name: "Cloud Solutions", value: 60, color: "bg-purple-400" },
            { name: "AI Integration", value: 45, color: "bg-pink-400" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-white text-sm">{item.name}</span>
              <div className="flex items-center gap-2">
                <div className="w-16 bg-white/20 rounded-full h-2">
                  <div 
                    className={`${item.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
                <span className="text-white/70 text-sm w-8">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const StackedServiceCard = ({ 
  title, 
  icon: Icon, 
  gradient, 
  description,
  technologies = [],
  index,
  totalCards
}: {
  title: string;
  icon: any;
  gradient: string;
  description: string;
  technologies?: string[];
  index: number;
  totalCards: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${gradient} rounded-3xl p-6 relative overflow-hidden transition-all duration-700 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-20 opacity-0 scale-95'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="relative z-10">
        <div className="text-white mb-4">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-white font-bold text-2xl leading-tight mb-4">
          {title}
        </h3>
        <p className="text-white/80 text-sm mb-4">
          {description}
        </p>
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span key={i} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4">
          <Icon className="w-16 h-16 opacity-30" />
        </div>
      </div>
    </div>
  );
};

export default function OurServices() {
  const services = [
    {
      title: "Web Development",
      icon: Code,
      gradient: "bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 animate-gradient-x bg-[length:200%_200%]",
      description: "Custom websites, web apps, and e-commerce solutions built with modern technologies.",
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript']
    },
    {
      title: "Mobile Apps",
      icon: Smartphone,
      gradient: "bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 animate-gradient-x bg-[length:200%_200%]",
      description: "Native & cross-platform mobile applications for iOS and Android.",
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      gradient: "bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 animate-gradient-x bg-[length:200%_200%]",
      description: "User-centered design that creates intuitive and engaging experiences.",
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping']
    },
    {
      title: "Cloud Solutions",
      icon: Cloud,
      gradient: "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient-x bg-[length:200%_200%]",
      description: "Scalable cloud infrastructure and deployment solutions.",
      technologies: ['AWS', 'Azure', 'GCP', 'Docker']
    },
    {
      title: "Data Solutions",
      icon: Database,
      gradient: "bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 animate-gradient-x bg-[length:200%_200%]",
      description: "Advanced data analytics, processing, and visualization solutions.",
      technologies: ['Python', 'SQL', 'MongoDB', 'Analytics']
    },
    {
      title: "Analytics & Insights",
      icon: BarChart3,
      gradient: "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient-x bg-[length:200%_200%]",
      description: "Business intelligence and data-driven insights for better decision making.",
      technologies: ['Tableau', 'Power BI', 'D3.js', 'Charts']
    },
    {
      title: "Payment Orchestration",
      icon: CreditCard,
      gradient: "bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 animate-gradient-x bg-[length:200%_200%]",
      description: "Seamless payment processing and gateway integration solutions.",
      technologies: ['Stripe', 'PayPal', 'Razorpay', 'APIs']
    },
    {
      title: "R&D Prototyping",
      icon: Lightbulb,
      gradient: "bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 animate-gradient-x bg-[length:200%_200%]",
      description: "Rapid prototyping and research & development for innovative solutions.",
      technologies: ['MVP', 'Prototyping', 'Innovation', 'Testing']
    },
    {
      title: "Consultancy & Strategy",
      icon: Users,
      gradient: "bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 animate-gradient-x bg-[length:200%_200%]",
      description: "Strategic technology consulting and business transformation guidance.",
      technologies: ['Strategy', 'Planning', 'Architecture', 'Consulting']
    },
    {
      title: "Digital Marketing",
      icon: Megaphone,
      gradient: "bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 animate-gradient-x bg-[length:200%_200%]",
      description: "Comprehensive digital marketing strategies to boost your online presence and growth.",
      technologies: ['SEO', 'SEM', 'Social', 'Content']
    }
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="text-xs text-blue-400 uppercase tracking-wider mb-4">
            <span className="font-bold italic">OUR</span>{" "}
            <span className="font-medium italic">SERVICES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Comprehensive Tech Solutions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            From concept to deployment, we provide end-to-end technology solutions that drive business growth and innovation.
          </p>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="block md:hidden">
          <div className="space-y-6">
            {services.map((service, index) => (
              <StackedServiceCard
                key={service.title}
                title={service.title}
                icon={service.icon}
                gradient={service.gradient}
                description={service.description}
                technologies={service.technologies}
                index={index}
                totalCards={services.length}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Web Development - Large Card with Content */}
          <div className="bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 rounded-3xl p-6 lg:p-8 relative overflow-hidden lg:col-span-2 animate-gradient-x bg-[length:200%_200%]">
            <div className="relative z-10">
              <div className="text-white mb-4">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-white font-bold text-4xl lg:text-5xl leading-tight mb-4">
                Web Development
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Custom websites, web apps, and e-commerce solutions built with modern technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech, i) => (
                  <span key={i} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4">
                <Code className="w-16 h-16 opacity-30" />
              </div>
            </div>
          </div>
          
          {/* Analytics Card */}
          <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-6 lg:p-8 relative overflow-hidden animate-gradient-x bg-[length:200%_200%]">
            <div className="relative z-10">
              <div className="text-white mb-4">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight mb-6">
                Analytics & <br />Insights
              </h3>
              
              {/* Chart Visualization */}
              <div className="flex items-end justify-between h-24 gap-2">
                {[40, 60, 35, 80, 45, 70, 90, 55, 75, 85, 65, 95].map((height, i) => (
                  <div
                    key={i}
                    className="bg-cyan-400 rounded-t flex-1 transition-all duration-300 hover:bg-cyan-300"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Apps with Content */}
          <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-6 lg:p-8 relative overflow-hidden animate-gradient-x bg-[length:200%_200%]">
            <div className="relative z-10">
              <div className="text-white mb-4">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight mb-4">
                Mobile Apps
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Native & cross-platform mobile applications for iOS and Android.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold">iOS</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold">AND</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4">
                <Smartphone className="w-16 h-16 opacity-30" />
              </div>
            </div>
          </div>
          
          {/* UI/UX Design - White Card with Content */}
          <div className="bg-gradient-to-br from-gray-100 to-white rounded-3xl p-6 lg:p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-purple-600 mb-4">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-gray-900 font-bold text-2xl lg:text-3xl leading-tight mb-4">
                UI/UX Design
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                User-centered design that creates intuitive and engaging experiences.
              </p>
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
              </div>
            </div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4">
                <Palette className="w-16 h-16 opacity-30 text-purple-600" />
              </div>
            </div>
          </div>
          
          {/* Cloud Solutions with Content */}
          <div className="bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-3xl p-6 lg:p-8 relative overflow-hidden animate-gradient-x bg-[length:200%_200%]">
            <div className="relative z-10">
              <div className="text-white mb-4">
                <Cloud className="w-8 h-8" />
              </div>
              <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight mb-4">
                Cloud Solutions
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Scalable cloud infrastructure and deployment solutions.
              </p>
              <div className="flex flex-wrap gap-1">
                {['AWS', 'Azure', 'GCP'].map((cloud, i) => (
                  <span key={i} className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                    {cloud}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4">
                <Cloud className="w-16 h-16 opacity-30" />
              </div>
            </div>
          </div>
          
          {/* Data Solutions - Large Card with Stats */}
          <div className="bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 rounded-3xl p-6 lg:p-8 relative overflow-hidden lg:col-span-2 animate-gradient-x bg-[length:200%_200%]">
            <div className="relative z-10">
              <div className="text-white mb-4">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-white font-bold text-4xl lg:text-5xl leading-tight mb-6">
                Data Solutions
              </h3>
              
              {/* Data Visualization */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-xs text-white/70 mb-2 flex items-center justify-between">
                  <span>Top Services</span>
                  <span>Usage</span>
                </div>
                
                <div className="space-y-3">
                  {[
                    { name: "Web Development", value: 85, color: "bg-cyan-400" },
                    { name: "Mobile Apps", value: 70, color: "bg-blue-400" },
                    { name: "Cloud Solutions", value: 60, color: "bg-purple-400" },
                    { name: "AI Integration", value: 45, color: "bg-pink-400" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-white text-sm">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-white/20 rounded-full h-2">
                          <div 
                            className={`${item.color} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                        <span className="text-white/70 text-sm w-8">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment Orchestration */}
          <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl p-6 lg:p-8 relative overflow-hidden animate-gradient-x bg-[length:200%_200%]">
            <div className="relative z-10">
              <div className="text-white mb-4">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight mb-4">
                Payment Orchestration
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Seamless payment processing and gateway integration solutions.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-4 bg-white/20 rounded"></div>
                <div className="w-6 h-4 bg-white/20 rounded"></div>
                <div className="w-6 h-4 bg-white/20 rounded"></div>
              </div>
            </div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4">
                <CreditCard className="w-16 h-16 opacity-30" />
              </div>
            </div>
          </div>
          
          {/* R&D Prototyping */}
          <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-6 lg:p-8 relative overflow-hidden animate-gradient-x bg-[length:200%_200%]">
            <div className="relative z-10">
              <div className="text-white mb-4">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight mb-4">
                R&D Prototyping
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Rapid prototyping and research & development for innovative solutions.
              </p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4">
                <Lightbulb className="w-16 h-16 opacity-30" />
              </div>
            </div>
          </div>
          
          {/* Consultancy and Strategy */}
          <div className="bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 rounded-3xl p-6 lg:p-8 relative overflow-hidden animate-gradient-x bg-[length:200%_200%]">
            <div className="relative z-10">
              <div className="text-white mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight mb-4">
                Consultancy & Strategy
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Strategic technology consulting and business transformation guidance.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-white/30 rounded-full">
                  <div className="w-6 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4">
                <Users className="w-16 h-16 opacity-30" />
              </div>
            </div>
          </div>
          
          {/* Digital Marketing */}
          <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-6 lg:p-8 relative overflow-hidden animate-gradient-x bg-[length:200%_200%]">
            <div className="relative z-10">
              <div className="text-white mb-4">
                <Megaphone className="w-8 h-8" />
              </div>
              <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight mb-4">
                Digital Marketing
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Comprehensive digital marketing strategies to boost your online presence and growth.
              </p>
              <div className="flex flex-wrap gap-1">
                {['SEO', 'SEM', 'Social', 'Content'].map((service, i) => (
                  <span key={i} className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4">
                <Megaphone className="w-16 h-16 opacity-30" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
