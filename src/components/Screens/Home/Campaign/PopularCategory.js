import React from 'react';
import gallery from '../../../../assets/popular-categories/gallery.jpg';
import huddi from '../../../../assets/popular-categories/huddi.jpg';
import hampers from '../../../../assets/popular-categories/bottle.jpg';
import cup from '../../../../assets/popular-categories/cup.jpg';

const PopularCategory = () => {
    return (
      <>
      <div className='flex gap-2 justify-between mx-10 mb-6 mt-12'>
      <h3 className='text-4xl font-bold'>Popular Categories</h3>
      <p className='text-lg border-b border-gray-900'>View All Categories</p>
      </div>

      <div class="p-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-24 lg:mx-16 sm:mx-2">

        <img src={gallery}
        class="rounded-lg lg:w-32 sm:w-full md:w-full hover:scale-110 transition duration-300 ease-in-out"
        alt="Avatar"
        />

        <img
        src={huddi}         
        class="rounded-lg lg:w-32 sm:w-full md:w-full hover:scale-110 transition duration-300 ease-in-out"
        alt="Avatar"
        />

        <img 
        src={hampers}
        class="rounded-lg lg:w-32 sm:w-full md:w-full hover:scale-110 transition duration-300 ease-in-out"
        alt="Avatar"
        />

        <img
        src={cup}
        class="rounded-lg lg:w-32 sm:w-full md:w-full hover:scale-110 transition duration-300 ease-in-out"
        alt="Avatar"
        />
        
        <img
        src={cup}
        class="rounded-lg lg:w-32 sm:w-full md:w-full hover:scale-110 transition duration-300 ease-in-out"
        alt="Avatar"
        />
      </div>
      </>
    );
};

export default PopularCategory;