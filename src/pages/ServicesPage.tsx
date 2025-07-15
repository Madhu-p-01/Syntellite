import React from 'react';
import SEO from '../components/SEO';
import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  BarChart3,
  Layers,
} from 'lucide-react';

const services = [
  {
    icon: <Code className="w-10 h-10 text-sky-400" />,
    title: 'Custom Software Development',
    description: 'We build custom software solutions from scratch, tailored to your specific business needs. Our team of expert engineers will work with you to design, develop, and deploy a product that is scalable, reliable, and secure.',
  },
  {
    icon: <Smartphone className="w-10 h-10 text-sky-400" />,
    title: 'Mobile App Development',
    description: 'We create beautiful and intuitive mobile applications for both iOS and Android. Our mobile development team is experienced in building native and cross-platform apps that deliver a seamless user experience.',
  },
  {
    icon: <Cloud className="w-10 h-10 text-sky-400" />,
    title: 'Cloud Solutions',
    description: 'We help you leverage the power of the cloud to scale your business. Our cloud experts can help you with everything from cloud migration and infrastructure setup to serverless architecture and cost optimization.',
  },
  {
    icon: <Shield className="w-10 h-10 text-sky-400" />,
    title: 'Cybersecurity',
    description: 'We provide comprehensive cybersecurity services to protect your digital assets from threats. Our security experts can help you with penetration testing, vulnerability assessments, and implementing security best practices.',
  },
  {
    icon: <Zap className="w-10 h-10 text-sky-400" />,
    title: 'AI & Machine Learning',
    description: 'We help you harness the power of AI and machine learning to build intelligent applications. Our team of data scientists and engineers can help you with everything from natural language processing to computer vision.',
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-sky-400" />,
    title: 'Data Analytics',
    description: 'We help you make data-driven decisions by providing advanced data analytics services. Our team can help you with data warehousing, data visualization, and building custom dashboards.',
  },
  {
    icon: <Layers className="w-10 h-10 text-sky-400" />,
    title: 'UI/UX Design',
    description: 'We design beautiful and intuitive user interfaces that provide a great user experience. Our UI/UX designers will work with you to create a design that is both aesthetically pleasing and easy to use.',
  },
];

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Our Services | Syntellite"
        description="Explore the wide range of services offered by Syntellite, including custom software development, mobile app development, cloud solutions, cybersecurity, and more."
        name="Syntellite"
        type="website"
        canonical="https://syntellite.com/services"
      />
      <div className="bg-[--main-dark-bg] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold">Our Services</h1>
            <p className="text-lg sm:text-xl text-gray-400 mt-4">
              We offer a wide range of services to help you build and scale your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[--card-dark-bg] p-8 rounded-xl border border-gray-800 hover:border-sky-400/50 transition-colors">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-800 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
