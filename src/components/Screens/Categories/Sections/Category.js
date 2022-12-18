import React from 'react';
import img1 from '../../../../images/6.png';
import img2 from '../../../../images/7.jpg';
import img3 from '../../../../images/3.jpg';
import img4 from '../../../../images/4.jpg';
import img5 from '../../../../images/5.png';

const Category = () => {
    return (
        <div className='container mx-auto flex justify-center'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-x-52 font-semibold'>
                <div className="card card-compact  bg-base-100 mb-10 pb-16">
                    <figure><img className='h-40 w-40 rounded' src={img1} alt="Shoes" /></figure>

                    <h2 className="text-center text-xl pt-5">Uncategorized</h2>

                </div>
                <div className="card card-compact  bg-base-100  mb-10 pb-16">
                    <figure><img className='h-40 w-40 rounded' src={img2} alt="Shoes" /></figure>
                    <h2 className="text-center text-xl pt-5">Popular</h2>

                </div>
                <div className="card card-compact  bg-base-100  mb-10 pb-16">
                    <figure><img className='h-40 w-40 rounded' src={img3} alt="Shoes" /></figure>
                    <h2 className="text-center text-xl pt-5">Clutch</h2>

                </div>
                <div className="card card-compact  bg-base-100  mb-10 pb-16">
                    <figure><img className='h-40 w-40 rounded' src={img4} alt="Shoes" /></figure>
                    <h2 className="text-center text-xl pt-5">By Occasion</h2>

                </div>
                <div className="card card-compact  bg-base-100  mb-10 pb-16">
                    <figure><img className='h-40 w-40 rounded' src={img5} alt="Shoes" /></figure>
                    <h2 className="text-center text-xl pt-5">By Gender</h2>

                </div>
            </div>
        </div>
    );
};

export default Category;