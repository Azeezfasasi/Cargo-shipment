import React from 'react';

// ContactHero Component: Displays a simple hero section for the contact page.
export default function ContactHero() {
  return (
    <section className="bg-gray-900 text-white py-20 px-4 text-center font-sans">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Get in Touch with <span className="text-green-600">Care Cargo</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            {`We're`} here to help with all your cargo shipment inquiries, support needs, and partnership opportunities. Reach out to us!
        </p>
      </div>
    </section>
  );
}
