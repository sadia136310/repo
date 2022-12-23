import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import LoginContainer from '../../Login&Register/login/LoginContainer'
import './Navbar.css'

const LowerNav = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(false)
  const handleClick = (event) => {
    setIsActive((current) => !current)
  }

  const hide_nav_ = (event) => {
    document.getElementById('nav-media').style.display = 'none'
    document.getElementById('showbtn').style.display = 'block'
    document.getElementById('closebtn').style.display = 'none'
    document.getElementById('nav_upper').style.display = 'block'
  }
  const show_nav_ = (event) => {
    document.getElementById('nav-media').style.display = 'flex'
    document.getElementById('showbtn').style.display = 'none'
    document.getElementById('closebtn').style.display = 'block'
    document.getElementById('nav_upper').style.display = 'none'
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
      <div className="header_1">
        <a href="" className="header_1_1">
          <iconify-icon
            icon="mdi:instagram"
            width="25"
            height="25"
          ></iconify-icon>
          <p>100k Followers</p>
        </a>
        <a href="" className="header_1_1">
          <iconify-icon
            icon="mdi:facebook"
            width="25"
            height="25"
          ></iconify-icon>
          <p>300k Followers</p>
        </a>
        <div className="header_1_main">
          <p>Good Things Wrapped 😍</p>
        </div>
      </div>
      <hr></hr>
      <div className="header_2" id="nav_upper">
        <div className="header_2_1">
          <a href="">
            <img
              src="https://stunhaul.com/wp-content/uploads/2022/11/stunhaul-rectangular-logo-green-png-482x161.png"
              className="logo dark-logo ll-image ll-init ll-loadstarted ll-loaded"
              alt="StunHaul"
              width="241"
              height="80.5"
              data-src="https://stunhaul.com/wp-content/uploads/2022/11/stunhaul-rectangular-logo-green-png-482x161.png"
            />
          </a>
        </div>
        <div></div>

        <div className="search">
          <div>
            <select
              name="product_cat"
              id="product_cat"
              className="search-select"
            >
              <option value="0">All Categories</option>
              <option className="level-0" value="uncategorized">
                Uncategorized
              </option>
              <option className="level-0" value="by-gender">
                By Gender
              </option>
              <option className="level-1" value="for-her">
                For Her
              </option>
              <option className="level-0" value="by-occasion">
                By Occasion
              </option>
              <option className="level-1" value="anniversary">
                Anniversary
              </option>
              <option className="level-1" value="birthday">
                Birthday
              </option>
              <option className="level-1" value="special-days">
                Special Days
              </option>
              <option className="level-1" value="wedding">
                Wedding
              </option>
              <option className="level-0" value="popular">
                Popular
              </option>
              <option className="level-1" value="categories">
                By Category
              </option>
              <option className="level-2" value="fashion-and-lifestyle">
                Fashion and Lifestyle
              </option>
              <option className="level-2" value="home-and-living">
                Home and Living
              </option>
              <option className="level-1" value="frame">
                Frame
              </option>
              <option className="level-1" value="neon">
                Neon Light
              </option>
              <option className="level-0" value="clutch">
                Clutch
              </option>
            </select>
          </div>
          <input
            className="search-txt"
            type="text"
            name=""
            placeholder="Type to search"
          />

          <a className="search-btn" href="#">
            <i className="fas fa-search"></i>
          </a>
        </div>
        <div className="icons_nav">
          <div className="icon_nav_1">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5156 12.875C15.9479 12.875 17.1719 13.3958 18.1875 14.4375C19.2292 15.4531 19.75 16.6771 19.75 18.1094V19.125C19.75 19.6458 19.5677 20.0885 19.2031 20.4531C18.8385 20.8177 18.3958 21 17.875 21H4.125C3.60417 21 3.16146 20.8177 2.79688 20.4531C2.43229 20.0885 2.25 19.6458 2.25 19.125V18.1094C2.25 16.6771 2.75781 15.4531 3.77344 14.4375C4.8151 13.3958 6.05208 12.875 7.48438 12.875C7.82292 12.875 8.31771 12.9792 8.96875 13.1875C9.64583 13.3958 10.3229 13.5 11 13.5C11.6771 13.5 12.3542 13.3958 13.0312 13.1875C13.7083 12.9792 14.2031 12.875 14.5156 12.875ZM17.875 19.125V18.1094C17.875 17.1979 17.5365 16.4167 16.8594 15.7656C16.2083 15.0885 15.4271 14.75 14.5156 14.75C14.4375 14.75 14.0208 14.8542 13.2656 15.0625C12.5365 15.2708 11.7812 15.375 11 15.375C10.2188 15.375 9.45052 15.2708 8.69531 15.0625C7.96615 14.8542 7.5625 14.75 7.48438 14.75C6.57292 14.75 5.77865 15.0885 5.10156 15.7656C4.45052 16.4167 4.125 17.1979 4.125 18.1094V19.125H17.875ZM14.9844 10.6094C13.8906 11.7031 12.5625 12.25 11 12.25C9.4375 12.25 8.10938 11.7031 7.01562 10.6094C5.92188 9.51562 5.375 8.1875 5.375 6.625C5.375 5.0625 5.92188 3.73438 7.01562 2.64062C8.10938 1.54688 9.4375 1 11 1C12.5625 1 13.8906 1.54688 14.9844 2.64062C16.0781 3.73438 16.625 5.0625 16.625 6.625C16.625 8.1875 16.0781 9.51562 14.9844 10.6094ZM13.6562 3.96875C12.9271 3.23958 12.0417 2.875 11 2.875C9.95833 2.875 9.07292 3.23958 8.34375 3.96875C7.61458 4.69792 7.25 5.58333 7.25 6.625C7.25 7.66667 7.61458 8.55208 8.34375 9.28125C9.07292 10.0104 9.95833 10.375 11 10.375C12.0417 10.375 12.9271 10.0104 13.6562 9.28125C14.3854 8.55208 14.75 7.66667 14.75 6.625C14.75 5.58333 14.3854 4.69792 13.6562 3.96875Z"
                fill="#000000"
              ></path>
            </svg>
            <div className="icon_nav_1_1">
              <div className="arrow"></div>
              <div className="icon_nav_info">Log In</div>
            </div>
          </div>
          <div className="icon_nav_2" onClick={() => navigate('wishlist')}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8906 3.4C18.1615 2.775 17.3151 2.38438 16.3516 2.22813C15.388 2.07188 14.4245 2.15 13.4609 2.4625C12.5234 2.775 11.7031 3.28281 11 3.98594C10.2969 3.28281 9.46354 2.775 8.5 2.4625C7.5625 2.15 6.61198 2.07188 5.64844 2.22813C4.6849 2.38438 3.83854 2.775 3.10938 3.4C2.17188 4.20729 1.54688 5.17083 1.23438 6.29063C0.921875 7.30625 0.908854 8.34792 1.19531 9.41563C1.48177 10.4573 1.97656 11.3427 2.67969 12.0719L9.51562 19.025C9.93229 19.4417 10.4271 19.65 11 19.65C11.5729 19.65 12.0677 19.4417 12.4844 19.025L19.3203 12.0719C20.0234 11.3427 20.5182 10.4573 20.8047 9.41563C21.0911 8.34792 21.0911 7.30625 20.8047 6.29063C20.4661 5.17083 19.8281 4.20729 18.8906 3.4ZM17.9922 10.7438L11.1172 17.6969C11.0391 17.801 10.9609 17.801 10.8828 17.6969L4.00781 10.7438C3.53906 10.249 3.20052 9.65 2.99219 8.94688C2.8099 8.21771 2.82292 7.50156 3.03125 6.79844C3.23958 6.04323 3.66927 5.39219 4.32031 4.84531C5.07552 4.22031 5.96094 3.94688 6.97656 4.025C8.01823 4.10313 8.90365 4.51979 9.63281 5.275L11 6.64219L12.3672 5.275C13.0964 4.51979 13.9688 4.10313 14.9844 4.025C16.026 3.94688 16.9245 4.22031 17.6797 4.84531C18.3307 5.39219 18.7604 6.04323 18.9688 6.79844C19.1771 7.50156 19.1771 8.21771 18.9688 8.94688C18.7865 9.65 18.4609 10.249 17.9922 10.7438Z"
                fill="black"
              ></path>
            </svg>
            <div className="icon_nav_1_2">
              <div className="arrow"></div>
              <div className="icon_nav_info">Whish List</div>
            </div>
          </div>
          <div className="icon_nav_3">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.95 6H19.7V17.875C19.7 18.7344 19.3875 19.4635 18.7625 20.0625C18.1635 20.6875 17.4344 21 16.575 21H5.325C4.46563 21 3.72344 20.6875 3.09844 20.0625C2.49948 19.4635 2.2 18.7344 2.2 17.875V6H5.95C5.95 4.61979 6.43177 3.44792 7.39531 2.48438C8.3849 1.49479 9.56979 1 10.95 1C12.3302 1 13.5021 1.49479 14.4656 2.48438C15.4552 3.44792 15.95 4.61979 15.95 6ZM13.1375 3.8125C12.5385 3.1875 11.8094 2.875 10.95 2.875C10.0906 2.875 9.34844 3.1875 8.72344 3.8125C8.12448 4.41146 7.825 5.14062 7.825 6H14.075C14.075 5.14062 13.7625 4.41146 13.1375 3.8125ZM17.825 17.875V7.875H15.95V9.4375C15.95 9.69792 15.8589 9.91927 15.6766 10.1016C15.4943 10.2839 15.2729 10.375 15.0125 10.375C14.7521 10.375 14.5307 10.2839 14.3484 10.1016C14.1661 9.91927 14.075 9.69792 14.075 9.4375V7.875H7.825V9.4375C7.825 9.69792 7.73385 9.91927 7.55156 10.1016C7.36927 10.2839 7.14792 10.375 6.8875 10.375C6.62708 10.375 6.40573 10.2839 6.22344 10.1016C6.04115 9.91927 5.95 9.69792 5.95 9.4375V7.875H4.075V17.875C4.075 18.2135 4.19219 18.5 4.42656 18.7344C4.68698 18.9948 4.98646 19.125 5.325 19.125H16.575C16.9135 19.125 17.2 18.9948 17.4344 18.7344C17.6948 18.5 17.825 18.2135 17.825 17.875Z"
                fill="#000000"
              ></path>
            </svg>

            <div className="icon_nav_1_3">
              <div className="arrow"></div>
              <div className="icon_nav_info">Cart</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <button id="showbtn" onClick={show_nav_}>
            <iconify-icon
              icon="material-symbols:menu"
              width="40"
              height="40"
            ></iconify-icon>
          </button>
          <button id="closebtn" onClick={hide_nav_}>
            <iconify-icon
              icon="material-symbols:close"
              width="40"
              height="40"
            ></iconify-icon>
          </button>
          <div className="nav-media" id="nav-media">
            {/* <div className='nav-item' onMouseOver={handleOpen} onMouseLeave={handleClose}> */}

            <div
              className="nav-item"
              onMouseEnter={handleOpen}
              onMouseLeave={handleClose}
            >
              {/* <span>Categories <span className='gt-symb'>&gt;</span></span> */}
              <div className="nav-item-container hover:cursor-pointer">
                <span onClick={() => navigate('categories')}>Categories</span>
                <div className="icon-container">
                  {/* <iconify-icon
                  inline
                  icon="material-symbols:keyboard-arrow-down"
                  width="25"
                  height="25"
                  id="dropdown"
                  flip={isActive ? 'vertical' : ''}
                  onClick={handleClick}
                ></iconify-icon> */}
                  <iconify-icon
                    inline
                    icon="material-symbols:keyboard-arrow-down"
                    width="25"
                    height="25"
                  ></iconify-icon>
                </div>
              </div>
            </div>
            <div id="drop_down_cont" className="nav-item">
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
            <div className="nav-item hover:cursor-pointer">
              <div className="nav-item-container" onClick={() => navigate('/')}>
                <span>Home</span>
              </div>
            </div>
            <div className="nav-item hover:cursor-pointer">
              <div
                className="nav-item-container"
                onClick={(event) => navigate('products')}
              >
                <span>Our Product</span>
              </div>
            </div>
            <div className="nav-item hover:cursor-pointer">
              <div className="nav-item-container">
                <span>Contact Us</span>
              </div>
            </div>
            <div className="nav-item hover:cursor-pointer">
              <div className="nav-item-container">
                <span>Careers</span>
              </div>
            </div>
            <div className="nav-item hover:cursor-pointer">
              <div className="nav-item-container">
                <span>About Us</span>
              </div>
            </div>
          </div>

          <div
            className="cat-container"
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
        </div>
      </div>
    </>
  )
}

export default LowerNav
