import React from 'react';
import { motion } from 'framer-motion';
import hirehubImg from '../assets/hirehub.png';
import calcomImg from '../assets/calcom.png';
import drivenowImg from '../assets/drivenow.png';

const projects = [
  {
    title: 'HireHuB',
    subtitle: 'Full-Stack Job Portal',
    date: 'April 2026',
    description: 'A comprehensive job portal supporting role-based access for admins and job seekers. Features a full CRUD admin dashboard managing 100+ applications.',
    image: hirehubImg,
    live: 'https://hire-hub-iota-ashen.vercel.app/login',
    tags: ['React', 'Node.js', 'JWT', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Cal.com Clone',
    subtitle: 'Scheduling Platform',
    date: 'March 2026',
    description: 'A scheduling platform enabling users to manage availability across a 7-day calendar. Implements a conflict-free booking system with optimized MySQL backend.',
    image: calcomImg,
    live: 'https://cal-com-zeta.vercel.app/login',
    tags: ['React', 'MySQL', 'Node.js', 'Prisma', 'Tailwind CSS'],
  },
  {
    title: 'Drive Now',
    subtitle: 'Car Rental Platform',
    date: 'Feb 2026',
    description: 'Real-time car rental platform with secure authentication and availability tracking. REST APIs improved booking workflow performance by ~30%.',
    image: drivenowImg,
    live: 'https://drive-now-virid.vercel.app/',
    tags: ['React', 'Express', 'MongoDB', 'REST API', 'Auth'],
  },
];

const Work = () => {
  return (
    <div name="work" className="w-full min-h-screen text-gray-300 bg-[#0a192f] py-24">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500"
          >
            Work
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="py-6 text-xl"
          >
            Check out some of my recent projects
          </motion.p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl bg-[#112240] shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0a192f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-cyan-500 text-[#0a192f] font-bold rounded-lg hover:bg-cyan-400 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-400">{project.date}</span>
                </div>
                <p className="text-cyan-500 text-sm font-medium mb-3">{project.subtitle}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] px-2 py-1 bg-[#1d3557] text-cyan-300 rounded-full border border-cyan-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;