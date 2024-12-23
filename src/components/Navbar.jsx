// import React, { useState } from "react";
// import logo from "../assets/images/logo.png";
// import { NavLink, useNavigate } from "react-router-dom";
// import menu_icon from "../assets/images/menu_icon.svg";
// import cross_icon from "../assets/images/cross_icon.png";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="flex items-center justify-between text-sm py-4 px-4 mb-5 border-b border-b-[#ADADAD]">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <img
//           onClick={() => navigate("/")}
//           className="w-[5rem] h-[4rem] cursor-pointer"
//           src={logo}
//           alt=""
//         />
//         <p className="ml-2 font-medium text-lg border-b-gray-400 sm:leading-[1.25rem] hidden lgCustom:block">
//           PEAKPROSYS SOLUTIONS
//         </p>
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden lgCustom:flex items-start gap-5 font-medium">
//         {[
//           { name: "Home", path: "/" },
//           { name: "About", path: "/about" },
//           { name: "Services", path: "/services" },
//           { name: "Career", path: "/career" },
//           { name: "Events", path: "/events" },
//           { name: "Workshop", path: "/workshop" },
//           { name: "Contact", path: "/contact" },
//         ].map((item, index) => (
//           <NavLink key={index} to={item.path}>
//             <li className="py-1 transition-all p-2 rounded-md hover:scale-105 hover:bg-[#2C3892] hover:text-white">
//               {item.name}
//             </li>
//           </NavLink>
//         ))}
//       </ul>

//       {/* Hamburger Icon */}
//       <img
//         onClick={() => setShowMenu(true)}
//         className="w-6 lgCustom:hidden cursor-pointer"
//         src={menu_icon}
//         alt="Menu Icon"
//       />

//       {/* Mobile Menu */}
//       <div
//         className={`fixed ${
//           showMenu ? "top-0 right-0" : "-right-full"
//         } lgCustom:hidden w-full h-full bg-white z-20 transition-all duration-300`}
//       >
//         {/* Mobile Menu Header */}
//         <div className="flex items-center justify-between px-5 py-6 border-b border-[#ADADAD]">
//           <img
//             src={logo}
//             className="w-[5rem] h-[4rem] cursor-pointer"
//             alt="Logo"
//           />
//           <img
//             onClick={() => setShowMenu(false)}
//             src={cross_icon}
//             className="w-7 cursor-pointer"
//             alt="Close Menu"
//           />
//         </div>

//         {/* Mobile Menu Links */}
//         <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
//           {[
//             { name: "Home", path: "/" },
//             { name: "About", path: "/about" },
//             { name: "Services", path: "/services" },
//             { name: "Career", path: "/career" },
//             { name: "Events", path: "/events" },
//             { name: "Workshop", path: "/workshop" },
//             { name: "Contact", path: "/contact" },
//           ].map((item, index) => (
//             <NavLink
//               key={index}
//               onClick={() => setShowMenu(false)}
//               to={item.path}
//             >
//               <p className="px-4 py-2 rounded-full hover:bg-[#2C3892] hover:text-white">
//                 {item.name}
//               </p>
//             </NavLink>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import menu_icon from "../assets/images/menu_icon.svg";
import cross_icon from "../assets/images/cross_icon.png";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between text-sm py-4 px-4 mb-5 border-b border-b-[#ADADAD]">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          onClick={() => navigate("/")}
          className="w-[5rem] h-[4rem] cursor-pointer"
          src={logo}
          alt="Logo"
          alt="Logo"
        />
        <p className="ml-2 font-medium text-lg border-b-gray-400 sm:leading-[1.25rem] hidden lgCustom:block">
          PEAKPROSYS SOLUTIONS
        </p>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lgCustom:flex items-start gap-5 font-semibold">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Services", path: "/services" },
          { name: "Career", path: "/career" },
          { name: "Events", path: "/events" },
          { name: "Workshop", path: "/workshop" },
          { name: "Contact", path: "/contact" },
        ].map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `py-1 transition-all p-2 rounded-md hover:scale-105 ${
                isActive ? "bg-[#2C3892] text-white" : "hover:bg-[#2C3892] hover:text-white"
              }`
            }
          >
            <li>{item.name}</li>
          </NavLink>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <img
        onClick={() => setShowMenu(true)}
        className="w-6 lgCustom:hidden cursor-pointer"
        src={menu_icon}
        alt="Menu Icon"
      />

      {/* Mobile Menu */}
      <div
        className={`fixed ${
          showMenu ? "top-0 right-0" : "-right-full"
        } lgCustom:hidden w-full h-full bg-white z-20 transition-all duration-300`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-5 py-6 border-b border-[#ADADAD]">
          <img
            src={logo}
            className="w-[5rem] h-[4rem] cursor-pointer"
            alt="Logo"
          />
          <img
            onClick={() => setShowMenu(false)}
            src={cross_icon}
            className="w-7 cursor-pointer"
            alt="Close Menu"
          />
        </div>

        {/* Mobile Menu Links */}
        <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Career", path: "/career" },
            { name: "Events", path: "/events" },
            { name: "Workshop", path: "/workshop" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <NavLink
              key={index}
              onClick={() => setShowMenu(false)}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full ${
                  isActive
                    ? "bg-[#2C3892] text-white"
                    : "hover:bg-[#2C3892] hover:text-white"
                }`
              }
            >
              <p>{item.name}</p>
              className={({ isActive }) =>
                `px-4 py-2 rounded-full ${
                  isActive
                    ? "bg-[#2C3892] text-white"
                    : "hover:bg-[#2C3892] hover:text-white"
                }`
              }
            >
              <p>{item.name}</p>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
