"use client";
import Link from 'next/link';
import React, { useState } from 'react';

export default function ForgetPasswordMain() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);
    setIsLoading(true);

    if (!email.trim()) {
      setMessage('Please enter your email address.');
      setIsError(true);
      setIsLoading(false);
      return;
    }

    try {
      // Simulate an API call to send a password reset email
      // In a real application, you would send a POST request to your backend:
      // const response = await fetch('/api/forgot-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      // const data = await response.json();

      setTimeout(() => {
        // Simulate success or failure
        if (email === 'test@example.com') { // Simulate a valid email
          setMessage('If an account with that email exists, a password reset link has been sent.');
          setIsError(false);
          setEmail(''); // Clear email field
        } else {
          setMessage('Failed to send reset link. Please check your email or try again.');
          setIsError(true);
        }
        setIsLoading(false);
      }, 1500); // Simulate network delay

    } catch (err) {
      setMessage('An error occurred. Please try again later.');
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-lg shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Forgot Your Password?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address to receive a password reset link.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleForgotPassword}>
          {message && (
            <div className={`px-4 py-3 rounded-md relative ${isError ? 'bg-red-100 border border-red-400 text-red-700' : 'bg-green-100 border border-green-400 text-green-700'}`} role="alert">
              <span className="block sm:inline">{message}</span>
            </div>
          )}
          <div className='mb-3'>
            <label htmlFor="email-address" className="">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Send Reset Link'
              )}
            </button>
          </div>
          <div className="text-center">
            <Link href="/login" className="font-medium text-green-600 hover:text-green-500">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
