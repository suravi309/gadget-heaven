// src/components/Dashboard.jsx
import React, { useState } from 'react';
import CartItem from './CartItem';
import PaymentModal from './PaymentModal';

const Dashboard = ({ cart, wishlist, addToCart }) => {
  const [view, setView] = useState('cart');
  const [showModal, setShowModal] = useState(false);

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  const handlePurchase = () => setShowModal(true);

  return (
    <div>
      <section className="bg-violet-800 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-2">Explore the latest gadgets that will take your experience to the next level.</p>
        <div className="mt-6">
          <button
            onClick={() => setView('cart')}
            className={`btn px-8 ${view === 'cart' ? 'bg-white text-violet-800' : 'btn-white'}`}
          >
            Cart
          </button>
          <button
            onClick={() => setView('wishlist')}
            className={`btn px-8 ml-4 ${view === 'wishlist' ? 'bg-white text-violet-800' : 'btn-white'}`}
          >
            Wishlist
          </button>
        </div>
      </section>

      <div className="container mx-auto py-16">
        {view === 'cart' ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-black">Cart</h2>
              <div className="text-xl font-bold text-black">Total cost: ${totalAmount.toFixed(2)}</div>
            </div>
            {cart.length > 0 ? (
              cart.map(product => (
                <CartItem key={product.id} product={product} />
              ))
            ) : (
              <p className="text-gray-600">Your cart is empty. Add items from the main content page.</p>
            )}
            <div className="flex justify-end mt-8 space-x-4">
              <button className="btn btn-outline btn-primary">Sort by Price</button>
              <button onClick={handlePurchase} className="btn btn-primary">Purchase</button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-8">Wishlist</h2>
            {wishlist.length > 0 ? (
              wishlist.map(product => (
                <CartItem
                  key={product.id}
                  product={product}
                  onAddToCart={() => addToCart(product)}
                />
              ))
            ) : (
              <p className="text-gray-600">Your wishlist is empty. Add items from the main content page.</p>
            )}
          </>
        )}
      </div>

      <PaymentModal isOpen={showModal} totalAmount={totalAmount} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Dashboard;
