import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-7 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Clothing Store</Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/?category=mens" className="hover:text-gray-300">Men's</Link>
          <Link to="/?category=womens" className="hover:text-gray-300">Women's</Link>
          <Link to="/?category=accessories" className="hover:text-gray-300">Accessories</Link>
          <Link to="/cart" className="relative">
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

