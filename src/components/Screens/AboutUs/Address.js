import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter } from 'react-icons/ai';
import placeholder from '../../../assets/about-us/placeholder.png';

const Address = () => {
    return (
        <div className='flex mx-10 items-center justify-between my-6'>
            <div className='lg:flex items-center justify-between sm:flex-none md:flex-none'>
                <img className='w-50 h-36 mr-6' src={placeholder} alt="" />
                <p className='text-lg text-gray-800'>123-456-7890 | 123 Main Street, New York, NY 10001
 | Mon-Fri 9:00AM - 5:00PM</p>
            </div>
            <div className='flex text-2xl font-bold'><GrFacebookOption className='mx-6'></GrFacebookOption><AiOutlineTwitter></AiOutlineTwitter></div>
        </div>
    );
};

export default Address;