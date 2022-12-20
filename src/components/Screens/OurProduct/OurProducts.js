import React,{useState,useEffect} from 'react'
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
  return (
    <div>
      <div>
        <h3 className="text-4xl font-bold text-center my-14">Shop</h3>
      </div>
      <div className="grid lg:grid-cols-5 mx-14">
      {/* <Filter/> */}
        <div>
          <div className="lg:block md:hidden sm:hidden">
            <h1 className="text-4xl font-bold mb-8">Filters</h1>

            <div className="flex justify-between mb-5">
              <h4 className="text-lg font-bold">Categories</h4>
              <span className="text-3xl mx-7">+</span>
            </div>

            <div className="flex justify-between mb-5">
              <h4 className="text-lg font-bold">Colors</h4>
              <span className="text-3xl mx-7">+</span>
            </div>
            <div className="flex justify-between mb-5">
              <h4 className="text-lg font-bold">Types</h4>
              <span className="text-3xl mx-7">+</span>
            </div>
            <div className="flex justify-between mb-5">
              <h4 className="text-lg font-bold">Price</h4>
              <span className="text-3xl mx-7">+</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:col-span-4 md:col-span-3 sm:col-span-2">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>

      <div id="load-more" className="text-center ml-20 pl-20 mt-10">
        <button class="bg-teal-900 hover:bg-black text-white font-semibold py-3 px-8 rounded-full">
          LOAD MORE
        </button>
      </div>
      <Selection/>
    </div>
  )
}

export default OurProducts
