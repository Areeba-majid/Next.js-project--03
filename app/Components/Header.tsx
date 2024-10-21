import React from 'react';

const Header = () => {
  return (
    <header className="bg-yellow-400 text-black font-serif p-5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold ">GIAIC  C@fe.*</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#menu" className="hover:text-white">Our Menu</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
