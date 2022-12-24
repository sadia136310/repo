import React, { useState } from "react";
import Data from "./Data";
import CategoryCard from './CategoryCard';

const CategoryDetailes = () => {
  //product category item filtering
  const [category, setCategory] = useState(Data);
  const filterCategory = (curid) => {
    const newItem = Data.filter((newVal) => {
      return newVal.id === curid;
    });
    setCategory(newItem);
  };


    return (
        <div class="container px-6 py-10 mx-auto my-10">
            
            {
                <CategoryCard 
                filterCategory={filterCategory}
                category={category}
                key={category.curid}
                ></CategoryCard>
            }
        </div>
    );
};

export default CategoryDetailes;