import React, { useState } from 'react';
import { Menu, X, Search, Bell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl">
      <div className="backdrop-blur-md bg-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-white rounded-xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-700 rounded-xl transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center">
                  <img src='client/src/components/Navbar/frieren.png' className="w-6 h-6 text-white" />
                </div>
              </div>
                <span className="text-white text-xl font-bold tracking-tight">Kaarlo</span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-gray-700/50 text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/25 w-40 focus:w-64 transition-all duration-300"
                />
                <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>

              <div className="flex items-center space-x-6">
                <NavLink href="/" isActive>Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                <NavLink href="/blogs">Blog</NavLink>
              </div>

              <div className="flex items-center space-x-4">
                <button className="relative text-gray-300 hover:text-white transition-colors duration-200">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="bg-red-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-600/25">
                  Sign Up
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-700">
            <div className="px-4 py-3 space-y-3 bg-gradient-to-b from-transparent to-black/10">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-gray-700/50 text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/25"
                />
                <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>
              <MobileNavLink href="/" isActive>Home</MobileNavLink>
              <MobileNavLink href="/about">About</MobileNavLink>
              <MobileNavLink href="/contact">Contact</MobileNavLink>
              <MobileNavLink href="/blogs">Blog</MobileNavLink>
              <button className="w-full bg-red-600 text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-red-700 transition-all duration-200">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, isActive }) => (
  <a
    href={href}
    className={`relative px-3 py-2 text-sm font-medium ${
      isActive 
        ? 'text-white'
        : 'text-gray-300 hover:text-white'
    } transition-colors duration-200 group`}
  >
    {children}
    <span className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
      isActive ? 'bg-red-500 scale-x-100' : 'bg-red-500/70'
    }`}></span>
  </a>
);

const MobileNavLink = ({ href, children, isActive }) => (
  <a
    href={href}
    className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
      isActive 
        ? 'text-white bg-gray-700'
        : 'text-gray-300 hover:text-white hover:bg-gray-700'
    } transition-all duration-200`}
  >
    {children}
  </a>
);

export default Navbar;