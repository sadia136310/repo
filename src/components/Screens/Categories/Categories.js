import React from 'react';
import Category from './Sections/Category';
import Selection from './Sections/Selection';
import Slider from './Sections/Slider';


const Categories = () => {
    return (
       <div className='secondary-content'>
            <Slider/>
            <Category/>
            <Selection/>
       </div> 
    )
};

export default Categories;