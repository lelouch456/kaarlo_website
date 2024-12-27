import React, { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await axios.post('/api/contact', formData); 
      setStatus('success');
      setTimeout(() => setStatus('idle'), 2000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Contact Us</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={`transform transition-all duration-300 ${
          focusedField === 'name' ? 'scale-105' : ''
        }`}>
          <label className="block text-sm font-medium mb-1 text-red-600">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            className="w-full p-2 border border-red-200 rounded focus:border-red-500 focus:ring-1 focus:ring-red-500
                     transition-all duration-300"
            required
          />
        </div>

        <div className={`transform transition-all duration-300 ${
          focusedField === 'email' ? 'scale-105' : ''
        }`}>
          <label className="block text-sm font-medium mb-1 text-red-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            className="w-full p-2 border border-red-200 rounded focus:border-red-500 focus:ring-1 focus:ring-red-500
                     transition-all duration-300"
            required
          />
        </div>

        <div className={`transform transition-all duration-300 ${
          focusedField === 'phone' ? 'scale-105' : ''
        }`}>
          <label className="block text-sm font-medium mb-1 text-red-600">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
            className="w-full p-2 border border-red-200 rounded focus:border-red-500 focus:ring-1 focus:ring-red-500
                     transition-all duration-300"
          />
        </div>

        <div className={`transform transition-all duration-300 ${
          focusedField === 'message' ? 'scale-105' : ''
        }`}>
          <label className="block text-sm font-medium mb-1 text-red-600">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            className="w-full p-2 border border-red-200 rounded focus:border-red-500 focus:ring-1 focus:ring-red-500
                     transition-all duration-300 min-h-32"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 
                     rounded transition-all duration-300 transform hover:scale-105 flex items-center justify-center
                     ${status === 'loading' ? 'opacity-75' : ''}`}
          disabled={status !== 'idle'}
        >
          {status === 'loading' && <Loader2 className="animate-spin mr-2" />}
          {status === 'success' && <CheckCircle className="mr-2" />}
          {status === 'error' && <AlertCircle className="mr-2" />}
          {status === 'idle' ? 'Send Message' : 
           status === 'loading' ? 'Sending...' :
           status === 'success' ? 'Sent!' : 'Error!'}
        </button>
      </form>
    </div>
  );
};

export default Contact;