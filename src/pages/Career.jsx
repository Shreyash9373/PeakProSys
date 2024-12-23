import React, { useState } from 'react';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 mx-10">
      {/* Job Listings Section */}
      <section id="available-positions" className="py-16 px-4 md:px-8">
        <div className="container mx-auto text-center">
        <h2
        className="text-center text-4xl font-bold mb-10 text-indigo-700"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
      >
        Available Positions
      </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Job Card 1 */}
            <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:translate-y-2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Internship</h3>
              <ul className="list-none text-left text-gray-600 mb-6 space-y-2">
                <li><strong>Basic Education:</strong> Any Graduate or Under Gra</li>
                <li><strong>Experience:</strong> Fresher</li>
                <li><strong>Location:</strong> F.C. Road,Deccan Pune</li>
                <li><strong>Last Date:</strong> 30th December 2024</li>
              </ul>
              <button className="absolute bottom-6 right-6 px-6 py-2 bg-blue-600 text-white rounded-full transition-transform transform hover:scale-105 hover:bg-blue-700">
                Apply Now
              </button>
            </div>

            {/* Job Card 2 */}
            <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:translate-y-2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Marketing</h3>
              <ul className="list-none text-left text-gray-600 mb-6 space-y-2">
                <li><strong>Basic Education:</strong> BBA/MBA ,Marketing of Courses</li>
                <li><strong>Experience:</strong> 2 years and above</li>
                <li><strong>Location:</strong> F.C. Road,Deccan pune</li>
                <li><strong>Last Date:</strong> 30th December 2024</li>
              </ul>
              <button className="absolute bottom-6 right-6 px-6 py-2 bg-blue-600 text-white rounded-full transition-transform transform hover:scale-105 hover:bg-blue-700">
                Apply Now
              </button>
            </div>

            {/* Job Card 3 */}
            <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:translate-y-2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sales Executives</h3>
              <ul className="list-none text-left text-gray-600 mb-6 space-y-2">
                <li><strong>Basic Education:</strong> BBA/MBA ,IT institute Experience</li>
                <li><strong>Experience:</strong> 2 years & above</li>
                <li><strong>Location:</strong> F.C. Road,Deccan pune</li>
                <li><strong>Last Date:</strong> 30th December 2024</li>
              </ul>
              <button className="absolute bottom-6 right-6 px-6 py-2 bg-blue-600 text-white rounded-full transition-transform transform hover:scale-105 hover:bg-blue-700">
                Apply Now
              </button>
            </div>

            {/* Job Card 4 */}
            <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:translate-y-2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Digital Marketing</h3>
              <ul className="list-none text-left text-gray-600 mb-6 space-y-2">
                <li><strong>Basic Education:</strong> BBA,MBA,Digital Markeing</li>
                <li><strong>Experience:</strong> 0 to 2 years</li>
                <li><strong>Location:</strong> F.C. Road,Deccan pune</li>
                <li><strong>Last Date:</strong> 30th December 2024</li>
              </ul>
              <button className="absolute bottom-6 right-6 px-6 py-2 bg-blue-600 text-white rounded-full transition-transform transform hover:scale-105 hover:bg-blue-700">
                Apply Now
              </button>
            </div>

            {/* Job Card 5 */}
            <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:translate-y-2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">HR Executive</h3>
              <ul className="list-none text-left text-gray-600 mb-6 space-y-2">
                <li><strong>Basic Education:</strong> BBA,MBA,HR all activities</li>
                <li><strong>Experience:</strong> 2 years & above</li>
                <li><strong>Location:</strong> F.C. Road,Deccan pune</li>
                <li><strong>Last Date:</strong> 30th December 2024</li>
              </ul>
              <button className="absolute bottom-6 right-6 px-6 py-2 bg-blue-600 text-white rounded-full transition-transform transform hover:scale-105 hover:bg-blue-700">
                Apply Now
              </button>
            </div>

            {/* Job Card 6 */}
            <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:translate-y-2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Admin</h3>
              <ul className="list-none text-left text-gray-600 mb-6 space-y-2">
                <li><strong>Basic Education:</strong> Communication</li>
                <li><strong>Experience:</strong> 2 years & above</li>
                <li><strong>Location:</strong> F.C. Road,Deccan pune</li>
                <li><strong>Last Date:</strong> 30th December 2024</li>
              </ul>
              <button className="absolute bottom-6 right-6 px-6 py-2 bg-blue-600 text-white rounded-full transition-transform transform hover:scale-105 hover:bg-blue-700">
                Apply Now
              </button>
            </div>

            {/* Job Card 7 */}
            <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:translate-y-2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Office Assistant</h3>
              <ul className="list-none text-left text-gray-600 mb-6 space-y-2">
                <li><strong>Basic Education:</strong> Communication,Computer use</li>
                <li><strong>Experience:</strong> 0 to 2 years</li>
                <li><strong>Location:</strong> F.C. Road,Deccan pune</li>
                <li><strong>Last Date:</strong> 30th December 2024</li>
              </ul>
              <button className="absolute bottom-6 right-6 px-6 py-2 bg-blue-600 text-white rounded-full transition-transform transform hover:scale-105 hover:bg-blue-700">
                Apply Now
              </button>
            </div>

            {/* Job Card 8 */}
            <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:translate-y-2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Developer</h3>
              <ul className="list-none text-left text-gray-600 mb-6 space-y-2">
                <li><strong>Basic Education:</strong> Full-Stack</li>
                <li><strong>Experience:</strong> 2 years & above</li>
                <li><strong>Location:</strong> F.C. Road,Deccan pune</li>
                <li><strong>Last Date:</strong> 30th December 2024</li>
              </ul>
              <button className="absolute bottom-6 right-6 px-6 py-2 bg-blue-600 text-white rounded-full transition-transform transform hover:scale-105 hover:bg-blue-700">
                Apply Now
              </button>
            </div>

            {/* Job Card 9 */}
            <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:translate-y-2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">App Developer</h3>
              <ul className="list-none text-left text-gray-600 mb-6 space-y-2">
                <li><strong>Basic Education:</strong> Flutter</li>
                <li><strong>Experience:</strong> 2 years & above</li>
                <li><strong>Location:</strong> F.C. Road,Deccan pune</li>
                <li><strong>Last Date:</strong> 30th December 2024</li>
              </ul>
              <button className="absolute bottom-6 right-6 px-6 py-2 bg-blue-600 text-white rounded-full transition-transform transform hover:scale-105 hover:bg-blue-700">
                Apply Now
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
