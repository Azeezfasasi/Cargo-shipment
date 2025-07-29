// import React from 'react'

// export default function AboutTheCompany() {
//   return (
//     <div>AboutTheCompany</div>
//   )
// }

import React from 'react';
import Image from 'next/image';

export default function AboutTheCompany() {
  const founder = {
    name: 'Philip Adam', // Assuming this name from previous components
    role: 'Founder & CEO, Care Cargo',
    image: '/svg/avatar.svg',
    description: `Philip Adam is a visionary leader in the logistics industry, with over two decades of experience in global cargo management. He founded Care Cargo with a mission to revolutionize freight forwarding by combining cutting-edge technology with unparalleled customer service. Philip is passionate about creating seamless, efficient, and reliable supply chain solutions that empower businesses to expand their reach globally. His deep understanding of international trade and commitment to operational excellence has positioned Care Cargo as a trusted partner for diverse shipping needs.`,
  };

  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">About Us</h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section: Founder/Company Info */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center space-x-4 mb-6">
            <Image
              src={founder.image}
              alt={founder.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-red-600 shadow-md"
              width={96}
              height={96}
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
              <p className="text-red-600 font-semibold">{founder.role}</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            {founder.description}
          </p>
          <a
            href="#" // Replace with actual contact page link
            className="px-8 py-4 bg-gray-800 text-white font-bold rounded-full shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>

        {/* Right Section: Large Image */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <Image
            src="/svg/avatar.svg"
            alt="Global Shipping Operations"
            className="w-[500px] max-w-lg lg:max-w-none h-auto object-cover rounded-lg shadow-xl"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}
