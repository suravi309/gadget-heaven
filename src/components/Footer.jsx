// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 text-center">
      <div className="container mx-auto text-gray-600">
        <h2 className="text-2xl font-bold mb-6">Gadget Heaven</h2>
        <p className="mb-10">Leading the way in cutting-edge technology and innovation.</p>
        <div className="grid grid-cols-3 gap-1 text-lef mx-auto">
          <div>
            <h5 className="font-bold mb-4">Services</h5>
            <ul className="space-y-2">
              <li><a href="#">Product Support</a></li>
              <li><a href="#">Order Tracking</a></li>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Company</h5>
            <ul className="space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
