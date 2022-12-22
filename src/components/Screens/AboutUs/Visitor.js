import React from 'react';

const Visitor = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-6xl lg:w-full">
              A Title to Turn the Visitor Into a Lead
              </h2>
              <p className="text-base text-gray-700 md:text-lg mt-6 lg:mx-32 sm:mx-2 md:mx-32">
              Use this short paragraph to explain how you will deliver this benefit to the visitor if they decide to work with you.
              </p>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-10 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-teal-900 hover:bg-black focus:shadow-outline focus:outline-none"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Visitor;