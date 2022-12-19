import React from 'react';
import bed from '../../../../assets/customization/bed.png';
import chain from '../../../../assets/customization/chian.png';

const Customization = () => {
    return (
        <div className='bg-gray-100 flex my-14 gap-16 px-14 mx-2 rounded-md items-center justify-between'>
            <img src={bed} alt="" />
            <div>
            <div className='flex'>
                <p className='text-3xl font-bold mx-4'>Marvel Customization</p>
                <button className='border-2 border-red-600 rounded-full px-6 py-2 text-3xl font-bold text-red-600'>Discount 20%</button>
            </div>
            <p className='text-gray-500 text-center my-2'>You’re out to play or stepping out to make</p>
            </div>
            <img src={chain} alt="" />
        </div>
    );
};

export default Customization;