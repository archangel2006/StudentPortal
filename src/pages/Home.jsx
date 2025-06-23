import React from 'react';

const Home = () => {
  return (
    // Main container with full viewport height, flex for centering content
    // and a relative position to allow z-indexing of the background
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Gradient Background Element */}
      {/* This div will hold the large, animated gradient */}
      <div className="
        absolute inset-0 z-0
        bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100
        animate-gradient-shift
        min-h-screen w-full
      ">
        {/* You can add more complex gradient overlays or shapes here if needed */}
        {/* For a more "live" effect, consider animating multiple layers or using JS for canvas-based effects */}
      </div>

      {/* Custom CSS for the gradient animation */}
      {/* This style block defines the keyframes for the animation */}
      <style>
        {`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
            background-size: 200% 200%;
          }
          50% {
            background-position: 100% 50%;
            background-size: 200% 200%;
          }
          100% {
            background-position: 0% 50%;
            background-size: 200% 200%;
          }
        }

        /* Applying the animation */
        .animate-gradient-shift {
          animation: gradient-shift 15s ease infinite alternate; /* 15s duration, smooth, repeats, alternates direction */
        }
        `}
      </style>

      {/* Content Container - positioned above the background */}
      <div className="
        relative z-10
        max-w-2xl text-center
        bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-10
        shadow-2xl border border-gray-100
        transform transition-all duration-500 ease-out scale-100
        hover:scale-[1.02]
      ">
        <h1 className="
          text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4
          leading-tight drop-shadow-md
        ">
          Welcome to <span className="text-indigo-600">ClassSync</span> ✨
        </h1>
        <p className="
          text-lg text-gray-700
          mb-6
        ">
          Your all-in-one portal to effortlessly manage your academic journey.
          View your dashboard stats, track attendance, and access course materials with ease.
        </p>
        {/* Call to Action Button */}
        <button className="
          bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full
          shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300
          focus:outline-none focus:ring-4 focus:ring-indigo-300
        ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
