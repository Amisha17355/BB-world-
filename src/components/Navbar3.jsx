import React from 'react';
import { IoMdMenu } from "react-icons/io";

const NavbarMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Services', link: '/' },
  { id: 3, title: 'About us', link: '/' },
  { id: 4, title: 'Blogs', link: '/' },
  { id: 5, title: 'Contact Us', link: '/' },
];

const Navbar3 = () => {
  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-500 ease-in-out transform hover:shadow-2xl">
        <div className="container mx-auto flex justify-between items-center py-4 md:py-4 px-6">
          
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="public/images/logo/bigbyte-logo.png" 
              alt="Bigbyte logo" 
              className="h-12 w-auto md:h-14 transition-transform duration-500 hover:scale-105 rounded-lg" 
            />
          </div>

          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-800 font-medium">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="transition-all duration-100 ease-in-out transform hover:scale-105 hover:text-cyan-500 hover:translate-y-[2px]">
                  <a 
                    href={menu.link} 
                    className="inline-block py-1 px-3 transition-colors duration-100 hover:underline"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 items-center">
            <button className="text-gray-700 font-medium hover:text-cyan-500 hover:underline transition-all duration-300 ease-in-out transform hover:scale-105">
              Apply as a Freelancer
            </button>

            <button className="px-4 py-2 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
              Hire Top Talent
            </button>

            <button className="text-gray-700 font-medium hover:text-cyan-500 hover:underline transition-all duration-300 ease-in-out transform hover:scale-105">
              Log In
            </button>
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <IoMdMenu className="text-3xl text-cyan-500 transition-transform duration-300 hover:scale-110" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar3;
