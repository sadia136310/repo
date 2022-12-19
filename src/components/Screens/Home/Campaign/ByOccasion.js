import React from 'react';
import lamp from '../../../../assets/home-living/lamp.png';
import frame from '../../../../assets/occation/frame.png';


const ByOccasion = () => {
    return (
        <>
        <div className='flex gap-2 justify-between mx-10 my-6'>
            <h3 className='text-4xl font-bold'>By Ocaasion</h3>
            <p className='text-lg border-b border-gray-900'>Go to daily deals section</p>
        </div>
        <hr />
           <div class="grid grid-rows-2 lg:grid-flow-col sm:grid-flow-row md:grid-flow-row gap-4 lg:mx-10 sm:mx-2 md:mx-2 mt-10 mb-20">
            <div class="relative lg:row-span-3 lg:col-span-6 sm:col-span-12 bg-[#f9eb71] rounded-lg py-4 px-6">
                <p className='text-3xl font-bold mt-4 ml-4'>Customized Bulbs</p>
                <p className='text-3xl font-bold ml-4'>For Your Love</p>
                <p className='text-lg font-semibold ml-4 mt-4'>Just Price <strong className='text-2xl font-bold text-red-600'>$129.00</strong></p>
                <img className='lg:absolute bottom-0 right-0 w-full hover:scale-110 transition duration-300 ease-in-out' src={lamp} alt="" />
                <button class="absolute bottom-12  bg-teal-900 hover:bg-black text-white font-bold py-3 px-6 rounded-full">SHOP NOW</button>
            </div>
            <div class="col-span-2">
            <div className='grid grid-cols-2'>
                <div className='py-6 rounded-lg'>
                    <span><img className='hover:scale-110 transition duration-300 ease-in-out' src={frame} alt="" /></span>
                    <p className='text-md font-semibold text-center mr-10'>Home and Living</p>
                </div>
                <div className='py-6 rounded-lg'>
                    <span><img className='hover:scale-110 transition duration-300 ease-in-out' src={frame} alt="" /></span>
                    <p className='text-md font-semibold text-center mr-10'>Art and Craft</p>
                </div>
            </div>
            </div>
            <div class="col-span-2">
            <div className='grid grid-cols-2'>
                    <div className='py-6 rounded-lg'>
                    <span><img className='hover:scale-110 transition duration-300 ease-in-out' src={frame} alt="" /></span>
                    <p className='text-md font-semibold text-center mr-10 '>Fashion and Lifestyle</p>
                    </div>
                    <div className='py-6 rounded-lg'>
                    <span><img className='hover:scale-110 transition duration-300 ease-in-out' src={frame} alt="" /></span>
                    <p className='text-md font-semibold text-center mr-10'>Hampers</p>
                    </div>
            </div>
            </div>
           </div>
        </>    
    );
};

export default ByOccasion;