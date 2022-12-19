import React from 'react';
import mobile from '../../../../assets/home-living/mobile.png';
import lamp from '../../../../assets/home-living/lamp.png';
import white from '../../../../assets/home-living/white.png';
import watch from '../../../../assets/home-living/watch.png';
import pastle from '../../../../assets/home-living/pastleblue.png';
import camera from '../../../../assets/home-living/camera.png';
import remote from '../../../../assets/home-living/remote.png';

const HomeLiving = () => {
    return (
        <>
        <div className='flex gap-2 justify-between mx-10 mb-6 mt-12'>
            <h3 className='text-4xl font-bold'>Home and Living</h3>
            <p className='text-lg border-b border-gray-900'>Go to daily deals section</p>
        </div>
        <div class="grid grid-rows-3 lg:grid-flow-col sm:grid-flow-row md:grid-flow-row gap-4 lg:mx-10 sm:mx-2 md:mx-2 my-10">
            <div class="relative lg:row-span-3 lg:col-span-6 sm:col-span-12 bg-[#f9eb71] rounded-lg py-4 px-6">
                <p className='text-3xl font-bold mt-4 ml-4'>Customized Bulbs</p>
                <p className='text-3xl font-bold ml-4'>For Your Love</p>
                <p className='text-lg font-semibold ml-4 mt-4'>Just Price <strong className='text-2xl font-bold text-red-600'>$129.00</strong></p>
                <img className='lg:absolute bottom-0 right-0 w-full hover:scale-110 transition duration-300 ease-in-out' src={lamp} alt="" />
                <button class="absolute bottom-12  bg-teal-900 hover:bg-black text-white font-bold py-3 px-6 rounded-full">SHOP NOW</button>
            </div>
            <div class="col-span-2">
            <div className='grid grid-cols-2'>
                <div className='flex ml-6 justify-between bg-gray-100 px-4 py-6 rounded-lg'>
                    <p className='text-xl font-semibold'>Home and <br /> Living</p>
                    <span className='w-2/5 hover:scale-110 transition duration-300 ease-in-out'><img src={white} alt="" /></span>
                </div>
                <div className='flex ml-6 justify-between bg-gray-100 px-4 py-6 rounded-lg'>
                    <p className='text-xl font-semibold'>Art and<br />Craft</p>
                    <span className='w-2/5 hover:scale-110 transition duration-300 ease-in-out'><img src={mobile} alt="" /></span>
                </div>
            </div>
            </div>
            <div class="col-span-2">
            <div className='grid grid-cols-2'>
                    <div className='flex ml-6 justify-between bg-gray-100 px-4 py-6 rounded-lg'>
                    <p className='text-xl font-semibold'>Fashion and<br />Lifestyle</p>
                    <span className='w-2/5 hover:scale-110 transition duration-300 ease-in-out'><img src={watch} alt="" /></span>
                    </div>
                    <div className='flex ml-6 justify-between bg-gray-100 px-4 py-6 rounded-lg'>
                    <p className='text-xl font-semibold'>Hampers</p>
                    <span className='w-2/5 hover:scale-110 transition duration-300 ease-in-out'><img src={camera} alt="" /></span>
                    </div>
            </div>
            </div>
            <div class="col-span-2">
            <div className='grid grid-cols-2'>
                <div className='flex ml-6 justify-between bg-indigo-200 px-4 py-6 rounded-lg'>
                    <p className='text-xl font-semibold'>Gourmet</p>
                    <span className='w-1/5 hover:scale-110 transition duration-300 ease-in-out'><img src={pastle} alt="" /></span>
                </div>
                <div className='flex ml-6 justify-between bg-gray-100 px-4 py-6 rounded-lg'>
                    <p className='text-xl font-semibold'>Toys and<br />Games</p>
                    <span className='w-3/6 hover:scale-110 transition duration-300 ease-in-out'><img src={remote} alt="" /></span>
                </div>
            </div>
            </div>
        </div>    
    </>   
    );
};

export default HomeLiving;