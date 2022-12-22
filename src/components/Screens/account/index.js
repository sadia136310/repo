import React from 'react'
import { Routes, Route,Outlet } from 'react-router-dom'
import Dashboard from '../account/accSections/dashboard'
import Orders from '../account/accSections/orders'
import Downloads from '../account/accSections/downloads'
import Addresses from '../account/accSections/addresses'
import Details from '../account/accSections/addresses'
import Logout from '../account/accSections/logout'
import Header from '../account/accSections/Header'
import Options from '../account/accSections/Options'
import './index.css'

function index() {
  return (
    <>
      <div className="account-app">
        <Header />
        <div className="account-options">
          <Options />
          <div className='w-full overflow-auto'>
            <Outlet/>
          </div>
          {/* <Routes>
            <Route path="/info" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="details" element={<Details />} />
            <Route path="logout" element={<Logout />} />
          </Routes> */}
        </div>
      </div>
    </>
  )
}

export default index
