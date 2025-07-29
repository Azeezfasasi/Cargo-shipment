'use client';
import Link from "next/link";
import { useState } from "react";

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/track-shipment", label: "Track Shipment" },
    { href: "/request-quote", label: "Request Quote" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="bg-white p-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <svg
            className="w-10 h-10 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001 1h3v-3m-3 3h3v-3m-3 0V9a1 1 0 011-1h2a1 1 0 011 1v10m-6 0h6"
            ></path>
          </svg>
          <span className="text-xl font-semibold text-gray-800">Cargo Tracking</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-row items-center space-x-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact Icons and Button Section (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Phone Icon */}
          <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
            <svg
              className="w-5 h-5"
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
          </button>

          {/* Email Icon */}
          <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
            <svg
              className="w-5 h-5"
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
          </button>

          {/* Get A Quote Button */}
          <Link href="/about" className="px-6 py-2 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
            Get A Quote
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden flex items-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Open main menu</span>
          <div className="relative w-7 h-7 flex flex-col justify-center items-center">
            <span
              className={`block h-1 w-7 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`block h-1 w-7 bg-gray-800 rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`block h-1 w-7 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg rounded-b-lg py-4 px-6 absolute left-0 right-0 top-full z-40 animate-slideDown">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-red-600 font-medium text-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/about" className="px-6 py-2 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-center" onClick={() => setMenuOpen(false)}>
              Get A Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
