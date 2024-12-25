// src/pages/signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', formData);
      await login(formData.email, formData.password);
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;