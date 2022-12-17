import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useState } from 'react'
import LowerNav from './lowerNav/LowerNav'

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col h-screen ">
        <div className='hidden xl:block'>
          <LowerNav />
        </div>
        <div className="h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Navbar
