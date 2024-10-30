import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-gray-900 text-white p-8 md:p-12 lg:p-16">
      <div className="flex items-center mb-6 md:mb-8 lg:mb-10">
        <img src="/profile.png" alt="User Avatar" className="w-20 h-20 rounded-full mr-4 md:w-24 md:h-24 lg:w-28 lg:h-28" />
        <div>
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Deon Menezes</h2>
          <p className="text-gray-400 md:text-lg lg:text-xl">deonmenezes@gmail.com</p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 md:p-8 lg:p-10">
        <h3 className="text-lg font-bold mb-4 md:text-xl lg:text-2xl">Private Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <div>
            <p className="text-gray-400 mb-1 md:text-lg lg:text-xl">Current Password</p>
            <p className="md:text-lg lg:text-xl">********</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1 md:text-lg lg:text-xl">Two-Step Verification</p>
            <p className="md:text-lg lg:text-xl">Enabled</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1 md:text-lg lg:text-xl">Secondary Email</p>
            <p className="md:text-lg lg:text-xl">arshdeep.kohli@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;