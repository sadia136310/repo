import React from 'react';
import { Link } from 'react-router-dom';
import mug from '../../../../assets/price-campaign/mug.png';
import pinkbag from '../../../../assets/price-campaign/pink-bag.png';
import redbox from '../../../../assets/price-campaign/red-box.png';

const PriceCard = () => {
    return (
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">

        <div class="bg-pink-200 text-black w-full lg:max-w-full lg:flex drop-shadow-lg rounded-b lg:rounded-b-none lg:rounded-r">

          <div class="p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="font-bold text-2xl mb-2">New Deals at Best Prices</div>
              <p class="text-base">From ₹199.00</p>
            </div>
            <Link className='transition-colors duration-500 transform pr-6 py-2 border-b border-gray-900 text-left hover:scale-125 hover:ml-4'>Browse Deals</Link>
          </div>
          <div class="h-56 lg:h-auto lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-no-repeat hover:scale-110 transition duration-300 ease-in-out" style={{background: `url(${pinkbag})`, backgroundRepeat: 'no-repeat'}} title="Mountain">
          </div>
        </div>


        <div class="bg-red-400 text-white w-full lg:max-w-full lg:flex drop-shadow-lg rounded-b lg:rounded-b-none lg:rounded-r">

          <div class="p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
             
              <div class="font-bold text-2xl mb-2">Christmas Specials</div>
              <p class="text-base">From ₹299.00</p>
              </div>
              <Link className='transition-colors duration-500 transform pr-6 py-2 border-b border-white text-left hover:scale-125 hover:ml-4'>Christmas Sale</Link>
          </div>
          <div class="h-56 lg:h-auto lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-no-repeat hover:scale-110 transition duration-300 ease-in-out" style={{background: `url(${redbox})`, backgroundRepeat: 'no-repeat'}} title="River">
          </div>

        </div>


        <div class="bg-black text-white w-full lg:max-w-full lg:flex drop-shadow-lg rounded-b lg:rounded-b-none lg:rounded-r">

          <div class="p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="font-bold text-2xl mb-2">Customized Cups</div>
              <p class="text-base">From ₹179.00</p>
            </div>
            <Link className='transition-colors duration-500 transform pr-6 py-2 border-b border-white text-left hover:scale-125 hover:ml-4'>Shop Now</Link>
          </div>
          <div class="h-56 lg:h-auto lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-no-repeat hover:scale-110 transition duration-300 ease-in-out" style={{background: `url(${mug})`, backgroundRepeat: 'no-repeat'}} title="Forest">
          </div>
        </div>
      </div>
    
    );
};

export default PriceCard;