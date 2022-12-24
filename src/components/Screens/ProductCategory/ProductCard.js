import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ProductCard = ({ item, filterCategory}) => {

  

    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:col-span-4 md:col-span-3 sm:col-span-2'>
          {item.map((Val) => {
            return (
              <div className="hover:border h-90 border-black rounded p-4 bg-base-100"
                key={Val.id}
              >
                <div className="h-50 w-50 relative">
                <div class="flex space-x-2 justify-center">
                    <button
                    type="button"
                    class=" absolute top-3.5 left-2.5 px-3 py-2 bg-teal-900 text-white font-bold text-xs leading-tight uppercase rounded-lg shadow-md  focus:ring-0  transition duration-150 ease-in-out flex items-center"
                    >
                    -100%
                    </button>
                    <button
                    type="button"
                    class=" absolute top-3.5 right-2.5 px-4 py-4 bg-white hover:bg-black text-white font-bold text-xs leading-tight uppercase rounded-full shadow-md  focus:ring-0  transition duration-150 ease-in-out flex items-center"
                    >
                    <StarIcon className="text-stone-400 h-4 w-4" />
                    </button>
                </div>
                <img src={Val.img} alt="" />
                </div>
          <div className="h-40">
          <div className="flex mt-6 mb-3">
            <StarIcon className="text-stone-400 h-4 w-4" />
            <StarIcon className="text-stone-400 h-4 w-4" />
            <StarIcon className="text-stone-400 h-4 w-4" />
            <StarIcon className="text-stone-400 h-4 w-4" />
            <StarIcon className="text-stone-400 h-4 w-4" />
          </div>
          <small className="text-stone-400">{Val.title}</small>
          <p className="font-bold">{Val.desc}</p>
          <div className="flex mb-9 gap-2">
            <p>{Val.previous_price}</p>
            <p>{Val.current_price}</p>
          </div>
          </div>
          <div className="text-center">
            <Link to={`${Val.id}`}
            class="bg-stone-100 hover:bg-black text-white font-semibold py-3 px-14 rounded-full"
            onClick={() => filterCategory(Val)}
            >
            LOAD MORE
            </Link>
            </div>
          </div>
        
            );
          })}
          
        </div>
    );
};

export default ProductCard;