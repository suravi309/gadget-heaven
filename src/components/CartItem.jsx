// src/components/CartItem.jsx
import React from 'react';

const CartItem = ({ product, onRemove, onAddToCart }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-4">
      <div className="flex items-center">
        <div className="w-24 h-24 bg-gray-200 rounded-lg mr-4"></div>
        <div>
          <h3 className="text-xl font-semibold text-black">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          {onAddToCart ? (
            <button onClick={onAddToCart} className="btn btn-primary mt-2">Add to Cart</button>
          ) : (
            <p className="font-semibold text-lg mt-2">Price: ${product.price}</p>
          )}
        </div>
      </div>
      <button className="text-red-500 text-2xl" onClick={() => onRemove(product.id)}>
        &times;
      </button>
    </div>
  );
};

export default CartItem;
