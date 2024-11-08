// src/components/PaymentModal.jsx
import React from 'react';

const PaymentModal = ({ isOpen, totalAmount, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Successfully</h2>
        <p>Thanks for purchasing.</p>
        <p className="text-xl font-semibold mt-4">Total: ${totalAmount.toFixed(2)}</p>
        <button onClick={onClose} className="btn btn-primary mt-6 px-8">Close</button>
      </div>
    </div>
  );
};

export default PaymentModal;

