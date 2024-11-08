// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Dashboard from './components/Dashboard';
import StatisticsChart from './components/StatisticsChart';

const App = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Function to add items to the cart from the wishlist
  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
      setWishlist(wishlist.filter(item => item.id !== product.id)); // Remove from wishlist when added to cart
    }
  };

  // Function to add items to the wishlist
  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id) && !cart.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <Router>
      <div>
        <Navbar />
        
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<MainContent addToWishlist={addToWishlist} />} />
            <Route path="/product/:productId" element={<ProductDetails addToCart={addToCart} addToWishlist={addToWishlist} />}  />
            <Route path="/dashboard" element={<Dashboard cart={cart} wishlist={wishlist} addToCart={addToCart} />} />
            <Route path="/statistics" element={<StatisticsChart />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
