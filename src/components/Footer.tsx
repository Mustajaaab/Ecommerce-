import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 
    ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between py-9
        ">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Clothing Store</h3>
            <p>Your one-stop shop for trendy clothes</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/?category=mens" className="hover:text-gray-300">Men's</a></li>
              <li><a href="/?category=womens" className="hover:text-gray-300">Women's</a></li>
              <li><a href="/?category=accessories" className="hover:text-gray-300">Accessories</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Email: info@clothingstore.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Clothing Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

