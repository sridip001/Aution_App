import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 text-white flex justify-between">
    <h1 className="text-2xl font-bold">Auction App</h1>
    <div className="space-x-4">
      <Link to="/signup" className="hover:underline">Signup</Link>
      <Link to="/signin" className="hover:underline">Signin</Link>
      <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      <Link to="/post-auction" className="hover:underline">Post Auction</Link>
    </div>
  </nav>
);

export default Navbar;
