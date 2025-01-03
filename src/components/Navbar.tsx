import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold md:text-center text-yellow-400 w-full ">
        ESTYLO
        </Link>

      
        <div className="flex items-center space-x-4 md:hidden">
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16
          left-0 w-full bg-gray-800 md:bg-transparent md:static md:flex md:justify-center md:items-center md:space-x-4`}
        >
          <Link
            to="/"
            className="block text-center py-2 px-4 md:py-0 md:px-0 hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/?category=mens"
            className="block text-center py-2 px-4 md:py-0 md:px-0 hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Men's
          </Link>
          <Link
            to="/?category=womens"
            className="block text-center py-2 px-4 md:py-0 md:px-0 hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Women's
          </Link>
          <Link
            to="/?category=accessories"
            className="block text-center py-2 px-4 md:py-0 md:px-0 hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Accessories
          </Link>
          <Link
            to="/cart"
            className="relative  text-center py-2 hidden md:block
             px-4 md:py-0 md:px-0 hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
