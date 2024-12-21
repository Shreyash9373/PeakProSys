// import React from 'react';
// import appDevelopmentImg from '../assets/services/app_development.png';
// import webDevelopmentImg from '../assets/services/web_development.png';
// import itConsultancyImg from '../assets/services/it_consultancy.png';
// import corporateTrainingImg from '../assets/services/corporate_training.png';
// import dataAnalyticsImg from '../assets/services/data_analytics.png';
// import qaTestingImg from '../assets/services/qa&testing.png';
// import AnimatedText from './AnimatedText'; // Import the AnimatedText component

// const services = [
//   {
//     title: "Web Development",
//     bgColor: "bg-gray-100",
//     textColor: "text-black",
//     image: webDevelopmentImg,
//     para: "Creating beautiful, responsive websites and web apps that drive your business forward."
//   },
//   {
//     title: "Mobile App Development",
//     bgColor: "bg-lime-300",
//     textColor: "text-black",
//     image: appDevelopmentImg,
//     para: "Building intuitive and high-performing mobile apps for iOS and Android platforms."
//   },
//   {
//     title: "IT consultancy",
//     bgColor: "bg-gray-500",
//     textColor: "text-white",
//     image: itConsultancyImg,
//     para: "Our experience makes us stand out from other web development."
//   },
//   {
//     title: "Corporate Training",
//     bgColor: "bg-gray-100",
//     textColor: "text-black",
//     image: corporateTrainingImg,
//     para: "Training is a pivotal process integral to personal, professional development."
//   },
//   {
//     title: "Data Analytics",
//     bgColor: "bg-lime-300",
//     textColor: "text-black",
//     image: dataAnalyticsImg,
//     para: "Revolutionize your data strategy with our solutions."
//   },
//   {
//     title: "QA & Testing",
//     bgColor: "bg-gray-500",
//     textColor: "text-white",
//     image: qaTestingImg,
//     para: "Turn to our experts to perform multi-stage testing of your software."
//   },
// ];

// const Services = () => {
//   return (
//     <div className="py-10 px-6">
//       <h2 className="text-4xl font-bold mb-6 text-lime-500">Services</h2>
//       <p className="mb-8 text-gray-600">
//         At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
//       </p>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-auto">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`
//               p-10 rounded-lg shadow-xl ${service.bgColor} 
//               flex items-start justify-between 
//               transform transition-transform duration-300 ease-in-out 
//               hover:scale-105 hover:shadow-2xl
//             `}
//           >
//             <div>
//               {/* Use AnimatedText component here */}
//               <AnimatedText service={service} />
//               <p className="mb-4">{service.para}</p>
//               <a href="#" className="text-xl text-lime-500 font-medium flex items-center">
//                 Learn more <span className="ml-1 text-xl">→</span>
//               </a>
//             </div>
//             <img
//               src={service.image}
//               alt={service.title}
//               className="w-24 h-28 object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;



// import React, { useEffect, useRef } from "react";
// import Typed from "typed.js";
// import appDevelopmentImg from '../assets/services/app_development.png';
// import webDevelopmentImg from '../assets/services/web_development.png';
// import itConsultancyImg from '../assets/services/it_consultancy.png';
// import corporateTrainingImg from '../assets/services/corporate_training.png';
// import dataAnalyticsImg from '../assets/services/data_analytics.png';
// import qaTestingImg from '../assets/services/qa&testing.png';

// const services = [
//   {
//     title: "Web Development",
//     bgColor: "bg-gray-100",
//     textColor: "text-black",
//     image: webDevelopmentImg,
//     para: "Creating beautiful, responsive websites and web apps that drive your business forward."
//   },
//   {
//     title: "Mobile App Development",
//     bgColor: "bg-lime-300",
//     textColor: "text-black",
//     image: appDevelopmentImg,
//     para: "Building intuitive and high-performing mobile apps for iOS and Android platforms."
//   },
//   {
//     title: "IT consultancy",
//     bgColor: "bg-gray-500",
//     textColor: "text-white",
//     image: itConsultancyImg,
//     para: "Our experience makes us stand out from other web development."
//   },
//   {
//     title: "Corporate Training",
//     bgColor: "bg-gray-100",
//     textColor: "text-black",
//     image: corporateTrainingImg,
//     para: "Training is a pivotal process integral to personal, professional development."
//   },
//   {
//     title: "Data Analytics",
//     bgColor: "bg-lime-300",
//     textColor: "text-black",
//     image: dataAnalyticsImg,
//     para: "Revolutionize your data strategy with our solutions."
//   },
//   {
//     title: "QA & Testing",
//     bgColor: "bg-gray-500",
//     textColor: "text-white",
//     image: qaTestingImg,
//     para: "Turn to our experts to perform multi-stage testing of your software."
//   },
// ];

