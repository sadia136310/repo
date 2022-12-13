import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div>Code</div>
      <div className="h-full overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar
