import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="uppercase grid w-3/4 lg:w-2/4 xl:w-2/4 pt-3 bg-gray-600 bg-opacity-20 p-5 rounded-md shadow-sm space-y-4 mb-4">
        <form>
          <div>
            <label className="block font-medium pb-2 text-sm text-gray-300 rounded-lg">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full p-3 bg-white bg-opacity-10 border-gray-600 placeholder-gray-400 text-white focus:border-primary-500 shadow-sm-light rounded-lg"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label className="block py-2 text-sm font-medium  text-gray-300 rounded-lg">
              subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block w-full p-3 bg-white bg-opacity-10 border-gray-600 placeholder-gray-400 text-white focus:border-primary-500 shadow-sm-light rounded-lg"
              placeholder="subject"
              required
            />
          </div>
          <div className="sm:col-span-2 pb-2">
            <label className="block py-2 text-sm font-medium text-gray-300 rounded-lg">
              message
            </label>
            <textarea
              id="message"
              rows="8"
              name="message"
              className="block w-full p-3 text-sm bg-white bg-opacity-10 border-gray-600 placeholder-gray-400 text-white focus:border-primary-500 shadow-sm-light rounded-lg"
              placeholder="Ask for my resume..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-3 text-sm font-medium text-center bg-white text-white bg-opacity-30 rounded-lg sm:w-fit bg-primary-600 hover:bg-opacity-60 focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
