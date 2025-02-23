import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Auction App</h1>
      <p className="mt-4 text-gray-600 max-w-xl">
        Buy and sell items in real-time auctions. Start bidding or post your own auction now!
      </p>
      <div className="mt-6 space-x-4">
        <Link to="/signup" className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
          Sign Up
        </Link>
        <Link to="/signin" className="bg-gray-500 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
