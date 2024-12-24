import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      number: "01",
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "03",
      title: "Implementation",
      content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="m-5 mb-10">
      {/* <h2 className="text-4xl font-bold mb-6 text-cyan-500">
        Our Working Process
      </h2> */}
      <h2
        className="text-center text-4xl font-bold mb-10 text-indigo-700"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
      >Our Working Process</h2>

      <div className=" flex items-center justify-center px-10">
        <div className="space-y-2 w-full">
          {items.map((item, index) => (
            <div key={index}>
              <div
                className={`flex items-center justify-between p-4 rounded-lg cursor-pointer  transition-all ${activeIndex === index ? "bg-[#01B8EA]" : "bg-gray-200"
                  }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`font-bold text-lg ${activeIndex === index ? "text-black" : "text-gray-300"
                      }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`font-semibold text-xl ${activeIndex === index ? "text-black" : "text-gray-700"
                      }`}
                  >
                    {item.title}
                  </span>
                </div>
                <span className="text-xl font-bold">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && item.content && (
                <div className="p-4 text-gray-700 bg-gray-200 border-t border-gray-300 rounded-b-lg">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Accordion;
