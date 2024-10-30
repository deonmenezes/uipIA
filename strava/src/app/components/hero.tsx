import React from 'react';

const Hero = () => {
  return (
    <header className="flex justify-center pt-20">
      <div className="relative bg-opacity-5 bg-white rounded-lg shadow-lg p-10 max-h-96 max-w-6xl text-left">
        <h2 className="text-purple-500 text-lg">Welcome to Strava</h2>
        <h1 className="text-5xl font-bold mt-2">Best Running and Cycling App you'll find</h1>
        <p className="text-gray-300 mt-4">Let's get started!</p>
        <button className="mt-6 px-6 py-3 bg-purple-500 text-white font-semibold rounded-md">Get Started</button>
      </div>
    </header>
  );
};

export default Hero;