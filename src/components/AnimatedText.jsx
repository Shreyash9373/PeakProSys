import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const AnimatedText = ({ service }) => {
  const typedElementRef = useRef(null); // Create a reference for the DOM element

  useEffect(() => {
    // Ensure the element is available before initializing Typed
    if (typedElementRef.current) {
      const options = {
        strings: ["Full Stack Web Developer", "Mechanical Engineer", "Trader"],
        typeSpeed: 150,
        backSpeed: 150,
        backDelay: 800,
        loop: true,
        showCursor: false, // Remove the '|' cursor
      };

      // Initialize Typed with the ref element
      const typed = new Typed(typedElementRef.current, options);

      // Cleanup Typed instance when the component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []); // Empty dependency array ensures it runs once after the first render

  return (
    <h3 className={`text-4xl text-lime-400 font-semibold mb-2 ${service?.textColor || "text-black"}`}>
      {service?.title || ""}{" "}
      <span className="multiple-text" ref={typedElementRef}></span> {/* Attach the ref here */}
    </h3>
  );
};

export default AnimatedText;
