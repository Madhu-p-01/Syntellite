import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const techCategories = [
  {
    category: 'Frontend',
    color: 'from-[#FF81D1] to-[#EC4899]',
    technologies: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'Vue.js', level: 90, icon: '💚' },
      { name: 'Angular', level: 85, icon: '🅰️' },
      { name: 'TypeScript', level: 92, icon: '📘' },
      { name: 'Tailwind CSS', level: 98, icon: '🎨' },
      { name: 'Next.js', level: 94, icon: '▲' },
    ]
  },
  {
    category: 'Backend',
    color: 'from-[#A42EFF] to-[#8B5CF6]',
    technologies: [
      { name: 'Node.js', level: 96, icon: '🟢' },
      { name: 'Python', level: 93, icon: '🐍' },
      { name: 'Java', level: 88, icon: '☕' },
      { name: '.NET', level: 85, icon: '🔷' },
      { name: 'PHP', level: 82, icon: '🐘' },
      { name: 'Go', level: 80, icon: '🔵' },
    ]
  },
  {
    category: 'Mobile',
    color: 'from-[#2E39FF] to-[#3B82F6]',
    technologies: [
      { name: 'React Native', level: 94, icon: '📱' },
      { name: 'Flutter', level: 90, icon: '🦋' },
      { name: 'Swift', level: 87, icon: '🍎' },
      { name: 'Kotlin', level: 85, icon: '🤖' },
      { name: 'Ionic', level: 80, icon: '⚡' },
      { name: 'Xamarin', level: 78, icon: '🔧' },
    ]
  },
  {
    category: 'AI/ML',
    color: 'from-[#4F46E5] to-[#7C3AED]',
    technologies: [
      { name: 'TensorFlow', level: 88, icon: '🧠' },
      { name: 'PyTorch', level: 85, icon: '🔥' },
      { name: 'OpenAI', level: 92, icon: '🤖' },
      { name: 'Computer Vision', level: 86, icon: '👁️' },
      { name: 'NLP', level: 84, icon: '💬' },
      { name: 'MLOps', level: 82, icon: '⚙️' },
    ]
  },
  {
    category: 'Database',
    color: 'from-[#059669] to-[#10B981]',
    technologies: [
      { name: 'MongoDB', level: 93, icon: '🍃' },
      { name: 'PostgreSQL', level: 91, icon: '🐘' },
      { name: 'MySQL', level: 89, icon: '🐬' },
      { name: 'Redis', level: 87, icon: '🔴' },
      { name: 'Firebase', level: 85, icon: '🔥' },
      { name: 'Elasticsearch', level: 83, icon: '🔍' },
    ]
  },
  {
    category: 'Cloud & DevOps',
    color: 'from-[#DC2626] to-[#EF4444]',
    technologies: [
      { name: 'AWS', level: 94, icon: '☁️' },
      { name: 'Azure', level: 88, icon: '🔷' },
      { name: 'Google Cloud', level: 86, icon: '🌤️' },
      { name: 'Docker', level: 92, icon: '🐳' },
      { name: 'Kubernetes', level: 85, icon: '⚓' },
      { name: 'CI/CD', level: 90, icon: '🔄' },
    ]
  },
];

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ background: '#FF81D1' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" style={{ background: '#A42EFF' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" style={{ background: '#2E39FF' }}></div>
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
            <span className="font-bold italic">TECHNOLOGY</span>{" "}
            <span className="font-medium italic">EXPERTISE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            Cutting-Edge Technologies
            <br />
            <span className="bg-gradient-to-r from-[#FF81D1] via-[#A42EFF] to-[#2E39FF] bg-clip-text text-transparent">
              We Master
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            From frontend frameworks to AI/ML solutions, we leverage the latest technologies 
            to build scalable, efficient, and future-ready applications.
          </motion.p>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-950 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </h3>
                <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full`}></div>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                    className="relative"
                    onMouseEnter={() => setHoveredTech(`${category.category}-${tech.name}`)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-medium text-white">{tech.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{tech.level}%</span>
                    </div>
                    
                    {/* Skill Level Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={
                          isInView && hoveredTech === `${category.category}-${tech.name}`
                            ? { width: `${tech.level}%` }
                            : isInView
                            ? { width: `${tech.level * 0.7}%` }
                            : { width: 0 }
                        }
                        transition={{ duration: 1, ease: "easeOut", delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[#FF81D1] to-[#EC4899] bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[#A42EFF] to-[#8B5CF6] bg-clip-text text-transparent">
              100+
            </div>
            <div className="text-gray-400 text-sm">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[#2E39FF] to-[#3B82F6] bg-clip-text text-transparent">
              5+
            </div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-gray-400 text-sm">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
