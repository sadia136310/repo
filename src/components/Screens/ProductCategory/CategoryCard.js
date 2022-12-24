import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'
import { FaRegEye } from 'react-icons/fa';
import { BiErrorCircle } from 'react-icons/bi';
import { GrCircleQuestion } from 'react-icons/gr';
import { FiShare2 } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';


const CategoryCard = ({category}) => {
    
    return (
        
        <div>
            
          {category.map((Val) => {
            return (
                <div class="lg:-mx-6 lg:flex">

<img class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 lg:h-[36rem]" src={Val.img} alt=""/>

<div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
    <button className='bg-black text-white font-semibold py-2 px-4 rounded-3xl'>SOLD OUT</button>
    <div className='flex'>
    <h1 class="text-3xl font-bold lg:text-3xl lg:w-full mt-2">
        {Val.title}
        </h1>
        <button
        type="button"
        class="border px-4 py-4 bg-white hover:bg-black text-white font-bold text-xs leading-tight uppercase rounded-full shadow-md  focus:ring-0  transition duration-150 ease-in-out flex items-center"
        >
        <StarIcon className="text-stone-400 h-4 w-4" />
        </button>
    </div>
    <div className="flex mt-6 mb-3 items-center justify-end">
    <StarIcon className="text-stone-400 h-4 w-4" />
    <StarIcon className="text-stone-400 h-4 w-4" />
    <StarIcon className="text-stone-400 h-4 w-4" />
    <StarIcon className="text-stone-400 h-4 w-4" />
    <StarIcon className="text-stone-400 h-4 w-4" />
    <p>(0 reviews)</p>
    </div>

    <div className='flex items-center'>
    <FaRegEye className='mr-4'></FaRegEye><p>25 people are viewing this right now</p>
    </div>

    <div className='my-6'>
        <BiErrorCircle></BiErrorCircle>
        <div className='flex items-center mt-2'>
            <GrCircleQuestion></GrCircleQuestion>
            <p className='mx-2'>Ask a Question</p>
            <FiShare2 className='ml-4'></FiShare2>
            <p className='mx-2'>Share</p>
        </div>
    </div>
    <hr />
    <div className='
    flex items-center font-medium'>
        <TbTruckDelivery></TbTruckDelivery>
        <p className='ml-2'>
        Estimated Delivery:
        </p>
        <p className='text-gray-600 ml-4'>
        30 Dec, 2022 - 05 Jan, 2023
        </p>
    </div>

        <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 text-2xl ">
        A short description introducing visitors to your business and the services you offer
        </p>

        <div class="flex items-center justify-between mt-6 lg:justify-start">

            <button title="right arrow" class="py-2 px-10 text-lg text-semibold transition-colors duration-300 border rounded-3xl rtl:-scale-x-100 bg-teal-900 text-white lg:mr-6 hover:bg-black">
            Contact Us
            </button>

        </div>
</div>
            </div>
        
            );
          })}


<nav class="bg-white shadow dark:bg-gray-800 mt-6">
<div class="container text-xl font-semibold flex items-center justify-start p-6 text-gray-600 capitalize dark:text-gray-300">
    <a href="#home" class="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-gray-800 mx-1.5 sm:mx-6">Description</a>

    <a href="#review" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-gray-800 mx-1.5 sm:mx-6">Reviews (0)</a>

    <a href="#question" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-gray-800 mx-1.5 sm:mx-6">Questions</a>

    <a href="#vendor" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-gray-800 mx-1.5 sm:mx-6">Vendor Info</a>
</div>
</nav>
<p className='text-gray-600 text-md mx-32 my-6'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</p>
        </div>
    );
};

export default CategoryCard;