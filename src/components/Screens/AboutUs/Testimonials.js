import React from 'react';
import testmonial from '../../../assets/about-us/testmonial.jpeg';

const Testimonials = () => {
    return (
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white lg:text-6xl lg:w-full text-center">
        Client Testimonials
        </h1>
        <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div class="p-8">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                “A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.”
                </p>

                <div class="flex items-center mt-8 -mx-2">
                    <img class="object-cover mx-2 rounded-full w-14 h-14 ring-2 ring-gray-200" src={testmonial} alt=""/>

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white"><i>Client Name</i></h1>
                    </div>
                </div>
            </div>

            <div class="p-8">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                “A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.”
                </p>

                <div class="flex items-center mt-8 -mx-2">
                    <img class="object-cover mx-2 rounded-full w-14 h-14 ring-2 ring-gray-200" src={testmonial} alt=""/>

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white"><i>Client Name</i></h1>
                    </div>
                </div>
            </div>

            <div class="p-8">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                “A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.”
                </p>

                <div class="flex items-center mt-8 -mx-2">
                    <img class="object-cover mx-2 rounded-full w-14 h-14 ring-2 ring-gray-200" src={testmonial} alt=""/>

                    <div class="mx-2">
                        <h1 class="font-semibold text-gray-800 dark:text-white"><i>Client Name</i></h1>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
};

export default Testimonials;