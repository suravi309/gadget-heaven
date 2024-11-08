// src/components/MainContent.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import productData from '../data/consolidated_products.json';

const MainContent = ({ addToWishlist }) => {
  const categories = ['All Product', 'Laptops', 'Phones', 'Accessories', 'Smart Watches', 'MacBook', 'iPhone'];
  const [selectedCategory, setSelectedCategory] = useState('All Product');
  const navigate = useNavigate();

  const filteredProducts = selectedCategory === 'All Product'
    ? productData.products
    : productData.products.filter(product => product.category === selectedCategory);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <Banner />
      <main className="container w-full mx-auto py-16 bg-white mt-24">
        <h2 className="text-center text-3xl font-bold mb-12 text-black">Explore Cutting-Edge Gadgets</h2>
        <div className="flex space-x-8">
          <div className="w-1/4 bg-white rounded-lg p-6 shadow-lg h-fit rounded">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`block w-full py-2 mb-2 font-semibold rounded-full ${
                  category === selectedCategory ? 'bg-violet-700 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8 w-3/4">
            {filteredProducts.map((product, index) => (
              <div key={index} className="border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300">
                <div className="bg-gray-200 h-48 rounded mb-4"></div>
                <h3
                  onClick={() => handleProductClick(product.id)}
                  className="text-xl font-semibold text-black mb-2 cursor-pointer hover:text-blue-600"
                >
                  {product.name}
                </h3>
                <p className="text-lg text-gray-700 mb-4">Price: ${product.price}</p>
                <button
                  onClick={() => addToWishlist(product)}
                  className="w-2/5 py-2 text-blue-700 border border-blue-700 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-300"
                >
                  Add to Wishlist
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default MainContent;
