import React from 'react';

const ChooseUs = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className='text-3xl font-bold text-gray-800 dark:text-white lg:text-6xl lg:w-full text-center mb-8'>Why Choose Us</h2>
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center">
            <h6 className="text-3xl font-semibold text-gray-800">
            Benefit 1
            </h6>
            <p className="text-gray-600">A short description of the benefit.</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-semibold text-gray-800">
            Benefit 2
            </h6>
            <p className="text-gray-600">A short description of the benefit.</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-semibold text-gray-800">
            Benefit 3
            </h6>
            <p className="text-gray-600">A short description of the benefit.</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-semibold text-gray-800">
            Benefit 4
            </h6>
            <p className="text-gray-600">A short description of the benefit.</p>
          </div>
        </div>
      </div>
    );
};

export default ChooseUs;