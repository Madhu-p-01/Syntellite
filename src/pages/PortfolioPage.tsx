import React from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a custom CMS, payment gateway integration, and advanced analytics.',
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure and user-friendly mobile banking application for iOS and Android, with a focus on performance and user experience.',
    image: 'https://images.unsplash.com/photo-1601597111158-2f9e2d48d8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    tags: ['Flutter', 'Firebase', 'Kotlin', 'Swift'],
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'An intelligent chatbot for customer support, using natural language processing to understand and respond to user queries.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    tags: ['Python', 'TensorFlow', 'Dialogflow', 'React'],
  },
  {
    title: 'Cloud Data Warehouse',
    description: 'A scalable data warehouse solution for a large enterprise, built on Google Cloud Platform with a custom data pipeline.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    tags: ['GCP', 'BigQuery', 'Airflow', 'Python'],
  },
];

const PortfolioPage = () => {
  return (
    <div className="bg-[--main-dark-bg] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold">Our Portfolio</h1>
          <p className="text-lg sm:text-xl text-gray-400 mt-4">
            A selection of our finest work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[--card-dark-bg] rounded-xl overflow-hidden group border border-gray-800 hover:border-sky-400/50 transition-colors">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
