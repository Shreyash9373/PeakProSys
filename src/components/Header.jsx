import React from 'react';
import header_img from '../assets/images/header_right.png';
import arrow_icon from '../assets/images/arrow_icon.svg';
import { useTypewriter } from 'react-simple-typewriter';

const Header = () => {
  const [typeEffect] = useTypewriter({
    words: [
      'Build Solutions for Better Tomorrow.',
      'Crafting Web Applications with React.',
      'Delivering Excellence with Python and Java.',
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="flex flex-col md:flex-row bg-blue-300 rounded-lg px-4 sm:px-6 md:px-10 lg:px-20 py-6 md:py-10 lg:py-16">
      {/* --------- Header Left --------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 m-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-snug md:leading-tight lg:leading-tight">
          {typeEffect}
        </h1>
        <div className="text-white text-sm sm:text-base font-light">
          <p>
            PeakProSys Solutions builds dynamic web applications with React,{" "}
            <br className="hidden sm:block" /> Java, and Python full-stack
            development, delivering tailored digital solutions.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-[#595959] text-xs sm:text-sm md:text-base font-medium hover:scale-105 transition-all duration-300"
        >
          Get Started
          <img className="w-3 sm:w-4" src={arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* --------- Header Right --------- */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          className="w-full max-w-[300px] md:max-w-none md:h-[30vw] object-cover rounded-lg"
          src={header_img}
          alt="Header Image"
        />
      </div>
    </div>
  );
};

export default Header;
