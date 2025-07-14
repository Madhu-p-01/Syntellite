import React from 'react';
import SEO from '../components/SEO';

const jobOpenings = [
  {
    title: 'Senior Frontend Engineer',
    location: 'Remote',
    description: 'We are looking for a seasoned frontend engineer with a passion for building beautiful and performant user interfaces. Experience with React and TypeScript is a must.',
  },
  {
    title: 'Backend Engineer',
    location: 'New York, NY',
    description: 'Join our backend team to build and maintain the services that power our applications. Experience with Node.js, Go, or Python is a plus.',
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote',
    description: 'We are looking for a DevOps engineer to help us build and maintain our cloud infrastructure. Experience with AWS, Kubernetes, and Terraform is required.',
  },
];

const CareersPage = () => {
  return (
    <>
      <SEO
        title="Careers | Syntellite"
        description="Join our team and help us build the future of software. Explore our open positions for frontend, backend, and DevOps engineers."
        name="Syntellite"
        type="website"
      />
      <div className="bg-[--main-dark-bg] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold">Careers</h1>
            <p className="text-lg sm:text-xl text-gray-400 mt-4">
              Join our team and help us build the future of software.
            </p>
          </div>
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-[--card-dark-bg] p-8 rounded-xl border border-gray-800 hover:border-sky-400/50 transition-colors">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold">{job.title}</h3>
                  <span className="text-gray-400">{job.location}</span>
                </div>
                <p className="text-gray-400 mb-6">{job.description}</p>
                <a href="#" className="text-sky-400 font-semibold hover:underline">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;
