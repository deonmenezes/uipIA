'use client'
import React from 'react';

const FindFriendsPage = () => {
  return (
    <div className="bg-gray-900 text-white p-8 md:p-12 lg:p-16">
      <h1 className="text-3xl font-bold mb-6 md:text-4xl lg:text-5xl">Find Friends</h1>
      <div className="flex items-center bg-gray-800 rounded-lg p-3 mb-8">
        <svg className="text-gray-400 mr-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search for friends"
          className="bg-transparent text-white flex-1 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-4 flex items-center">
          <img src="/profile.png" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
          <div className="flex-1">
            <h3 className="font-medium">John Doe</h3>
            <p className="text-gray-400">Running Enthusiast</p>
          </div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
            <svg className="inline-block mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Add
          </button>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 flex items-center">
          <img src="/profile.png" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
          <div className="flex-1">
            <h3 className="font-medium">John Doe</h3>
            <p className="text-gray-400">Running Enthusiast</p>
          </div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
            <svg className="inline-block mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Add
          </button>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 flex items-center">
          <img src="/profile.png" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
          <div className="flex-1">
            <h3 className="font-medium">John Doe</h3>
            <p className="text-gray-400">Running Enthusiast</p>
          </div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
            <svg className="inline-block mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Add
          </button>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 flex items-center">
          <img src="/profile.png" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
          <div className="flex-1">
            <h3 className="font-medium">John Doe</h3>
            <p className="text-gray-400">Running Enthusiast</p>
          </div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
            <svg className="inline-block mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Add
          </button>
        </div><div className="bg-gray-800 rounded-lg p-4 flex items-center">
          <img src="/profile.png" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
          <div className="flex-1">
            <h3 className="font-medium">John Doe</h3>
            <p className="text-gray-400">Running Enthusiast</p>
          </div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
            <svg className="inline-block mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Add
          </button>
        </div><div className="bg-gray-800 rounded-lg p-4 flex items-center">
          <img src="/profile.png" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
          <div className="flex-1">
            <h3 className="font-medium">John Doe</h3>
            <p className="text-gray-400">Running Enthusiast</p>
          </div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
            <svg className="inline-block mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Add
          </button>
        </div><div className="bg-gray-800 rounded-lg p-4 flex items-center">
          <img src="/profile.png" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
          <div className="flex-1">
            <h3 className="font-medium">John Doe</h3>
            <p className="text-gray-400">Running Enthusiast</p>
          </div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
            <svg className="inline-block mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Add
          </button>
        </div>
        {/* Repeat the above block for more friends */}
      </div>
    </div>
  );
};

export default FindFriendsPage;