// const Services = () => {
//   const createTypedOptions = (title) => ({
//     strings: [title],
//     typeSpeed: 150,
//     backSpeed: 150,
//     backDelay: 800,
//     loop: true,
//     showCursor: false,
//   });

//   const AnimatedText = ({ service }) => {
//     const typedElementRef = useRef(null);

//     useEffect(() => {
//       if (typedElementRef.current) {
//         const options = createTypedOptions(service.title);
//         const typed = new Typed(typedElementRef.current, options);
//         return () => {
//           typed.destroy();
//         };
//       }
//     }, [service.title]);

//     return (
//       <h3 className={`text-4xl text-lime-400 font-semibold mb-2 ${service?.textColor || "text-black"}`}>
//         <span ref={typedElementRef}></span>
//       </h3>
//     );
//   };

//   return (
//     <div className="py-10 px-6">
//       <h2 className="text-4xl font-bold mb-6 text-lime-500">Services</h2>
//       <p className="mb-8 text-gray-600">
//         At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
//       </p>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-auto">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`
//               p-10 rounded-lg shadow-xl ${service.bgColor} 
//               flex items-start justify-between 
//               transform transition-transform duration-300 ease-in-out 
//               hover:scale-105 hover:shadow-2xl
//             `}
//           >
//             <div>
//               <AnimatedText service={service} />
//               <p className="mb-4">{service.para}</p>
//               <a href="#" className="text-xl text-lime-500 font-medium flex items-center">
//                 Learn more <span className="ml-1 text-xl">→</span>
//               </a>
//             </div>
//             <img
//               src={service.image}
//               alt={service.title}
//               className="w-24 h-28 object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;




import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import appDevelopmentImg from '../assets/services/app_development.png';
import webDevelopmentImg from '../assets/services/web_development.png';
import itConsultancyImg from '../assets/services/it_consultancy.png';
import corporateTrainingImg from '../assets/services/corporate_training.png';
import dataAnalyticsImg from '../assets/services/data_analytics.png';
import qaTestingImg from '../assets/services/qa&testing.png';

const services = [
  {
    title: "Web Development",
    bgColor: "bg-cyan-400",
    textColor: "text-black",
    image: webDevelopmentImg,
    para: "Creating beautiful, responsive websites and web apps that drive your business forward."
  },
  {
    title: "Mobile App Development",
    bgColor: "bg-blue-200",
    textColor: "text-black",
    image: appDevelopmentImg,
    para: "Building intuitive and high-performing mobile apps for iOS and Android platforms."
  },
  {
    title: "IT consultancy",
    bgColor: "bg-indigo-400",
    textColor: "text-white",
    image: itConsultancyImg,
    para: "Our experience makes us stand out from other web development."
  },
  {
    title: "Corporate Training",
    bgColor: "bg-cyan-400",
    textColor: "text-black",
    image: corporateTrainingImg,
    para: "Training is a pivotal process integral to personal, professional development."
  },
  {
    title: "Data Analytics",
    bgColor: "bg-blue-200",
    textColor: "text-black",
    image: dataAnalyticsImg,
    para: "Revolutionize your data strategy with our solutions."
  },
  {
    title: "QA and Testing",
    bgColor: "bg-indigo-400",
    textColor: "text-white",
    image: qaTestingImg,
    para: "Turn to our experts to perform multi-stage testing of your software."
  },
];

const Services = () => {
  const AnimatedText = ({ service }) => {
    const typedElementRef = useRef(null);

    useEffect(() => {
      if (typedElementRef.current) {
        const typed = new Typed(typedElementRef.current, {
          strings: [service.title],
          typeSpeed: 200,
          showCursor: false,
        });
        return () => {
          typed.destroy();
        };
      }
    }, [service.title]);

    return (
      <h3 className={`text-4xl text-black font-semibold  mb-2 ${service?.textColor || "text-black"}`}>
        <span ref={typedElementRef}></span>
      </h3>
    );
  };

  return (
    <div className="py-10 px-6 ">
      <h2
        className="text-4xl font-bold mb-10 text-indigo-700"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
      >Services</h2>
      {/* <h2 className="text-4xl font-bold mb-6 bg-indigo-700 w-40 p-2 text-white rounded-2xl shadow-xl ">Services</h2> */}
      {/* <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#274699] to-[#22D3EE] rounded-xl  p-2 text-white">Services</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 rounded-lg shadow-xl ${service.bgColor} flex flex-col lg:flex-row items-start justify-between transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl`}
          >
            <div className="flex-1 w-2/3">
              <AnimatedText service={service} />
              <p className="mb-4">{service.para}</p>
              <a href="#" className="text-xl text-black font-medium flex items-center">
                Learn more <span className="ml-1 text-xl">→</span>
              </a>
            </div>
            <img
              src={service.image}
              alt={service.title}
              className="w-24 h-28 object-contain mt-4 lg:mt-0 lg:ml-6 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
