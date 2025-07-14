import React from 'react';
import SEO from '../components/SEO';

const blogPosts = [
  {
    title: 'The Future of Web Development',
    description: 'In this post, we explore the latest trends in web development, including the rise of serverless, the growing importance of performance, and the future of JavaScript frameworks.',
    author: 'John Doe',
    date: 'October 26, 2023',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
  {
    title: 'A Deep Dive into Our Tech Stack',
    description: 'We take a look at the technologies we use to build our applications, including React, Node.js, and PostgreSQL. We also discuss why we chose these technologies and how they help us deliver high-quality products.',
    author: 'Jane Smith',
    date: 'October 19, 2023',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'The Importance of UI/UX Design',
    description: 'In this post, we discuss the importance of UI/UX design in creating a successful product. We also share some of our best practices for designing beautiful and intuitive user interfaces.',
    author: 'Sam Wilson',
    date: 'October 12, 2023',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

const BlogPage = () => {
  return (
    <>
      <SEO
        title="Our Blog | Syntellite"
        description="Stay up-to-date with the latest news and trends in technology, web development, and UI/UX design from the experts at Syntellite."
        name="Syntellite"
        type="website"
      />
      <div className="bg-[--main-dark-bg] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold">Our Blog</h1>
            <p className="text-lg sm:text-xl text-gray-400 mt-4">
              Stay up-to-date with the latest news and trends in technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-[--card-dark-bg] rounded-xl overflow-hidden group border border-gray-800 hover:border-sky-400/50 transition-colors">
                <img src={post.image} alt={`Featured image for the blog post titled "${post.title}"`} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span className="mx-2">&bull;</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
