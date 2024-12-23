import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 mx-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#01B8ea] to-[#3871C1] rounded-lg text-white py-10 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">About Us</h1>
        <p className="text-lg md:text-xl mb-8">Welcome to Peakprosys Solutions Pvt Ltd, a company rooted in innovation and committed to empowering businesses and professionals. Our journey began in 2004 as Prime Computer Services and in 2024, we evolved into Peakprosys to better reflect our expanded vision and services. Founded by Mr. Rajendra Kale, an engineer and a leader with over 30 years of experience in diverse fields of technology and business management, and Mr. Nitin Kale, highly Qualified IT professional with over 20 years of experience in the industry and training, Peakprosys was established with a clear mission to bridge the gap between available employment opportunities and the employable youth, both nationally and globally. Founders’ vision is to train the next generation, equipping them with the skills necessary to thrive in a rapidly changing technological and economic landscape, and to nurture them as both entrepreneurs and skilled professionals. At Peakprosys, we offer dynamic solutions tailored to the ever-evolving needs of businesses and individuals. From software development to professional training programs to make youth placeable, our services are designed to foster growth and ensure sustainability for Startups as well as well-established businesses. We believe in empowering the workforce of tomorrow through practical training, ensuring they are ready to meet the demands of a competitive global marketplace.</p>
        <a
          href="#team"
          className="px-8 py-3 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
        >
          Meet the Team
        </a>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
          “Our mission at Peakprosys is to empower businesses and professionals by making them placeable and self-employable through training, developing, monitoring and handholding to start, sustain and grow new businesses with a focus on skills, strategies, and support necessary to excel in a competitive market. We are dedicated to delivering high-quality training programs, expert setup services, and continuous assistance that foster sustenance, growth, and innovation.”
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">John Doe</h3>
              <p className="text-gray-600 mb-4">CEO & Founder</p>
              <p className="text-gray-600 mb-4">John has over 15 years of experience in tech and leads the company with a focus on innovation and client satisfaction.</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
              <p className="text-gray-600 mb-4">Lead Developer</p>
              <p className="text-gray-600 mb-4">Jane is an expert in frontend technologies and leads our development team with a passion for creating seamless user experiences.</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Michael Brown</h3>
              <p className="text-gray-600 mb-4">Chief Operating Officer</p>
              <p className="text-gray-600 mb-4">Michael manages the day-to-day operations and ensures smooth collaboration across departments to meet client expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p>We strive to stay ahead of the curve by continuously adopting the latest technologies and fostering a culture of innovation.</p>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Integrity</h3>
              <p>We believe in doing the right thing, even when no one is watching, and we act with honesty and transparency in all our interactions.</p>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
              <p>We are committed to delivering exceptional results by maintaining high standards and continuously improving our services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Us in Our Mission</h2>
        <p className="text-lg text-gray-600 mb-6">Ready to make an impact? Reach out to us today to start your journey with PeakProSys Solutions.</p>
        <a
          href="/contact"
          className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
