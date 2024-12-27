import React from 'react';
import { Phone, Mail, FileText, Briefcase, Twitter, Instagram, Linkedin } from 'lucide-react';

const CompactContactWidget = () => {
  return (
    <div className="w-64 p-3 bg-gray-900 rounded-lg shadow-xl">
      <div className="grid grid-cols-2 gap-2 mb-2">
        <a href="tel:+1234567890" className="flex items-center p-1.5 text-gray-300 hover:text-red-400 hover:bg-gray-800 rounded">
          <Phone size={16} className="text-red-500" />
          <span className="ml-2 text-xs">Contact</span>
        </a>
        <a href="mailto:info@company.com" className="flex items-center p-1.5 text-gray-300 hover:text-red-400 hover:bg-gray-800 rounded">
          <Mail size={16} className="text-red-500" />
          <span className="ml-2 text-xs">Mail</span>
        </a>
        <a href="/careers" className="flex items-center p-1.5 text-gray-300 hover:text-red-400 hover:bg-gray-800 rounded">
          <FileText size={16} className="text-red-500" />
          <span className="ml-2 text-xs">CV/Job</span>
        </a>
        <a href="/business" className="flex items-center p-1.5 text-gray-300 hover:text-red-400 hover:bg-gray-800 rounded">
          <Briefcase size={16} className="text-red-500" />
          <span className="ml-2 text-xs">Business</span>
        </a>
      </div>

      <div className="flex justify-between pt-2 border-t border-gray-700">
        <a href="https://twitter.com/company" className="text-gray-400 hover:text-red-400">
          <Twitter size={14} />
        </a>
        <a href="https://instagram.com/company" className="text-gray-400 hover:text-red-400">
          <Instagram size={14} />
        </a>
        <a href="https://linkedin.com/company" className="text-gray-400 hover:text-red-400">
          <Linkedin size={14} />
        </a>
      </div>
    </div>
  );
};

export default CompactContactWidget;