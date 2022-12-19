import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useState } from 'react'
import LowerNav from './lowerNav/LowerNav'
import LoginContainer from '../Login&Register/login/LoginContainer'
import SideCart from './SideCart/sideCart'

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col h-screen ">
        <div className="hidden xl:block">
          <LowerNav />
          {/* <LoginContainer /> */}
        </div>
          {/* <SideCart/> */}
        <div className="h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Navbar
