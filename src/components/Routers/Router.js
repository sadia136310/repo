import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Screens/Navbar/Navbar'
import Home from '../Screens/Home/Home'
import Categories from '../Screens/Categories/Categories'
import Cart from '../Screens/Cart/Cart'
import OurProducts from '../Screens/OurProduct/OurProducts'
import Wishlist from '../Screens/ProductWishlist/Wishlist'
import AboutUs from '../Screens/AboutUs/AboutUs'

import Dashboard from '../Screens/account/accSections/dashboard'
import Orders from '../Screens/account/accSections/orders'
import Downloads from '../Screens/account/accSections/downloads'
import Addresses from '../Screens/account/accSections/addresses'
import Details from '../Screens/account/accSections/details'
import Logout from '../Screens/account/accSections/logout'
import Index from '../Screens/account'
import "../Screens/account/index.css"

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
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="account/" element={<Index />}>
            <Route path="info" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="details" element={<Details />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default Router
