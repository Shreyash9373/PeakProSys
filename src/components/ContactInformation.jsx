import React from "react";

const ContactInformation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 flex flex-col justify-center items-center py-10 px-4 mb-5 rounded-lg">
      {/* Page Title */}
      <h2
        className="text-center text-4xl font-bold mb-10 text-indigo-700"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
      >
        Get in Touch
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl">
        {/* Contact Form Section */}
        <div className="bg-white shadow-xl rounded-lg p-8 w-full h-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Send us a Message
          </h3>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Write your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info and Map */}
        <div className="space-y-8 w-full rounded-lg">
          {/* Contact Info */}
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full mr-3">
                  📍
                </span>
                <span className="text-gray-700">
                  Sagar Arcade, Office no.16, 3rd floor, Near Good Luck Cafe, FC Road, Deccan, Pune-411005
                </span>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full mr-3">
                  📧
                </span>
                <span className="text-gray-700">hr@peakprosys.com</span>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full mr-3">
                  📞
                </span>
                <span className="text-gray-700">+91-9309907928 |+91-9403090958 |+91-9422301684</span>
              </li>
            </ul>
          </div>

          {/* Embedded Map */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            {/* <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509619!2d144.9559283153152!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770df8a9a04b6!2s123%20Main%20St%2C%20Melbourne%20VIC%203001%2C%20Australia!5e0!3m2!1sen!2sus!4v1623403004544!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7566.464410509977!2d73.841639!3d18.518406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf87f5d418d1%3A0x985b331461fa1bd4!2sSagar%20Arcade!5e0!3m2!1sen!2sin!4v1734934924099!5m2!1sen!2sin" width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
