// src/components/Navbar.jsx
import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logoImage from '../assets/logo.jpg';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const activeClass = "text-blue-600 border-b-2 border-blue-600";
  const inactiveClass = "text-gray-700 hover:text-blue-600";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + App Title */}
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="CassSync Logo" className="h-8 w-auto" />
            <span className="ml-2 text-xl font-bold text-blue-600">CassSync</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-4 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "px-3 py-2 rounded-md text-sm font-medium " + (isActive ? activeClass : inactiveClass)
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                "px-3 py-2 rounded-md text-sm font-medium " + (isActive ? activeClass : inactiveClass)
              }
            >
              Users
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                "px-3 py-2 rounded-md text-sm font-medium " + (isActive ? activeClass : inactiveClass)
              }
            >
              Dashboard
            </NavLink>
          </div>

          {/* Always visible Auth buttons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-3 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 text-sm"
            >
              Signup
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2">
          <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
            Home
          </NavLink>
          <NavLink to="/users" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
            Users
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
            Dashboard
          </NavLink>
          <Link to="/login" className="block mt-2 text-blue-600 hover:underline">
            Login
          </Link>
          <Link to="/signup" className="block text-blue-600 hover:underline">
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
