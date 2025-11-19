// ...existing code...
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import About from './About'
import Product from './Product'
import men from './men'
import Women from './Women'
import './App.css';

function App() {
  return (
    <div>
      
      <nav> <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul></nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<men />} />
          <Route path="women" element={<Women />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
// ...existing code...