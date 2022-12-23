import React from 'react';
import aboutimage from '../../../assets/about-us/about-image.jpeg';

const Team = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-6xl lg:w-full text-center">Our Team</h2>
        <p className="text-2xl text-center text-gray-700 mt-4 mb-12 mx-20">
        This text briefly introduces visitors to your main services.</p>
        <div className="grid gap-5 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src={aboutimage}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl text-gray-800 font-bold leading-5">Service 1</p>
              </a>
              <p className="mb-4 text-gray-700">
                A short description of the service and how the visitor will benefit from it.
              </p>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src={aboutimage}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl text-gray-800 font-bold leading-5">Service 2</p>
              </a>
              <p className="mb-4 text-gray-700">
                A short description of the service and how the visitor will benefit from it.
              </p>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src={aboutimage}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl text-gray-800 font-bold leading-5">
                Service 3
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                A short description of the service and how the visitor will benefit from it.
              </p>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/" aria-label="Article">
              <img
                src={aboutimage}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl text-gray-800 font-bold leading-5">
                Service 1
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                A short description of the service and how the visitor will benefit from it.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Team;