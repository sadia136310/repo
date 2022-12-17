import React from 'react'
import { useState } from 'react'
import './Navbar.css'

const LowerNav = () => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = (event) => {
    setIsActive((current) => !current)
  }

  const [openCategories, setOpenCategories] = React.useState(false)
  const handleOpen = () => {
    setOpenCategories(true)
  }
  const handleClose = () => {
    setOpenCategories(false)
  }

  return (
    <>
      <div>
        <div className="h-fit w-full bg-teal-900 z-10 flex flex-row justify-center px-6 uppercase nav-media">
          {/* <div className='h-12 text-sm font-bold text-white px-6 uppercase nav-item' onMouseOver={handleOpen} onMouseLeave={handleClose}> */}

          <div
            className="h-12 text-sm font-bold text-white px-6 uppercase nav-item categories-button"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
          >
            {/* <span>Categories <span className='gt-symb'>&gt;</span></span> */}
            <div className="nav-item-container">
              <span className>Categories </span>
              <div className="icon-container">
                <iconify-icon
                  inline
                  icon="material-symbols:keyboard-arrow-down"
                  width="25"
                  height="25"
                  flip={isActive ? 'vertical' : ''}
                  onClick={handleClick}
                ></iconify-icon>
              </div>
            </div>
          </div>
          <div className="h-12 text-sm font-bold text-white px-6 uppercase nav-item">
            <div className="nav-item-container">
              <span>Home</span>
            </div>
          </div>
          <div className="h-12 text-sm font-bold text-white px-6 uppercase nav-item">
            <div className="nav-item-container">
              <span>Our Product</span>
            </div>
          </div>
          <div className="h-12 text-sm font-bold text-white px-6 uppercase nav-item">
            <div className="nav-item-container">
              <span>Contact Us</span>
            </div>
          </div>
          <div className="h-12 text-sm font-bold text-white px-6 uppercase nav-item">
            <div className="nav-item-container">
              <span>Careers</span>
            </div>
          </div>
          <div className="h-12 text-sm font-bold text-white  px-6 uppercase nav-item">
            <div className="nav-item-container">
              <span>About Us</span>
            </div>
          </div>
        </div>

        {/* <div className='nav-categories' style={{display: openCategories ? 'block': 'none'}} onMouseEnter={handleOpen} onMouseLeave={handleClose}>
          <div className="first-column">
  
          </div>
        </div> */}
        {/* <div className='container flex flex-row p-14 gap-1' style={{display: openCategories ? 'flex' : 'none', position: 'absolute', backgroundColor: 'white'}} onMouseEnter = {handleOpen} onMouseLeave={handleClose}> */}
        {/* <div className='container flex gap-x-24 flex-rows p-12 flex-wrap' style={{display: openCategories ? 'flex' : 'none', position: 'absolute', backgroundColor: 'white'}} onMouseEnter = {handleOpen} onMouseLeave={handleClose}> */}
        <div
          className="columns- p-14 gap-20 cat-container"
          style={{
            display: openCategories ? 'flex' : 'none',
            position: 'absolute',
            backgroundColor: 'white',
          }}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <div className="container">
            <div className="m-6">
              <span className="font-bold">By Categories</span>
              <div className="mt-4 font-medium">Arts and Crafts</div>
              <div className="mt-1 font-medium">Fashion and Lifestyle</div>
              <div className="mt-1 font-medium">Gourmet</div>
              <div className="mt-1 font-medium">Home and Living</div>
              <div className="mt-1 font-medium">Toys and Games</div>
              <div className="mt-1 font-medium">Hampers</div>
              <div className="mt-1 font-medium">Jewellery</div>
              <div className="mt-1 font-medium">Baked and Brewed</div>
              <div className="mt-1 font-medium">Flower and Bouquets</div>
            </div>
            <div className="m-6">
              <span className="font-bold">By Theme</span>
              <div className="mt-4 font-medium">Disney</div>
              <div className="mt-1 font-medium">Marvel</div>
              <div className="mt-1 font-medium">Netflix</div>
              <div className="mt-1 font-medium">Panda</div>
            </div>
          </div>
          <div className="container">
            <div className="m-6">
              <span className="font-bold">By Relation</span>
              <div className="mt-4 font-medium">For Couples</div>
              <div className="mt-1 font-medium">For Boyfriend</div>
              <div className="mt-1 font-medium">For Brother</div>
              <div className="mt-1 font-medium">For Daughter</div>
              <div className="mt-1 font-medium">For Father</div>
              <div className="mt-1 font-medium">For Friend</div>
              <div className="mt-1 font-medium">For Girlfriend</div>
              <div className="mt-1 font-medium">For Grandfather</div>
              <div className="mt-1 font-medium">For Grandmother</div>
              <div className="mt-1 font-medium">For Husband</div>
              <div className="mt-1 font-medium">For Mother</div>
              <div className="mt-1 font-medium">For Kids</div>
              <div className="mt-1 font-medium">For Sisters</div>
              <div className="mt-1 font-medium">For Son</div>
              <div className="mt-1 font-medium">For Wife</div>
            </div>
          </div>
          <div className="container">
            <div className="m-6">
              <span className="font-bold">By Occasion</span>
              <div className="mt-4 font-medium">Anniversary</div>
              <div className="mt-1 font-medium">Baby Shower</div>
              <div className="mt-1 font-medium">Best Wishes</div>
              <div className="mt-1 font-medium">Birthday</div>
              <div className="mt-1 font-medium">Featured Phones</div>
              <div className="mt-1 font-medium">House Warming</div>
              <div className="mt-1 font-medium">Wedding</div>
              <div className="mt-1 font-medium">Special Day</div>
            </div>
          </div>
        </div>
        {/* {openCategories ? <div className='nav-categories' style={{display: none}}>
          as
        </div> : ""} */}
      </div>
    </>
  )
}

export default LowerNav
