import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://digitalportfolioserver.onrender.com';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error connecting to server.');
    }
  };

  return (
    <div name="contact" className="w-full min-h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4 py-24">
      <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-12">
        
        {/* Left Side: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">Contact</p>
            <p className="text-gray-300 py-4 font-medium">Get in touch with me</p>
          </div>
          
          <div className="text-gray-300 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#112240] flex items-center justify-center text-cyan-500 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">amishrahsm@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#112240] flex items-center justify-center text-cyan-500 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-semibold">India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-12">
            {[
              { icon: <FaLinkedin size={24} />, link: 'https://www.linkedin.com/in/ashish-kumar-mishra-6089b8230/' },
              { icon: <FaGithub size={24} />, link: 'https://github.com/IAshish074' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#06b6d4' }}
                className="w-12 h-12 bg-[#112240] rounded-xl flex items-center justify-center text-gray-300 border border-gray-700 hover:border-cyan-500 transition-all shadow-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.form 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="flex flex-col w-full bg-[#112240] p-8 rounded-2xl shadow-2xl border border-gray-800"
        >
          <div className="mb-6">
            <label className="text-gray-300 text-sm font-bold mb-2 block">Name</label>
            <input 
              className="w-full bg-[#0a192f] border border-gray-700 rounded-lg p-3 text-gray-300 focus:outline-none focus:border-cyan-500 transition-colors" 
              type="text" 
              placeholder="Your Name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-6">
            <label className="text-gray-300 text-sm font-bold mb-2 block">Email</label>
            <input 
              className="w-full bg-[#0a192f] border border-gray-700 rounded-lg p-3 text-gray-300 focus:outline-none focus:border-cyan-500 transition-colors" 
              type="email" 
              placeholder="Your Email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-6">
            <label className="text-gray-300 text-sm font-bold mb-2 block">Message</label>
            <textarea 
              className="w-full bg-[#0a192f] border border-gray-700 rounded-lg p-3 text-gray-300 focus:outline-none focus:border-cyan-500 transition-colors" 
              name="message" 
              rows="6" 
              placeholder="Your Message" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-cyan-500 text-[#0a192f] font-bold py-3 rounded-lg hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
          >
            Send Message
          </motion.button>
          {status && <p className="text-cyan-400 mt-4 text-center font-medium">{status}</p>}
        </motion.form>
      </div>

      {/* Subscription Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-[1000px] w-full mt-24 p-8 bg-[#112240] rounded-2xl border border-gray-800 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-100 mb-4">Subscribe to My Newsletter</h3>
        <p className="text-gray-400 mb-6">Stay updated with my latest projects and tech insights.</p>
        <form 
          onSubmit={async (e) => {
            e.preventDefault();
            const email = e.target.subEmail.value;
            try {
              const apiUrl = import.meta.env.VITE_API_URL || 'https://digitalportfolioserver.onrender.com';
              const res = await fetch(`${apiUrl}/api/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
              });
              if (res.ok) alert('Subscribed!');
            } catch (err) { alert('Error!'); }
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input 
            name="subEmail"
            className="bg-[#0a192f] border border-gray-700 rounded-lg p-3 text-gray-300 focus:outline-none focus:border-cyan-500 min-w-[300px]" 
            type="email" 
            placeholder="Enter your email" 
            required 
          />
          <button className="bg-cyan-500 text-[#0a192f] font-bold px-8 py-3 rounded-lg hover:bg-cyan-400 transition-colors">
            Subscribe
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;