import React from 'react';
import lovecard from '../../../../assets/best-deals/love-card.jpg';
import bags from '../../../../assets/best-deals/bags.jpg';
import wallpic from '../../../../assets/best-deals/wall-pic.jpg';

const BestDeals = () => {
    return (
      <>
        <div className='flex gap-2 justify-between mx-10 mb-12 mt-12'>
            <h3 className='text-4xl font-bold'>Today’s Best Deals</h3>
            <p className='text-lg border-b border-gray-900'>View All</p>
        </div>
        <div class="lg:m-8 sm:m-2 p-6 text-gray-100 flex flex-wrap items-center">                    
        <div class="lg:flex sm:flex:none w-full h-full ">
                                                      
            <div class=" border-2 border-gray-900 rounded-lg lg:w-8/12 sm:w-full md:w-full lg:flex sm:flex-none lg:pr-6 sm:px-2 md:px-2 relative">
                                                      
              <img src={lovecard} class="lg:m-6 sm:m-2 md:m-2 lg:w-96 lg:h-96 sm:w-full sm:h-full bg-white hover:scale-110 transition duration-300 ease-in-out" alt=''/>

              <div className='text-black mt-8'>
                <p className='text-gray-600 text-sm mb-6 ml-2'>POPULAR</p>
                <h3 className='text-xl font-bold ml-2'>4 Heart Shaped Photo Round Couple Frame</h3>
                <h3 className='text-2xl my-4 font-semibold ml-2'><del className='text-gray-400'>₹549.00</del> ₹499.00</h3>
                <p className='mb-6 ml-2'>Quantity</p>
                <div className='grid grid-cols-2 justify-between'>
                <span className='bg-gray-200 text-gray-700 rounded-full text-xl font-semibold mr-2 text-center'>
                <button className='mx-2'>-</button>
                <button className='mx-2'>1</button>
                <button className='mx-2'>+</button>
                </span>
                <button class="bg-teal-900 hover:bg-black text-white font-bold py-3 px-6 rounded-full">
                ADD TO CART
                </button>
                </div>
                <br />
                <button class="bg-teal-900 w-full hover:bg-black text-white font-bold py-3 px-6 my-6 rounded-full">
                BUY NOW
                </button>
              </div>
                              
            </div>
                              
            <div class="lg:w-4/12 sm:w-full md:w-full h-full lg:mx-4 sm:mx-2 md:mx-2 my-4">
                                  
              <div class="flex flex-col w-full h-full">
                                      
                <div class="flex-1 pb-2">
                                          
                  <div class="w-full h-full my-2 flex">
                                              
                    <img src={bags} class="object-cover object-center bg-white hover:scale-110 transition duration-300 ease-in-out" alt='' />
                    
                    <span className='text-xl font-semibold mx-2'>
                    <p className='text-sm my-2 text-gray-700'>⭐⭐⭐⭐⭐</p>
                    <p className='text-sm mb-2 text-gray-700'>FASHION AND LIFESTYLE</p>
                    <p className='text-base font-bold  mb-2 text-black'>Your Name Customized Leather Ladies Wallet</p>
                    <p className='text-xl font-semibold text-black'><del className='text-gray-400'>₹249.00</del> ₹199.00</p>
                    </span>  

                  </div>                          
                </div>
                                      
                <div class="flex-1 pt-2">                       
                  <div class="w-full h-full my-2 flex">                         
                    <img src={wallpic} class="object-cover object-bottom bg-white hover:scale-110 transition duration-300 ease-in-out" alt='' />

                    <span className='text-xl font-semibold mx-2'>
                    <p className='text-sm my-2 text-gray-700'>⭐⭐⭐⭐⭐</p>
                    <p className='text-sm mb-2 text-gray-700'>HOME AND LIVING</p>
                    <p className='text-base font-bold  mb-2 text-black'>12 Photos Memories Photo Frame 16*16</p>
                    <p className='text-xl font-semibold text-black'><del className='text-gray-400'>₹1,569.00</del> ₹1,19</p>
                    </span>
                                          
                  </div>
                                      
                </div>
                                  
              </div>
                              
            </div>
        </div>
        </div>   
      </>
    );
};

export default BestDeals;