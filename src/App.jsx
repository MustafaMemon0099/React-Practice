import React from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './Login.jsx'
import About from './About.jsx';
import Product from './Product.jsx';
import Home from './Home.jsx';

function App() {
  return (
    <div>
      {/* 🧭 Navigation Bar */}
      <nav>
        <ul>
          {/* "Home" button ka route galat tha — usay ab theek kar diya */}
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/login">Login</Link></li>;
           <li><Link to="/Product">Product</Link></li>;
            <li><Link to="/About">About</Link></li>
        </ul>
      </nav>

      {/* 📍 Routes */}
      <Routes>
        {/* Route ka path lowercase me likhna best practice hai */}
        <Route path="/login" element={<Login />} />;
        <Route path="/About" element={<About />} />;
        <Route path="/Product" element={<Product />} />;
        <Route path="/Home" element={<Home />} />;
      </Routes>
    </div>
  )
}

export default App
