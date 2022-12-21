import React from 'react';
import Profile from "../assets/profile-icon.png"

const Header = () => {
  return (
    <>
     <div className="user__details">
        <img src={Profile} alt="profile pic" />
        <div className="username">
            <span>Hello!</span>
            <p>stunhaul</p>
        </div>
     </div>
    </>
  )
}

export default Header
