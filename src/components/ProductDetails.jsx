// src/components/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../data/consolidated_products.json';

const ProductDetails = ({ addToCart, addToWishlist }) => {
  const { productId } = useParams();
  const product = productData.products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p className="text-center text-xl text-gray-700">Product not found</p>;
  }

  return (
    <section className="" id='shop'>
      <div className="container mx-auto text-center mb-10 bg-violet-800 py-20 pb-96" style={{ marginBottom: '-22%' }}>
        <h1 className="text-4xl font-bold text-white inline-block px-4 py-2 rounded">Product Details</h1>
        <p className="mt-4 text-gray-100">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      <div className="container mx-auto flex justify-center items-start bg-white shadow-lg rounded-lg p-10 space-x-10 my-10 w-4/5">
        <div className="w-1/3">
          <div className="bg-gray-200 w-full h-80 rounded-lg"></div>
        </div>

        <div className="w-2/3 text-left">
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-2xl text-green-600 mb-4">Price: ${product.price}</p>
          <span className="bg-green-200 text-green-700 text-sm font-medium px-3 py-1 rounded-full">In Stock</span>
          <p className="mt-4 text-gray-600">{product.description}</p>

          {product.specifications && (
            <>
              <h3 className="text-xl font-semibold mt-6">Specifications:</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </>
          )}

          <div className="flex items-center mt-6">
            <p className="text-lg font-semibold">Rating:</p>
            <div className="flex items-center ml-2 text-yellow-500">
              <span className="text-2xl">⭐</span>
              <span className="ml-2 text-gray-800 text-lg">{product.rating || '4.5'}</span>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => addToCart(product)}  // Add to cart
              className="btn btn-primary px-8 py-3 font-semibold text-lg"
            >
              Add To Cart
            </button>
            <button
              onClick={() => addToWishlist(product)}  // Add to wishlist
              className="ml-4 btn btn-outline btn-primary px-8 py-3 font-semibold text-lg"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
