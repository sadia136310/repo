import React from 'react';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { AiOutlineShop } from 'react-icons/ai';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { IoPricetagsOutline } from 'react-icons/io5';

const Selection = () => {
    return (

        <div className='bg-gray-200 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 py-10 my-14 gap-16 px-14'>
            <div className='flex gap-5'>
            <AiOutlineShop className='text-7xl font-black'></AiOutlineShop>
                <div>
                    <h1 className='text-lg font-bold pb-2'>High Quality Selection</h1>
                    <p className='text-md sm:hidden md:hidden lg:block'>Total Product Quality Control For Peace Of Mind</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <IoPricetagsOutline className='text-7xl font-bold'></IoPricetagsOutline>
                <div>
                    <h1 className='text-lg font-bold pb-2'>Affordable Prices</h1>
                    <p className='text-md sm:hidden md:hidden lg:block'>Factory Direct Prices For Maximum Savings</p>
                </div>
            </div>
            <div className='flex gap-5'>
            <RiSecurePaymentLine className='text-7xl'></RiSecurePaymentLine>
                <div>
                    <h1 className='text-lg font-bold pb-2'>Secure Payment</h1>
                    <p className='text-md sm:hidden md:hidden lg:block'>Fast, Reliable Delivery From Global  Warehouses
                    </p>
                </div>
            </div>
            <div className='flex gap-5'>
                <HiOutlineEmojiHappy className='text-5xl font-black'></HiOutlineEmojiHappy>
                <div>
                    <h1 className='text-lg font-bold pb-2'>
                        Worry Free</h1>
                    <p className='text-md sm:hidden md:hidden lg:block'>Instant Access To 
                        Professional Support</p>
                </div>
            </div>
        </div>
    );
};

export default Selection;