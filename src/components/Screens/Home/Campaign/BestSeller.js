import React from 'react';
import clutchbag from '../../../../assets/best-selling/clutch-bag.jpg';
import neon9 from '../../../../assets/best-selling/neon-light-9.jpeg';
import neon8 from '../../../../assets/best-selling/neon-light-8.jpeg';
import neon7 from '../../../../assets/best-selling/neon-light-7.jpeg';
import neon6 from '../../../../assets/best-selling/neon-light-6.jpeg';
import neon5 from '../../../../assets/best-selling/neon-light-5.jpeg';
import neon4 from '../../../../assets/best-selling/neon-light-4.jpeg';
import neon3 from '../../../../assets/best-selling/neon-light3.jpeg';
import neon2 from '../../../../assets/best-selling/neon-light2.jpeg';
import neon1 from '../../../../assets/best-selling/neon-light.jpeg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const BestSeller = () => {
    return (
      <>
        <div className='flex gap-2 justify-between mx-10 mb-6 mt-16 py-10'>
            <h3 className='text-4xl font-bold'>Top 20 Best Seller</h3>
            <p className='text-lg border-b border-gray-900'>Go to daily deals section</p>
        </div>
      <div className='lg:mx-32 sm:mx-2 md:mx-2'>
      <Swiper
      spaceBetween={24}
      breakpoints={{
          481: {
            // width: 576,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 5,
          },
        }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>        
      <div className="relative overflow-hidden transition-shadow duration-300 bg-white rounded mx-2 hover:border hover:border-black">
          <a href="/" aria-label="Article">
            <img
              src={clutchbag}
              className="object-cover lg:w-52 lg:h-52 sm:w-full sm:h-full md:w-full md:h-full rounded hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </a>
          <button className='absolute top-2 left-2 bg-black text-white rounded-md px-2 font-semibold'>SOLD OUT</button>
          <div className="pt-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
            ANNIVERSARY
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Clutch Bag</p>
            </a>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <p className="font-semibold">⭐⭐⭐⭐⭐</p>
              </a>
            </div>
            <button class="bg-gray-200 hover:bg-black text-white text-center font-bold py-1 w-full">SEE MORE</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded mx-2 hover:border hover:border-black">
          <a href="/" aria-label="Article">
            <img
              src={neon9}
              className="object-cover lg:w-52 lg:h-52 sm:w-full sm:h-full md:w-full md:h-full rounded hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </a>
          <button className='absolute top-2 left-2 bg-black text-white rounded-md px-2 font-semibold'>SOLD OUT</button>
          <div className="pt-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Neon Light
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Neon Light</p>
            </a>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <p className="font-semibold">⭐⭐⭐⭐⭐</p>
              </a>
            </div>
            <button class="bg-gray-200 hover:bg-black text-white text-center font-bold py-1 w-full">SEE MORE</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded mx-2 hover:border hover:border-black">
          <a href="/" aria-label="Article">
            <img
              src={neon8}
              className="object-cover lg:w-52 lg:h-52 sm:w-full sm:h-full md:w-full md:h-full rounded hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </a>
          <button className='absolute top-2 left-2 bg-black text-white rounded-md px-2 font-semibold'>SOLD OUT</button>
          <div className="pt-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Neon Light
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Neon Light</p>
            </a>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <p className="font-semibold">⭐⭐⭐⭐⭐</p>
              </a>
            </div>
            <button class="bg-gray-200 hover:bg-black text-white text-center font-bold py-1 w-full">SEE MORE</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded mx-2 hover:border hover:border-black">
          <a href="/" aria-label="Article">
            <img
              src={neon7}
              className="object-cover lg:w-52 lg:h-52 sm:w-full sm:h-full md:w-full md:h-full rounded hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </a>
          <button className='absolute top-2 left-2 bg-black text-white rounded-md px-2 font-semibold'>SOLD OUT</button>
          <div className="pt-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Neon Light
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Neon Light</p>
            </a>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <p className="font-semibold">⭐⭐⭐⭐⭐</p>
              </a>
            </div>
            <button class="bg-gray-200 hover:bg-black text-white text-center font-bold py-1 w-full">SEE MORE</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded mx-2 hover:border hover:border-black">
          <a href="/" aria-label="Article">
            <img
              src={neon6}
              className="object-cover lg:w-52 lg:h-52 sm:w-full sm:h-full md:w-full md:h-full rounded hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </a>
          <button className='absolute top-2 left-2 bg-black text-white rounded-md px-2 font-semibold'>SOLD OUT</button>
          <div className="pt-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Neon Light
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Neon Light</p>
            </a>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <p className="font-semibold">⭐⭐⭐⭐⭐</p>
              </a>
            </div>
            <button class="bg-gray-200 hover:bg-black text-white text-center font-bold py-1 w-full">SEE MORE</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded mx-2 hover:border hover:border-black">
          <a href="/" aria-label="Article">
            <img
              src={neon5}
              className="object-cover lg:w-52 lg:h-52 sm:w-full sm:h-full md:w-full md:h-full rounded hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </a>
          <button className='absolute top-2 left-2 bg-black text-white rounded-md px-2 font-semibold'>SOLD OUT</button>
          <div className="pt-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Neon Light
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Neon Light</p>
            </a>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <p className="font-semibold">⭐⭐⭐⭐⭐</p>
              </a>
            </div>
            <button class="bg-gray-200 hover:bg-black text-white text-center font-bold py-1 w-full">SEE MORE</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded mx-2 hover:border hover:border-black">
          <a href="/" aria-label="Article">
            <img
              src={neon4}
              className="object-cover lg:w-52 lg:h-52 sm:w-full sm:h-full md:w-full md:h-full rounded hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </a>
          <button className='absolute top-2 left-2 bg-black text-white rounded-md px-2 font-semibold'>SOLD OUT</button>
          <div className="pt-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Neon Light
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Neon Light</p>
            </a>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <p className="font-semibold">⭐⭐⭐⭐⭐</p>
              </a>
            </div>
            <button class="bg-gray-200 hover:bg-black text-white text-center font-bold py-1 w-full">SEE MORE</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded mx-2 hover:border hover:border-black">
          <a href="/" aria-label="Article">
            <img
              src={neon3}
              className="object-cover lg:w-52 lg:h-52 sm:w-full sm:h-full md:w-full md:h-full rounded hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </a>
          <button className='absolute top-2 left-2 bg-black text-white rounded-md px-2 font-semibold'>SOLD OUT</button>
          <div className="pt-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Neon Light
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Neon Light</p>
            </a>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <p className="font-semibold">⭐⭐⭐⭐⭐</p>
              </a>
            </div>
            <button class="bg-gray-200 hover:bg-black text-white text-center font-bold py-1 w-full">SEE MORE</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded mx-2 hover:border hover:border-black">
          <a href="/" aria-label="Article">
            <img
              src={neon2}
              className="object-cover lg:w-52 lg:h-52 sm:w-full sm:h-full md:w-full md:h-full rounded hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </a>
          <button className='absolute top-2 left-2 bg-black text-white rounded-md px-2 font-semibold'>SOLD OUT</button>
          <div className="pt-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Neon Light
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Neon Light</p>
            </a>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <p className="font-semibold">⭐⭐⭐⭐⭐</p>
              </a>
            </div>
            <button class="bg-gray-200 hover:bg-black text-white text-center font-bold py-1 w-full">SEE MORE</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded mx-2 hover:border hover:border-black">
          <a href="/" aria-label="Article">
            <img
              src={neon1}
              className="object-cover lg:w-52 lg:h-52 sm:w-full sm:h-full md:w-full md:h-full rounded hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </a>
          <button className='absolute top-2 left-2 bg-black text-white rounded-md px-2 font-semibold'>SOLD OUT</button>
          <div className="pt-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              Neon Light
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">Neon Light</p>
            </a>
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <p className="font-semibold">⭐⭐⭐⭐⭐</p>
              </a>
            </div>
            <button class="bg-gray-200 hover:bg-black text-white text-center font-bold py-1 w-full">SEE MORE</button>
          </div>
      </div>
      </SwiperSlide>
      </Swiper>
      </div>
      </>
    );
};

export default BestSeller;