import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useState } from 'react'
import LowerNav from './lowerNav/LowerNav'



const Navbar = () => {
  return (
    <div>
      <div>Code</div>
      <div className="h-full overflow-auto">
        <LowerNav/>
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar