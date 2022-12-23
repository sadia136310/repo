import React, { useState, useEffect } from 'react'
import Filter from './Sections/FilterSide/Filter'
import Product from './Sections/Products/Product'
import Selection from '../WebsiteFooter/Selection'

const OurProducts = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('fakedb.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
const [req,setReq]=useState(0);
const newProd=()=>{
    let x=req+1;
    setReq(x);
}

  return (
    <div className='overflow-x-hidden'>
      <div>
        <h3 className="text-4xl font-bold text-center my-14">Shop</h3>
      </div>
      <div className="grid lg:grid-cols-5 mx-14">
        <div>
          <div className="lg:block md:hidden sm:hidden">
            <Filter />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:col-span-4 md:col-span-3 sm:col-span-2">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
          {req?products.map((product) => (
            <Product key={product.id} product={product}></Product>
          )):null}
          {req===2?products.map((product) => (
            <Product key={product.id} product={product}></Product>
          )):null}
        </div>
      </div>
      <div id="load-more" className="text-center ml-20 pl-20 mt-10">
        <button class="bg-teal-900 hover:bg-black text-white font-semibold py-3 px-8 rounded-full" onClick={newProd}>
          LOAD MORE
        </button>
      </div>
      <Selection />
    </div>
  )
}

export default OurProducts
