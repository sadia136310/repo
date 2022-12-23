import React from 'react';
import aboutimage from '../../../assets/about-us/about-image.jpeg';
import Address from './Address';
import ChooseUs from './ChooseUs';
import Team from './Team';
import Testimonials from './Testimonials';
import Visitor from './Visitor';

const AboutUs = () => {
    return (
        <div>
        <h2 className='text-center text-4xl font-bold my-16'>About Us</h2>
        <div class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
            <div class="lg:-mx-6 lg:flex lg:items-center">

                <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">

                    <h1 class="text-3xl font-bold text-gray-800 dark:text-white lg:text-6xl lg:w-full">
                    This Headline Grabs Visitors’ Attention
                    </h1>

                    <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 text-2xl ">
                    A short description introducing visitors to your business and the services you offer
                    </p>

                    <div class="flex items-center justify-between mt-6 lg:justify-start">

                        <button title="right arrow" class="py-2 px-10 text-lg text-semibold transition-colors duration-300 border rounded-3xl rtl:-scale-x-100 bg-teal-900 text-white lg:mr-6 hover:bg-black">
                        Contact Us
                        </button>

                    </div>
                </div>

                <img class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={aboutimage} alt=""/>
            </div>
        </div>
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
                <img
                className="mt-6 object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-36 w-28 sm:w-48 xl:w-36"
                src={aboutimage}
                alt=""
                />
                <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-64 sm:w-32 xl:w-80"
                src={aboutimage}
                alt=""
                />
            </div>
            <div className="px-3">
                <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-64 sm:w-64 xl:w-80"
                src={aboutimage}
                alt=""
                />
                <img
                className="my-6 object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-36 sm:w-32 xl:w-36"
                src={aboutimage}
                alt=""
                />
            </div>
            
            </div>

            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg mx-20">
            <div className="max-w-xl mb-6">
                <h2 className="text-3xl mb-4 font-bold text-gray-800 dark:text-white lg:text-6xl lg:w-full">
                About Us
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                Use this section to describe your company and the services you offer. You could share your company’s story and details about why you are in business. The goal is to create a connection with the visitor and give them confidence to work with you.
                </p>
            </div>
            <div>
            <button title="right arrow" class="py-2 px-10 text-lg text-semibold transition-colors duration-300 border rounded-3xl rtl:-scale-x-100 bg-teal-900 text-white lg:mr-6 hover:bg-black">
            Learn More
            </button>
            </div>
            </div>

        </div>
        </div>
        <Team></Team>
        <ChooseUs></ChooseUs>
        <Testimonials></Testimonials>
        <Visitor></Visitor>
        <Address></Address>
        </div>
    );
};

export default AboutUs;