'use client'
import React, { useState } from 'react';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log('Subscribing with email:', email);
    setEmail('');
  };

  return (
    <div className="bg-black-900 py-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newslatter</h2>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded-r-md hover:bg-purple-600 focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;  