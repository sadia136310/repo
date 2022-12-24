import React, { useState } from "react";
import Data from "./Data";
import Buttons from "./Buttons";
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard';
import '../OurProduct/Sections/FilterSide/./filterCss.css';

const ProductCategory = () => {

  //product category item filtering
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  //button reload
  const [req,setReq]=useState(0);
  const newProd=()=>{
      let x=req+1;
      setReq(x);
  }

  //collapsing button + and -
  const [click1, setClick1] = useState(0)
  const [click2, setClick2] = useState(0)
  const [click3, setClick3] = useState(0)
  const [click4, setClick4] = useState(0)

  const handleCategoryClick = () => {
    if (click1 === 0) {
      setClick1(1)
    } else {
      setClick1(0)
    }
  }
  const handleColorClick = () => {
    if (click2 === 0) {
      setClick2(1)
    } else {
      setClick2(0)
    }
  }
  const handleTypesClick = () => {
    if (click3 === 0) {
      setClick3(1)
    } else {
      setClick3(0)
    }
  }

  const handlePriceClick = () => {
    if (click4 === 0) {
      setClick4(1)
    } else {
      setClick4(0)
    }
  }

    return (
      <div className="mb-16 overflow-x-hidden">
      <div>
        <h3 className="text-4xl font-bold text-center my-14">Shop</h3>
      </div>
          <div className="grid lg:grid-cols-5 mx-14">
          <div className="lg:block md:hidden sm:hidden">
          <div className="h-full selection:bg-black selection:text-white overflow-visible">
          <div className="w-full text-3xl font-bold">Filters</div>
          <div className="mt-8 w-full">
          <button
              type="button"
              className="collapsible font-bold"
              onClick={handleCategoryClick}
            >
              <div className="text-lg flex w-full justify-end">
                <div className="w-4/5">Categories</div>
                <div className="mx-auto w-1/5">{click1 ? '-' : '+'}</div>
              </div>
          </button>
            {click1 ? (
            <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
            ) : (
              <div></div>
            )}
          </div>
          <div className="w-full mt-8">
            <button
              type="button"
              className="collapsible font-bold"
              onClick={handleColorClick}
            >
              <div className="text-lg flex w-full justify-end">
                <div className="w-4/5">Colors</div>
                <div className="mx-auto w-1/5">{click2 ? '-' : '+'}</div>
              </div>
            </button>

            {click2 ? (
              <div class=" w-4/5 content flex flex-wrap">
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=grass-green"
                    className="text-xl  font-xs "
                  >
                    Grass Green
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=pink"
                    className="text-xl  font-xs "
                  >
                    Pink
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=red"
                    className="text-xl  font-xs "
                  >
                    Red
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=sky-blue"
                    className="text-xl  font-xs "
                  >
                    Sky Blue
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=blue"
                    className="text-xl  font-xs "
                  >
                    Blue
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=dark-grey"
                    className="text-xl  font-xs "
                  >
                    Dark Grey
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=green"
                    className="text-xl  font-xs "
                  >
                    Green
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=grey"
                    className="text-xl  font-xs "
                  >
                    Grey
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=white"
                    className="text-xl  font-xs "
                  >
                    white
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=black"
                    className="text-xl  font-xs "
                  >
                    Black
                  </Link>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="mt-8">
            <button
              type="button"
              className="collapsible font-bold"
              onClick={handleTypesClick}
            >
              <div className="text-lg flex w-full justify-end">
                <div className="w-4/5">Types</div>
                <div className="mx-auto w-1/5">{click3 ? '-' : '+'}</div>
              </div>
            </button>

            {click3 ? (
              <div class="content flex w-4/5 flex-wrap">
                <div className="p-1.5 border w-max m-1 rounded border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_types=eu-plug"
                    className="text-xl  font-xs "
                  >
                    UK Plug
                  </Link>
                </div>
                <div className="p-1.5 border w-max m-1 rounded border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_types=uk-plug"
                    className="text-xl  font-xs "
                  >
                    EU Plug
                  </Link>
                </div>
                <div className="p-1.5 border w-max m-1 rounded border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_types=us-plug"
                    className="text-xl  font-xs "
                  >
                    US Plug
                  </Link>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <div className="bg-stone-200 w-3/4 h-full"></div>
          </div>

          <div className="mt-8">
            <button
              type="button"
              className="collapsible font-bold"
              onClick={handlePriceClick}
            >
              <div className="text-lg flex w-full justify-end">
                <div className="w-4/5">Price</div>
                <div className="mx-auto w-1/5">{click4 ? '-' : '+'}</div>
              </div>
            </button>

            {click4 ? (
              <div class="content">
                <div className="mt-4">
                  <Link
                    to="/shop-2/?filtering=1&filter_product_cat=15"
                    className="font-medium text-neutral-500"
                  >
                    <div className="w-max text-black border-b-2 border-black">
                      All
                    </div>
                  </Link>
                </div>
                <div className="mt-4">
                  <Link
                    to="/shop-2/?filtering=1&filter_product_cat=15"
                    className="font-medium text-neutral-500"
                  >
                    <div className="hover-underline-animation hover:text-black">
                      &#x20b9;0.00 - &#x20b9;240.00
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link
                    to="/shop-2/?filtering=1&filter_product_cat=15"
                    className="font-medium text-neutral-500"
                  >
                    <div className="hover-underline-animation hover:text-black">
                      &#x20b9;240.00 - &#x20b9;480.00
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link
                    to="/shop-2/?filtering=1&filter_product_cat=15"
                    className="font-medium text-neutral-500"
                  >
                    <div className="hover-underline-animation hover:text-black">
                      &#x20b9;480.00 - &#x20b9;720.00
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link
                    to="/shop-2/?filtering=1&filter_product_cat=15"
                    className="font-medium text-neutral-500"
                  >
                    <div className="hover-underline-animation hover:text-black">
                      &#x20b9;720.00 - &#x20b9;960.00
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link
                    to="/shop-2/?filtering=1&filter_product_cat=15"
                    className="font-medium text-neutral-500"
                  >
                    <div className="hover-underline-animation hover:text-black">
                      &#x20b9;960.00+
                    </div>
                  </Link>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:col-span-4 md:col-span-3 sm:col-span-2">
          {
            <ProductCard item={item}></ProductCard>
          }
          {req?
            <ProductCard key={item.id} item={item}></ProductCard>
          :null}
          {req===2?
            <ProductCard key={item.id} item={item}></ProductCard>
          :null}
          {/* <ProductCard item={item}  /> */}
          </div>
          </div>
          <div id="load-more" className="text-center ml-20 pl-20 mt-10">
          <button class="bg-teal-900 hover:bg-black text-white font-semibold py-3 px-8 rounded-full" onClick={newProd}>
            LOAD MORE
          </button>
          </div>
      </div>
    );
};

export default ProductCategory;