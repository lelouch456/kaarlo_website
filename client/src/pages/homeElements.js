import React from 'react'; 
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Facebook,Twitter, Calendar, ChevronRight, ArrowRight } from 'lucide-react'; 
import placeholderImage from './placeholder.jpg';


{/* Hero Section with gradient background and modern design */}


const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-700 py-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          style={{ backgroundImage: `url(${placeholderImage})` }}
          className="absolute inset-0  mix-blend-overlay"
        />
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
            >
              Your Trusted
              <motion.span
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block text-red-200"
              >
                Staffing Partner
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-red-100 mb-12 max-w-2xl mx-auto"
            >
              Connecting exceptional talent with visionary businesses for tomorrow's success
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="bg-white text-red-600 px-8 py-4 rounded-full hover:bg-red-50 shadow-lg font-semibold transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};


{/* Services Section with cards */}

const services = [
  {
    title: 'Permanent Staffing',
    description: 'Find your perfect long-term team members with our proven recruitment process.',
    icon: '👥',
  },
  {
    title: 'Contract Hiring',
    description: 'Flexible staffing solutions for your project-based requirements.',
    icon: '📋',
  },
  {
    title: 'Executive Search',
    description: 'Premium recruitment service for senior leadership positions.',
    icon: '🎯',
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-red-600 text-4xl font-bold text-center mb-4">What We Do</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Comprehensive staffing solutions tailored to your unique business needs
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 200
                }}
                className="text-5xl mb-6 inline-block"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-red-600">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href="#"
                className="text-red-600 font-medium flex items-center group relative inline-block"
              >
                <span className="relative z-10">Learn More</span>
                <motion.span
                  className="ml-2 transform transition-transform duration-300 inline-block"
                  whileHover={{ x: 10 }}
                >
                  →
                </motion.span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const statistics = [
  { number: '500+', label: 'Successful Placements' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Industry Partners' },
  { number: '10+', label: 'Years Experience' },
];

const reasons = [
  { title: 'Industry Expertise', icon: '🎓' },
  { title: 'Quick Turnaround', icon: '⚡' },
  { title: 'Quality Candidates', icon: '🌟' },
  { title: 'Ongoing Support', icon: '🤝' },
];

const StatsAndReasons = () => {
  return (
    <>
      <section className="py-16 bg-red-600 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 relative"
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-5xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-red-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-red-600"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                className="text-center p-8 rounded-xl hover:bg-red-50 transition-colors duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    duration: 0.3
                  }}
                  className="text-5xl mb-6 inline-block"
                >
                  {reason.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  Delivering excellence in staffing solutions.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


{/* Recent Works & Life at Kaarlo with modern design */} 

const successStories = [
  {
    title: 'Project 1',
    description: 'Successful placement case study.',
    tags: ['Technology', 'Senior Role']
  },
  {
    title: 'Project 2',
    description: 'Successful placement case study.',
    tags: ['Finance', 'Executive']
  },
  {
    title: 'Project 3',
    description: 'Successful placement case study.',
    tags: ['Healthcare', 'Leadership']
  }
];

const lifeAtKaarloImages = [1, 2, 3, 4];

const StoriesAndLife = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Recent Success Stories */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-red-600">Recent Success Stories</h2>
            <div className="space-y-6">
              {successStories.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1 bg-red-50 text-red-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Life at Kaarlo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-red-600">Life at Kaarlo</h2>
            <div className="grid grid-cols-2 gap-6">
              {lifeAtKaarloImages.map((img, index) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-xl overflow-hidden cursor-pointer relative group"
                >
                  <img 
                    src="/api/placeholder/400/400"
                    alt="Life at Kaarlo"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm font-medium">
                      Life at Kaarlo - Image {index + 1}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const components = {
  StoriesAndLife,
  StatsAndReasons,
  WhatWeDo,
  HeroSection,
};

export default components;

