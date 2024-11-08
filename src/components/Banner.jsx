// src/components/Banner.jsx

import img1 from '../assets/banner.jpg'

const Banner = () => {
  return (
    <section className="bg-violet-800 text-white text-center pt-20">
        <div className="container mx-auto pb-20">
            <h1 className="text-4xl font-bold mb-4">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="mb-8">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to
            the coolest accessories, we have it all!
            </p>
            <a className="btn btn-primary px-8 py-3 text-lg font-semibold" href=''>Shop Now</a>
        </div>
        <div className="p-6">
            <img src={img1} className="max-w-xl w-fit border rounded-lg p-4 mx-auto" alt="Banner Image" style={{marginBottom: '-8%'}} />

        </div>
    </section>
  );
};

export default Banner;
