import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Screens/Navbar/Navbar'
import Home from '../Screens/Home/Home'
import Categories from "../Screens/Categories/Categories"
import Cart from '../Screens/Cart/Cart'
import OurProducts from '../Screens/OurProduct/OurProducts'
import Wishlist from '../Screens/ProductWishlist/Wishlist'

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="categories" element={<Categories />}></Route>
          <Route path="products" element={<OurProducts />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="wishlist" element={<Wishlist />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default Router
