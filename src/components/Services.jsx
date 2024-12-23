import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import appDevelopmentImg from "../assets/services/app_development.png";
import webDevelopmentImg from "../assets/services/web_development.png";
import itConsultancyImg from "../assets/services/it_consultancy.png";
import corporateTrainingImg from "../assets/services/corporate_training.png";
import dataAnalyticsImg from "../assets/services/data_analytics.png";
import qaTestingImg from "../assets/services/qa&testing.png";

const services = [
  {
    title: "Web Development",
    bgColor: 'bg-[#01B8EA]',
    textColor: "text-black",
    image: webDevelopmentImg,
    para: "Creating beautiful, responsive websites and web apps that drive your business forward.",
  },
  {
    title: "Mobile App Development",
    bgColor: 'bg-[#3871C1]',
    textColor: "text-black",
    image: appDevelopmentImg,
    para: "Building intuitive and high-performing mobile apps for iOS and Android platforms.",
  },
  {
    title: "IT Consultancy",
    bgColor: 'bg-[#3871C1]',
    textColor: "text-white",
    image: itConsultancyImg,
    para: "Our experience makes us stand out from other web development consultancies.",
  },
  {
    title: "Corporate Training",
    bgColor: 'bg-[#01B8EA]',
    textColor: "text-black",
    image: corporateTrainingImg,
    para: "Training is a pivotal process integral to personal and professional development.",
  },
  {
    title: "Data Analytics",
    bgColor: 'bg-[#01B8EA]',
    textColor: "text-black",
    image: dataAnalyticsImg,
    para: "Revolutionize your data strategy with our cutting-edge solutions.",
  },
  {
    title: "QA and Testing",
    bgColor: 'bg-[#3871C1]',
    textColor: "text-white",
    image: qaTestingImg,
    para: "Turn to our experts to perform multi-stage testing of your software.",
  },
  {
    title: "Artifical Intelligence",
    bgColor: "bg-cyan-400",
    textColor: "text-black",
    image: qaTestingImg,
    para: "Turn to our experts to perform multi-stage testing of your software.",
  },
  {
    title: "Digital Marketing",
    bgColor: "bg-blue-200",
    textColor: "text-black",
    image: qaTestingImg,
    para: "Turn to our experts to perform multi-stage testing of your software.",
  }
];

const Services = () => {
  const [isInView, setIsInView] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const AnimatedText = ({ service }) => {
    const typedElementRef = useRef(null);

    useEffect(() => {
      if (typedElementRef.current && isInView) {
        const typed = new Typed(typedElementRef.current, {
          strings: [service.title],
          typeSpeed: 30,
          showCursor: false,
        });
        return () => {
          typed.destroy();
        };
      }
    }, [service.title, isInView]);

    return (
      <h3
        className={`text-4xl font-semibold mb-2 ${
          service?.textColor || "text-black"
        }`}
      >
        <span ref={typedElementRef}></span>
      </h3>
    );
  };

  return (
    <div className="py-10 px-6" ref={servicesRef}>
      <h2
        className="text-center text-4xl font-bold mb-10 text-indigo-700"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
      >
        Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 rounded-lg shadow-xl ${service.bgColor} flex flex-col lg:flex-row items-start justify-between transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl`}
          >
            <div className="flex-1">
              <AnimatedText service={service} />
              <p className="mb-4">{service.para}</p>
              <a
                href="#"
                className="text-xl font-medium flex items-center hover:underline"
              >
                Learn more <span className="ml-1 text-xl">→</span>
              </a>
            </div>
            <img
              src={service.image}
              alt={service.title}
              className="w-24 h-28 object-contain mt-4 lg:mt-0 lg:ml-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
