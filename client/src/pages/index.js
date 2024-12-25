import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter, Calendar, ChevronRight, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with gradient background and modern design */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 py-32">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] mix-blend-overlay opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Your Trusted
              <span className="block text-blue-200">Staffing Partner</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Connecting exceptional talent with visionary businesses for tomorrow's success
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Services Section with cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">What We Do</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Comprehensive staffing solutions tailored to your unique business needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Permanent Staffing',
                description: 'Find your perfect long-term team members with our proven recruitment process.',
                icon: '👥'
              },
              {
                title: 'Contract Hiring',
                description: 'Flexible staffing solutions for your project-based requirements.',
                icon: '📋'
              },
              {
                title: 'Executive Search',
                description: 'Premium recruitment service for senior leadership positions.',
                icon: '🎯'
              }
            ].map((service) => (
              <div key={service.title} 
                   className="p-8 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href="#" className="text-blue-600 font-medium flex items-center group">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Successful Placements' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Industry Partners' },
              { number: '10+', label: 'Years Experience' }
            ].map((stat) => (
              <div key={stat.label} className="p-6">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with modern cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Industry Expertise', icon: '🎓' },
              { title: 'Quick Turnaround', icon: '⚡' },
              { title: 'Quality Candidates', icon: '🌟' },
              { title: 'Ongoing Support', icon: '🤝' }
            ].map((reason) => (
              <div key={reason.title} className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-600">Delivering excellence in staffing solutions.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Works & Life at Kaarlo with modern design */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Recent Success Stories</h2>
              <div className="space-y-6">
                {['Project 1', 'Project 2', 'Project 3'].map((project) => (
                  <div key={project} 
                       className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <h3 className="font-semibold text-xl mb-2">{project}</h3>
                    <p className="text-gray-600">Successful placement case study.</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Life at Kaarlo</h2>
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((img) => (
                  <div key={img} 
                       className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img src={`/api/placeholder/400/400`} alt="Life at Kaarlo" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-bold text-xl mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} 
                       className="hover:text-blue-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6">Our Services</h3>
              <ul className="space-y-3">
                {['Permanent Staffing', 'Contract Hiring', 'Executive Search'].map((service) => (
                  <li key={service}>
                    <a href={`#${service.toLowerCase().replace(' ', '-')}`} 
                       className="hover:text-blue-400 transition-colors duration-200">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6">Legal</h3>
              <ul className="space-y-3">
                {[
                  'Privacy Policy',
                  'Terms of Service',
                  'Disclaimer',
                  'Copyright Notice'
                ].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} 
                       className="hover:text-blue-400 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>contact@kaarlo.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>123 Business Ave, City</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2024 Kaarlo Staffing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;