import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

// Import the consolidated_products.json data
import productData from '../data/consolidated_products.json';

// Prepare the chart data by mapping over the imported JSON
const data = productData.products.map(product => ({
  name: product.name,
  price: product.price,
  rating: product.rating || 0, // Assuming you have a rating or defaulting to 0
}));

const StatisticsChart = () => {
  return (
    <>
      <section className="bg-violet-800 text-white text-center py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Statistics</h1>
          <p className="mt-2">Explore the latest gadgets and their prices compared to ratings!</p>
        </div>
      </section>
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-bold mb-6 text-black">Price vs Product Name</h2>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="price" stroke="#ff7300" />
            <Scatter dataKey="rating" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default StatisticsChart;
