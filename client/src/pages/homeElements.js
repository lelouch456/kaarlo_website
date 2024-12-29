import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { MapPin, Phone, Mail, Linkedin, Facebook,Twitter, Calendar, ChevronRight, ArrowRight } from 'lucide-react'; 
import placeholderImage from './placeholder.jpg';
import { link } from 'framer-motion/client';
import { useNavigate } from 'react-router-dom';
import { FileText , ArrowRight, CheckCircle } from 'lucide-react';
import { Users, Award,Target,Briefcase, Star, Building } from 'lucide-react';
{/* Hero Section with gradient background and modern design */}


const HeroSection = () => {
  return (
    <div className=" flex flex-col">
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
const WhatWeDo = () => {
  const services = [
    {
      title: 'Permanent Staffing',
      description: 'Find your perfect long-term team members with our proven recruitment process that ensures the right cultural and skill fit.',
      icon: <Users className="w-8 h-8" />,
      benefits: ['Comprehensive screening', 'Culture fit assessment', 'Long-term retention']
    },
    {
      title: 'Contract Hiring',
      description: 'Flexible staffing solutions for your project-based requirements with quick deployment and scalable team structures.',
      icon: <FileText className="w-8 h-8" />,
      benefits: ['Rapid deployment', 'Flexible terms', 'Skilled professionals']
    },
    {
      title: 'Executive Search',
      description: 'Premium recruitment service for senior leadership positions, focusing on industry leaders who can drive your organization forward.',
      icon: <Target className="w-8 h-8" />,
      benefits: ['Confidential search', 'Industry expertise', 'Leadership focus']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive staffing solutions tailored to your unique business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-red-200 transition-all duration-300">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 200
                  }}
                  className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-100 transition-colors duration-300"
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="pt-4 border-t border-gray-100">
                  <motion.a
                    href="#"
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center text-red-600 font-semibold group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const statistics = [
  {
    number: "15k+",
    label: "Happy Clients",
    icon: <Users className="w-6 h-6" />
  },
  {
    number: "98%",
    label: "Success Rate",
    icon: <Star className="w-6 h-6" />
  },
  {
    number: "2+",
    label: "Years Experience",
    icon: <Award className="w-6 h-6" />
  },
  {
    number: "500+",
    label: "Companies Served",
    icon: <Building className="w-6 h-6" />
  }
];
const reasons = [
    {
      icon: <Award />,
      title: "Excellence Guaranteed",
      description: "Delivering top-tier staffing solutions with proven results"
    },
    {
      icon: <Users />,
      title: "Expert Team",
      description: "Skilled professionals dedicated to your success"
    },
    {
      icon: <Target />,
      title: "Precise Matching",
      description: "Strategic talent placement for optimal outcomes"
    },
    {
      icon: <Briefcase />,
      title: "Industry Leaders",
      description: "Setting the standard in staffing excellence"
    }
  ];

const StatsAndReasons = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600" />
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-4 py-20"
      >
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Content */}
              <div className="relative p-8 rounded-xl backdrop-blur-sm border border-red-400/30 hover:border-white/30 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-6 mx-auto"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    {stat.icon}
                  </div>
                </motion.div>

                {/* Number */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <h3 className="text-5xl font-bold text-white mb-2 tracking-tight">
                    {stat.number}
                  </h3>
                  <div className="w-12 h-1 bg-white/30 mx-auto mb-3" />
                  <p className="text-red-100 font-medium text-lg">
                    {stat.label}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
const FeaturesSection = () => {
  const reasons = [
    {
      icon: <Award />,
      title: "Excellence Guaranteed",
      description: "Delivering top-tier staffing solutions with proven results"
    },
    {
      icon: <Users />,
      title: "Expert Team",
      description: "Skilled professionals dedicated to your success"
    },
    {
      icon: <Target />,
      title: "Precise Matching",
      description: "Strategic talent placement for optimal outcomes"
    },
    {
      icon: <Briefcase />,
      title: "Industry Leaders",
      description: "Setting the standard in staffing excellence"
    }
  ];

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, red 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Empowering businesses with exceptional staffing solutions that drive growth and success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-gray-800/20 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-gray-700 hover:border-red-500 transition-colors duration-300">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      duration: 0.3
                    }}
                    className="mb-6 p-4 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg"
                  >
                    <div className="w-8 h-8">
                      {reason.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-center">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

{/* Recent Works & Life at Kaarlo with modern design */} 

const testimonials = [
  {
    name: 'Cheran R, Candidate',
    feedback: `I am lucky to have seen this company. They have set up a company to suit me. So I really liked their interview approach. They conducted the interview as if it were suitable for a fresher. Thanks to Kaarlo.`,
  },
  {
    name: 'Priya Mohan, Candidate',
    feedback: `It's a great place for job placement. I have joined as Digital Marketing Executive in a reputed company. I had a great experience with Kaarlo. Good service 👏`,
  },
  {
    name: 'Hemamalini, Intern',
    feedback: `Hello, I'm Hemamalini from M.A.M. Business School. I'm pursuing my MBA Final year. I attended an Internship at Kaarlo, I got a new experience. I have learnt so many new things here, like recruiting and screening. I spoke with lots of people, made new friends, and had a great experience. Thanks for the opportunity.`,
  },
];

const lifeAtKaarloImages = [1, 2, 3, 4];

const StoriesAndLife = () => {
  return (
    <div className="space-y-16 py-12 bg-gradient-to-b from-gray-50 to-gray-200">
    {/* Testimonials */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
        What People Say About Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            }}
            className="relative p-8 bg-gradient-to-br from-red-50 to-gray-50 rounded-lg shadow-md transition-all duration-300 border border-gray-200 hover:shadow-xl"
          >
            <div className="absolute top-0 left-0 w-20 h-20 bg-red-500/10 rounded-full blur-lg -translate-y-1/2 -translate-x-1/2"></div>
            <p className="text-gray-700 italic mb-6">"{testimonial.feedback}"</p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                {testimonial.name[0]}
              </div>
              <span className="text-gray-800 font-semibold">{testimonial.name}</span>
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
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Life at Kaarlo</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {lifeAtKaarloImages.map((img, index) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square bg-gradient-to-br from-red-50 to-red-100 rounded-xl overflow-hidden cursor-pointer relative group"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-medium">Life at Kaarlo - Image {index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};



//Recruitment soutions Buttons to zoho

const Section = ({ title, description, buttons, delay, onClickHandlers }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 45 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  };

  const shimmerEffect = {
    hidden: { backgroundPosition: "200% 0" },
    visible: { 
      backgroundPosition: "-200% 0",
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-lg shadow-lg 
                  hover:shadow-xl transition-all duration-300 relative overflow-hidden
                  ${isHovered ? 'translate-y-[-5px]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <motion.div
        variants={shimmerEffect}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100/10 to-transparent"
        style={{ backgroundSize: "200% 100%" }}
      />

      <motion.div className="relative z-10">
        <motion.h2 
          variants={contentVariants}
          className="text-2xl font-bold text-red-600 mb-3"
          animate={{
            scale: isHovered ? 1.05 : 1,
            color: isHovered ? '#DC2626' : '#EF4444',
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h2>

        <motion.p 
          variants={contentVariants}
          className="text-gray-700 mb-4"
        >
          {description}
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-3"
          variants={buttonContainerVariants}
        >
          {buttons.map((button, index) => (
            <motion.button
              key={index}
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(220, 38, 38, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onClickHandlers[index]}
              className={`bg-red-600 text-white px-4 py-2 rounded-md relative
                        overflow-hidden transition-colors duration-300
                        hover:bg-red-700 focus:outline-none focus:ring-2 
                        focus:ring-red-500 focus:ring-opacity-50`}
            >
              <motion.span
                initial={{ y: 0 }}
                animate={isHovered ? { y: [-1, 1] } : { y: 0 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="block"
              >
                {button}
              </motion.span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const RecruitmentSections = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <Section
          title="Recruitment Solutions"
          description="Thousands of jobs across India. Hundreds of clients across India."
          buttons={['Job Seekers', 'Employers', 'Vendors']}
          delay={0.1}
          onClickHandlers={[
            () => window.open('https://thirdparty-jobseekers.com', '_blank'),
            () => window.open('https://thirdparty-employers.com', '_blank'),
            () => window.open('https://thirdparty-vendors.com', '_blank'),
          ]}
        />
        
        <Section
          title="Training Solutions"
          description="Expert in Corporate Training, Campus Training, HR Training"
          buttons={['For Companies', 'Institutions', 'Courses']}
          delay={0.2}
          onClickHandlers={[
            () => navigate('/training/companies'),
            () => navigate('/training/institutions'),
            () => navigate('/training/courses'),
          ]}
        />
        
        <Section
          title="Internship"
          description="Join as a student and leave as an employee"
          buttons={['Inquire Now']}
          delay={0.3}
          onClickHandlers={[
            () => navigate('/internship/inquire'),
          ]}
        />
        
        <Section
          title="Organizational Development Solutions"
          description="Engage your employees and increase your profits"
          buttons={['Inquire Now']}
          delay={0.4}
          onClickHandlers={[
            () => navigate('/od-solutions/inquire'),
          ]}
        />
      </motion.div>
    </div>
  );
};




const components = {
  StoriesAndLife,
  StatsAndReasons,
  FeaturesSection,
  WhatWeDo,
  HeroSection,
  RecruitmentSections,
};

export default components;

