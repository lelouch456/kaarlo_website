
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import axios from 'axios';

const Blogs = () => {
    const [blogList, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/blogs'); // Correct URL
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs', error);
            }
        };
        fetchBlogs();
    }, []);

    
    
    
      const [likedPosts, setLikedPosts] = useState(new Set());
      const [savedPosts, setSavedPosts] = useState(new Set());
      const [activeFilter, setActiveFilter] = useState('all');
    
      
      const toggleLike = (id) => {
        setLikedPosts(prev => {
          const newSet = new Set(prev);
          if (newSet.has(id)) {
            newSet.delete(id);
          } else {
            newSet.add(id);
          }
          return newSet;
        });
      };
    
      const toggleSave = (id) => {
        setSavedPosts(prev => {
          const newSet = new Set(prev);
          if (newSet.has(id)) {
            newSet.delete(id);
          } else {
            newSet.add(id);
          }
          return newSet;
        });
      };
    
      const filteredBlogs = activeFilter === 'all' 
        ? blogList 
        : blogList.filter(blog => blog.genre.toLowerCase() === activeFilter);
    
      // Enhanced animation variants
      const containerVariants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
          }
        }
      };
    
      const itemVariants = {
        hidden: { 
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        show: { 
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
          }
        },
        hover: {
          y: -8,
          scale: 1.02,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
          }
        },
        tap: {
          scale: 0.98,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
          }
        }
      };
    
      const buttonVariants = {
        hover: { 
          scale: 1.1,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
          }
        },
        tap: { 
          scale: 0.9 
        }
      };
    
      const filterButtonVariants = {
        initial: { scale: 1 },
        active: { 
          scale: 1.05,
          backgroundColor: "#fff",
          color: "#dc2626",
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 15
          }
        }
      };
    
      return (
        <div className="min-h-screen bg-gray-50">
          <motion.div 
            className="bg-red-600 py-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <motion.h1 
              className="text-4xl font-bold text-white text-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              Blogs
            </motion.h1>
            
            <div className="flex justify-center gap-4 px-4">
              {['all', 'technology', 'travel', 'food'].map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeFilter === filter 
                    ? 'bg-white text-red-600' 
                    : 'bg-red-500 text-white hover:bg-red-400'
                  }`}
                  variants={filterButtonVariants}
                  initial="initial"
                  animate={activeFilter === filter ? "active" : "initial"}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
    
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              className="max-w-4xl mx-auto px-4 py-8"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {filteredBlogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
                  layout
                >
                  <motion.img 
                    src={blog.imageUrl} 
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag) => (
                        <motion.span 
                          key={tag} 
                          className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      <span className="ml-auto text-sm text-gray-500">{blog.readTime}</span>
                    </div>
    
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 hover:text-red-600 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
    
                    <div className="flex items-center mb-4">
                      <motion.div 
                        className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="text-red-600 font-bold">{blog.author.charAt(0)}</span>
                      </motion.div>
                      <div className="ml-3">
                        <p className="font-semibold text-gray-800">{blog.author}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(blog.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
    
                    <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                      <motion.button 
                        onClick={() => toggleLike(blog.id)}
                        className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Heart 
                          className={likedPosts.has(blog.id) ? 'fill-red-600 text-red-600' : ''} 
                          size={20} 
                        />
                        <motion.span
                          key={likedPosts.has(blog.id)}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {blog.likes + (likedPosts.has(blog.id) ? 1 : 0)}
                        </motion.span>
                      </motion.button>
                      
                      <motion.button 
                        className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <MessageCircle size={20} />
                        <span>{blog.comments}</span>
                      </motion.button>
                      
                      <motion.button 
                        onClick={() => toggleSave(blog.id)}
                        className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Bookmark 
                          className={savedPosts.has(blog.id) ? 'fill-red-600 text-red-600' : ''} 
                          size={20} 
                        />
                      </motion.button>
                      
                      <motion.button 
                        className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors ml-auto"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Share2 size={20} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      );
    };


export default Blogs;
