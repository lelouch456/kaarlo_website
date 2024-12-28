import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, Building2, Briefcase, Clock, Star, Indian2RupeesIcon } from 'lucide-react';

const CourseTabs = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching courses from backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Sample course data - replace with actual API call
        const data = [
          {
            id: 1,
            title: "Advanced Project Management",
            type: "corporate",
            duration: "12 weeks",
            rating: 4.8,
            students: 1234,
            description: "Master advanced project management techniques",
            price: 29999,
            originalPrice: 34999,
            installments: true,
            emiPrice: 2999
          },
          {
            id: 2,
            title: "Data Science Fundamentals",
            type: "individual",
            duration: "8 weeks",
            rating: 4.5,
            students: 2156,
            description: "Learn the basics of data science",
            price: 19999,
            originalPrice: 24999,
            installments: true,
            emiPrice: 1999
          },
          {
            id: 3,
            title: "Campus Leadership Program",
            type: "campus",
            duration: "16 weeks",
            rating: 4.7,
            students: 890,
            description: "Develop essential leadership skills",
            price: 39999,
            originalPrice: 44999,
            installments: true,
            emiPrice: 3999
          }
        ];
        
        setCourses(data);
      } catch (err) {
        setError('Failed to load courses. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(course => 
    activeTab === 'all' ? true : course.type === activeTab
  );

  const tabs = [
    { id: 'all', label: 'All Courses', icon: BookOpen },
    { id: 'individual', label: 'Individual', icon: Users },
    { id: 'campus', label: 'Campus', icon: Building2 },
    { id: 'corporate', label: 'Corporate', icon: Briefcase }
  ];

  const TabIcon = ({ icon: Icon }) => (
    <Icon className="w-5 h-5" />
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-gray-100 p-6 rounded-lg animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <div className="text-red-600 mb-4">{error}</div>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                      ${activeTab === tab.id 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TabIcon icon={tab.icon} />
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Courses Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {course.title}
                  </h3>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {course.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                {/* Price Section */}
                <div className="border-t border-gray-100 pt-4 mb-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-gray-800">
                      {formatPrice(course.price)}
                    </span>
                    {course.originalPrice && (
                      <span className="text-gray-400 line-through">
                        {formatPrice(course.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  {course.installments && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-gray-600"
                    >
                      EMI available from {formatPrice(course.emiPrice)}/month
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t">
                <button className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CourseTabs;