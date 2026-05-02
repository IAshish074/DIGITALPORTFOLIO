import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaPython, FaDocker, FaCode, FaBrain, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiCplusplus, SiPostman, SiRedux, SiTypescript } from 'react-icons/si';

const Skill = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
    { name: 'Node.js, Express, REST APIs', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" /> },
    { name: 'Postman, Docker', icon: <FaDocker className="text-blue-500" /> },
    { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
    { name: 'OOP', icon: <FaCode className="text-purple-400" /> },
    { name: 'DSA', icon: <FaBrain className="text-pink-400" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  ];


  return (
    <div name="skills" className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-24">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-cyan-500"
          >
            Skills
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="py-4"
          >
            These are the technologies I work with
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="shadow-md shadow-[#040c16] hover:shadow-cyan-500/20 bg-[#112240] pt-4 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="text-5xl flex justify-center mb-4">
                {skill.icon}
              </div>
              <p className="my-4 font-bold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;