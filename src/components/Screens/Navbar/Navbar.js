import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useState } from 'react'
import LowerNav from './lowerNav/LowerNav'
import LoginContainer from '../Login&Register/login/LoginContainer'

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col h-screen ">
        <div className="hidden xl:block">
          <LowerNav />
          <LoginContainer />
        </div>
        <div className="h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Navbar
