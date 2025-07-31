// import React from 'react'

// export default function MeetOurTeam() {
//   return (
//     <div>MeetOurTeam</div>
//   )
// }

import React from 'react';
import Image from 'next/image';

export default function MeetOurTeam() {
  const teamMembers = [
    {
      name: 'George Adam',
      role: 'Logistics Manager',
      image: '/svg/avatar.svg',
      description: 'George oversees all logistics operations, ensuring seamless coordination and efficient cargo movement across various channels. His expertise guarantees smooth transitions.',
    },
    {
      name: 'Sarah Chen',
      role: 'Operations Specialist',
      image: '/svg/avatar.svg',
      description: 'Sarah specializes in optimizing supply chain processes, identifying key areas for improvement to enhance speed and reliability in our cargo services.',
    },
    {
      name: 'David Lee',
      role: 'Freight Coordinator',
      image: '/svg/avatar.svg',
      description: 'David is responsible for managing freight bookings and ensuring all documentation is accurate and compliant, facilitating hassle-free international shipments.',
    },
    {
      name: 'Emily White',
      role: 'Customer Relations',
      image: '/svg/avatar.svg',
      description: 'Emily is dedicated to providing exceptional customer support, addressing client inquiries and ensuring a positive experience throughout the cargo delivery process.',
    },
  ];

  const owner = {
    name: 'Philip Adam',
    role: 'Founder & CEO',
    image: '/svg/avatar.svg',
    quote: 'Our commitment to excellence in cargo logistics drives us to continuously innovate and deliver unparalleled service. We believe in building strong, lasting partnerships with our clients globally.',
  };

  return (
    <section className="bg-gray-50 py-16 px-4 font-sans">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row-reverse gap-12">
        {/* Left Section: Team Members Grid */}
        <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center">
              <Image
                src={member.image}
                alt={member.name}
                className="w-20 h-20 object-cover mx-auto object-center"
                width={100}
                height={100}
              />
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: About Our Team & Owner Highlight */}
        <div className="lg:w-1/3 w-full bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-green-600 text-sm uppercase tracking-widest mb-2">WHO WE ARE</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-8">
            About Our Team
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            At Care Cargo, our dedicated team is the backbone of our success. We comprise experienced logistics professionals, operations specialists, and customer service experts committed to delivering seamless and efficient cargo solutions globally. Our collective expertise ensures that every shipment is handled with precision and care.
          </p>

          {/* Owner Highlight */}
          <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center text-center">
            <Image
              src={owner.image}
              alt={owner.name}
              className="w-24 h-24 rounded-full object-cover object-center border-4 border-green-600 mb-4"
              width={96}
              height={96}
            />
            <h4 className="text-xl font-bold text-gray-900">{owner.name}</h4>
            <p className="text-green-600 font-semibold mb-4">{owner.role}</p>
            <p className="text-gray-700 italic relative">
              <span className="absolute -top-2 -left-4 text-4xl text-gray-400 opacity-50">&ldquo;</span>
              {owner.quote}
              <span className="absolute -bottom-2 -right-4 text-4xl text-gray-400 opacity-50">&rdquo;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
