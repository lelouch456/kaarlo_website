// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Make sure this path is correct
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;