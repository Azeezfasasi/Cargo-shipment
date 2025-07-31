import React from 'react';

// ContactInfo Component: Displays key contact details.
export default function ContactInfo() {
  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Address Card */}
        <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-gray-100 transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="p-4 bg-green-600 text-white rounded-full mb-4">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Our Office Address</h3>
          <p className="text-gray-700">123 Cargo Lane, Logistics City,</p>
          <p className="text-gray-700">LC 12345, Nigeria</p>
        </div>

        {/* Phone Card */}
        <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-gray-100 transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="p-4 bg-green-600 text-white rounded-full mb-4">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
          <p className="text-gray-700">+234 800 123 4567</p>
          <p className="text-gray-700">Mon - Fri: 9:00 AM - 5:00 PM (WAT)</p>
        </div>

        {/* Email Card */}
        <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-gray-100 transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="p-4 bg-green-600 text-white rounded-full mb-4">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 6V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
          <p className="text-gray-700">info@carecargo.com</p>
          <p className="text-gray-700">support@carecargo.com</p>
        </div>
      </div>
    </section>
  );
}
