import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-7 px-4 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

        {/* Copyright Section */}
        <div className="text-center md:text-left">
          <p className="text-xl md:text-2xl">&copy; 2024 Peakprosys. All Rights Reserved.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 md:gap-6">

          {/* Twitter Button */}
          <a
            href="https://www.instagram.com/peakprosys_sols?igsh=MXlma2x6NnB2djdq"
            target="_blank"
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden transition-all duration-500 ease-out hover:w-32 hover:cursor-pointer group"
          >
            <i className="fab fa-twitter text-white text-2xl absolute transition-opacity duration-300 ease-out opacity-100 group-hover:opacity-0"></i>
            <span className="text-white font-semibold opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
              Twitter
            </span>
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/peakprosys_sols?igsh=MXlma2x6NnB2djdq"
            target="_blank"
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-rose-700 overflow-hidden transition-all duration-500 ease-out hover:w-32 hover:cursor-pointer group"
          >
            <i className="fab fa-instagram text-white text-2xl absolute transition-opacity duration-300 ease-out opacity-100 group-hover:opacity-0"></i>
            <span className="text-white font-semibold opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
              Instagram
            </span>
          </a>

          {/* Facebook Button */}
          <a
            href="https://www.facebook.com/profile.php?id=61565163256425&mibextid=JRoKGi"
            target="_blank"
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-800 to-blue-500 overflow-hidden transition-all duration-500 ease-out hover:w-32 hover:cursor-pointer group"
          >
            <i className="fab fa-facebook text-white text-2xl absolute transition-opacity duration-300 ease-out opacity-100 group-hover:opacity-0"></i>
            <span className="text-white font-semibold opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
              Facebook
            </span>
          </a>

          {/* YouTube Button */}
          <a
            href="https://www.youtube.com/@Peakprosyssolutions_official"
            target="_blank"
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-800 overflow-hidden transition-all duration-500 ease-out hover:w-32 hover:cursor-pointer group"
          >
            <i className="fab fa-youtube text-white text-2xl absolute transition-opacity duration-300 ease-out opacity-100 group-hover:opacity-0"></i>
            <span className="text-white font-semibold opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
            Youtube
            </span>
          </a>

          {/* LinkedIn Button */}
          {/* <a
            href="#" target='_blank'
            className="social_btn flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-800 overflow-hidden transition-all duration-500 ease-out hover:w-32 hover:cursor-pointer"
          >
            <i className="fab fa-linkedin text-white text-2xl transition-opacity duration-300"></i>
            <span className="absolute text-white font-semibold opacity-0 transition-opacity duration-500 ease-out">
              LinkedIn
            </span>
          </a> */}
          <a
            href="#"
            target="_blank"
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-800 overflow-hidden transition-all duration-500 ease-out hover:w-32 hover:cursor-pointer group"
          >
            <i className="fab fa-linkedin text-white text-2xl absolute transition-opacity duration-300 ease-out opacity-100 group-hover:opacity-0"></i>
            <span className="text-white font-semibold opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
            LinkedIn
            </span>
          </a>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
