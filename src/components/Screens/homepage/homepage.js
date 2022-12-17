import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'
import dealLogo1 from '../../../images/purse.jpeg'
import popularCat from '../../../images/popularCat.png'
import bestDeal from '../../../images/todayBestDeal.png'
import sidePic from '../../../images/todayBestDeal.png'
import bestSeller from '../../../images/bestSeller.png'
import occasionCard from '../../../images/ocassionCard.png'
const Homepage = () => {
  var [quantityCount, setQuantityCount] = useState(1)
  const increaseCounter = () => {
    setQuantityCount(quantityCount + 1)
  }
  const decreaseCounter = () => {
    if (quantityCount !== 0) {
      setQuantityCount(quantityCount - 1)
    }
  }

  return (
    <div className="w-full" id="homepage-container">
      <div className=" h-screen m-5">
        <div className="h-2/3  bg-dark-green " id="heading-image"></div>

        <div
          className="h-1/3  mt-4 mb-4  flex lg:flex-nowrap md:flex-wrap sm:flex-wrap"
          id="deal-cards"
        >
          <Link
            to="/shop"
            id="deal-card-item item-1"
            className=" flex rounded-md mb-4 w-1/3 md:w-1/2 sm:w-full bg-orange-100 text-center"
          >
            <div className="h-full w-1/2 flex flex-col">
              <div className="font-bold text-3xl mt-7 ">
                New Deals at <br /> Best Prices
              </div>
              <div className="hover-underline-animation w-max mt-auto m-7 ">
                Browse Deals
              </div>
            </div>
            <div className="h-full w-1/2 mt-6 " id="deal-card-item1">
              <img alt="dealLogo" src={dealLogo1}></img>
            </div>
          </Link>

          <Link
            to="/shop"
            id="deal-card-item item-1"
            className=" ml-5 mr-5 flex rounded-md mb-4 w-1/3 md:w-1/2 sm:w-full bg-red-500 text-center text-white"
          >
            <div className="h-full w-1/2 flex flex-col">
              <div className="font-bold text-3xl mt-7 ">
                Christmas <br /> Specials
              </div>
              <div className="hover-underline-animation-white w-max mt-auto m-7 text-white ">
                Christmas Sale
              </div>
            </div>
            <div className="h-full w-1/2 mt-6 " id="deal-card-item1">
              <img alt="dealLogo" src={dealLogo1}></img>
            </div>
          </Link>

          <Link
            to="/shop"
            id="deal-card-item item-1"
            className=" flex rounded-md mb-4 w-1/3 md:w-1/2 sm:w-full bg-black text-center text-white"
          >
            <div className="h-full w-1/2 flex flex-col">
              <div className="font-bold text-3xl mt-7 ">
                Customized
                <br />
                Cups
              </div>
              <div className="hover-underline-animation-white w-max mt-auto m-7 text-white ">
                Shop Now
              </div>
            </div>
            <div className="h-full w-1/2 mt-6 " id="deal-card-item1">
              <img alt="dealLogo" src={dealLogo1}></img>
            </div>
          </Link>
        </div>

        <div className="h-4/5 mb-10 w-full pl-16 pr-16 mt-20">
          <div className="flex w-full border-b-2 border-slate pb-3 ">
            <div className="font-bold text-4xl">Popular Categories</div>
            <div className="ml-auto hover-underline-animation mt-3 ">
              <Link to="/shop">View All Categories</Link>
            </div>
          </div>
          <div
            id="popular-category-items"
            className=" -auto flex flex-wrap h-full ml-7"
          >
            <Link
              to="/product-category/popular/categories/art-and-craft/"
              className="popular-category-item w-1/5 h-2/5 ml-7 mt-5 "
            >
              <div className="h-3/4 w-full">
                <img
                  alt="randomimg"
                  src={popularCat}
                  className="h-full w-full"
                ></img>
              </div>
              <div className="h=1/4 text-xl font-bold text-center pt-3">
                Art and Craft
              </div>
            </Link>

            <Link
              to="/product-category/popular/categories/fashion-and-lifestyle/"
              className="popular-category-item w-1/5 h-2/5 ml-7 mt-5 "
            >
              <div className="h-3/4 w-full">
                <img
                  alt="randomimg"
                  src={popularCat}
                  className="h-full w-full"
                ></img>
              </div>
              <div className="h=1/4 text-xl font-bold text-center pt-3">
                Fashion and Lifestyle
              </div>
            </Link>

            <Link
              to="/product-category/popular/categories/hampers/"
              className="popular-category-item w-1/5 h-2/5 ml-7 mt-5 "
            >
              <div className="h-3/4 w-full">
                <img
                  alt="randomimg"
                  src={popularCat}
                  className="h-full w-full"
                ></img>
              </div>
              <div className="h=1/4 text-xl font-bold text-center pt-3">
                Hampers
              </div>
            </Link>

            <Link
              to="/product-category/popular/categories/cup/"
              className="popular-category-item w-1/5 h-2/5 ml-7 mt-5 "
            >
              <div className="h-3/4 w-full">
                <img
                  alt="randomimg"
                  src={popularCat}
                  className="h-full w-full"
                ></img>
              </div>
              <div className="h=1/4 text-xl font-bold text-center pt-3">
                Cup
              </div>
            </Link>

            <Link
              to="/product-category/popular/categories/frame/"
              className="popular-category-item w-1/5 h-2/5 ml-7 mt-5 "
            >
              <div className="h-3/4 w-full">
                <img
                  alt="randomimg"
                  src={popularCat}
                  className="h-full w-full"
                ></img>
              </div>
              <div className="h=1/4 text-xl font-bold text-center pt-3">
                Frame
              </div>
            </Link>

            <Link
              to="/product-category/popular/categories/neon-light/"
              className="popular-category-item w-1/5 h-2/5 ml-7 mt-5 "
            >
              <div className="h-3/4 w-full">
                <img
                  alt="randomimg"
                  src={popularCat}
                  className="h-full w-full"
                ></img>
              </div>
              <div className="h=1/4 text-xl font-bold text-center pt-3">
                Neon Light
              </div>
            </Link>
          </div>
        </div>

        <div className="h-4/5 pl-16 pr-16 mt-20">
          <div className="flex w-full border-b-2 border-slate pb-3 mb-5">
            <div className="font-bold text-4xl">Today's Best Deals</div>
            <div className="ml-auto hover-underline-animation mt-3">
              <Link to="/shop">View All</Link>
            </div>
          </div>

          <div className="flex flex-row h-2/3 mt-10">
            <div className="p-5 w-4/6 border-2 border-black rounded-lg flex">
              <div className="h-full w-1/2">
                <img src={bestDeal} alt="bestDealPic" className="h-full "></img>
              </div>
              <div className="h-full w-1/2 pl-8">
                <div className="text-gray-400 hover:text-black pl-0 p-2">
                  POPULAR
                </div>

                <div className="text-2xl font-bold hover:text-gray-400 pl-0 p-2">
                  <Link to="/product">
                    4 Heart Shaped Photo Round Couple frame
                  </Link>
                </div>

                <div className="pl-0 p-2 flex text-2xl ">
                  <div className="line-through mr-3 text-gray-400">
                    &#8377;544.00
                  </div>
                  <div>&#8377;499.00</div>
                </div>

                <div className="flex flex-col">
                  <div className="pl-0 p-3">Quantity</div>
                  <div className="flex ">
                    <div className="flex w-1/3 bg-gray-200 rounded-full p-2.5 pl-5 text-lg">
                      <div className="w-1/3">
                        <button onClick={decreaseCounter}>-</button>
                      </div>
                      <div className="w-1/3 pl-1.5">{quantityCount}</div>
                      <div className="w-1/3 pl-2">
                        <button onClick={increaseCounter}>+</button>
                      </div>
                    </div>
                    <Link className="bg-dark-green text-white rounded-full mx-auto pl-10 pr-10 pt-2.5 pb-2.5 font-bold zoom ">
                      ADD TO CART
                    </Link>
                  </div>

                  <div className="mt-5">
                    <button className="bg-dark-green text-white rounded-full mx-auto pl-10 pr-10 pt-2.5 pb-2.5 font-bold zoom w-full">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-2/5 rounded-lg ml-5 ">
              <div className=" h-2/5 w-full m-4 flex ">
                <div>
                  <img src={sidePic} alt="randompic" className="h-full "></img>
                </div>
                <div className="ml-5 w-9/12">
                  <p className="pt-2">
                    {' '}
                    &#10025;&#10025;&#10025;&#10025;&#10025;
                  </p>
                  <Link
                    to="/product-category/popular/categories/fashion-and-lifestyle/"
                    className="text-gray-400 hover:text-black pt-2 text-xs"
                  >
                    {' '}
                    FASHION AND LIFESTYLE
                  </Link>
                  <br />
                  <Link
                    className="pt-2 font-bold hover:text-gray-400"
                    to="/products"
                  >
                    Your Name and Customized Leather Ladies Wallet
                  </Link>
                  <div className="flex mt-3">
                    <div className="line-through mr-3 text-gray-400">
                      &#8377;544.00
                    </div>
                    <div>&#8377;499.00</div>
                  </div>
                </div>
              </div>
              <div className=" h-2/5 w-full m-4 flex">
                <div>
                  <img src={sidePic} alt="randompic" className="h-full"></img>
                </div>
                <div className="ml-5 w-9/12">
                  <p className="pt-2">
                    {' '}
                    &#10025;&#10025;&#10025;&#10025;&#10025;
                  </p>
                  <Link
                    to="/product-category/popular/categories/fashion-and-lifestyle/"
                    className="text-gray-400 hover:text-black pt-2 text-xs"
                  >
                    {' '}
                    FASHION AND LIFESTYLE
                  </Link>
                  <br />
                  <Link
                    className="pt-2 font-bold hover:text-gray-400"
                    to="/products"
                  >
                    Your Name and Customized Leather Ladies Wallet
                  </Link>
                  <div className="flex mt-3">
                    <div className="line-through mr-3 text-gray-400">
                      &#8377;544.00
                    </div>
                    <div>&#8377;499.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-3/5 pl-8 pr-8">
          <div className="flex w-full border-b-2 border-slate pb-3 mb-5">
            <div className="font-bold text-4xl">Home And Living</div>
            <div className="ml-auto hover-underline-animation mt-3">
              <Link to="/shop">Go To Daily Deals Section</Link>
            </div>
          </div>

          <div className="flex h-2/3 ">
            <Link
              to="/shop"
              className="h-full w-2/5  flex bg-yellow-200 rounded-lg"
            >
              <div className="h-full w-3/5">
                <p className="text-3xl font-bold pt-10 pl-7">
                  Customized Lamp for Couples
                </p>
                <div className="flex pl-7 pt-5">
                  <div className="pt-1 font-semibold text-xl">Just Price </div>{' '}
                  <div className="text-rose-600 text-2xl font-bold pl-2">
                    &#8377;129
                  </div>
                </div>
                <div className="mt-16 ml-10">
                  <button className="bg-dark-green text-white rounded-full pt-2.5 pb-2.5 font-bold zoom w-1/2  mt-auto">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="h-full w-2/5 bg-slt pt-14">
                <img src={dealLogo1} alt="randomimg"></img>
              </div>
            </Link>
            <div className="h-full w-3/5  rounded-lg ml-5 text-white">
              <div className="flex h-1/2">
                <div className="w-2/5 bg-gray-200 mr-8 mb-4  flex rounded-lg ">
                  <div className="p-4">
                    Home and Living
                    <p>1 Item</p>
                  </div>
                  <div>
                    <img
                      alt="randoming"
                      src={dealLogo1}
                      className="w-3/4 pt-5  mx-auto"
                    ></img>
                  </div>
                </div>
                <div className="w-2/5 bg-gray-200 mr-8 mb-4  flex rounded-lg ">
                  <div className="p-4">
                    Art and Craft
                    <p>1 Item</p>
                  </div>
                  <div>
                    <img
                      alt="randoming"
                      src={dealLogo1}
                      className="w-3/4 pt-5 mx-auto"
                    ></img>
                  </div>
                </div>
                <div className="w-2/5 bg-gray-200  mb-4  flex rounded-lg ">
                  <div className="p-4">
                    Fashion and Lifestyle
                    <p>1 Item</p>
                  </div>
                  <div>
                    <img
                      alt="randoming"
                      src={dealLogo1}
                      className="w-3/4 pt-5 mx-auto"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="flex h-1/2">
                <Link
                  to="/product-category/popular/categories/home-and-living/"
                  className="w-2/5 bg-gray-200 mr-8 mt-4  flex rounded-lg "
                >
                  <div className="p-4">
                    Hampers
                    <p>1 Item</p>
                  </div>
                  <div>
                    <img
                      alt="randoming"
                      src={dealLogo1}
                      className="w-3/4 pt-5 mx-auto"
                    ></img>
                  </div>
                </Link>

                <div className="w-2/5 bg-gray-200 mr-8 mt-4  flex rounded-lg ">
                  <div className="w-full">
                    Gourmet
                    <p>1 Item</p>
                  </div>
                  <div>
                    <img
                      alt="randoming"
                      src={dealLogo1}
                      className="w-3/4 pt-5 mx-auto"
                    ></img>
                  </div>
                </div>

                <div className="w-2/5 bg-gray-200  mt-4  flex rounded-lg ">
                  <div className="p-4">
                    Toys and Games
                    <p>1 Item</p>
                  </div>
                  <div>
                    <img
                      alt="randoming"
                      src={dealLogo1}
                      className="w-3/4 pt-5 mx-auto"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full h-1/5 bg-neutral-100 rounded-lg text-center pt-16"
          id="banner"
        >
          <div className="font-bold text-3xl">
            Marvel Customization{' '}
            <Link
              to="#"
              className="bg-transparent text-rose-600 pl-10 pr-10 p-3 m-3 rounded-full border-2 border-rose-600 hover:bg-rose-600 hover:text-white zoom"
              role="button"
            >
              {' '}
              Discount 20%
            </Link>
          </div>
        </div>

        <div className="h-1/5 mt-20 ">
          <div className=" w-full border-b-2 border-slate pb-3 ">
            <div className="font-bold text-4xl">Popular Search</div>
          </div>
          <div id="" className="pt-2 flex">
            <Link
              to="/search"
              role="button"
              className="bg-white p-3 pl-8 pr-8 m-1 rounded-full border-2 border-gray-200 hover:bg-black hover:text-white font-semibold"
            >
              Wedding
            </Link>

            <Link
              to="/search"
              role="button"
              className="bg-white p-3 pl-8 pr-8 m-1 rounded-full border-2 border-gray-200 hover:bg-black hover:text-white font-semibold"
            >
              For Boyfriend
            </Link>

            <Link
              to="/search"
              role="button"
              className="bg-white p-3 pl-8 pr-8 m-1 rounded-full border-2 border-gray-200 hover:bg-black hover:text-white font-semibold"
            >
              Lamps
            </Link>

            <Link
              to="/search"
              role="button"
              className="bg-white p-3 pl-8 pr-8 m-1 rounded-full border-2 border-gray-200 hover:bg-black hover:text-white font-semibold"
            >
              Photoframe
            </Link>

            <Link
              to="/search"
              role="button"
              className="bg-white p-3 pl-8 pr-8 m-1 rounded-full border-2 border-gray-200 hover:bg-black hover:text-white font-semibold"
            >
              Wallet
            </Link>

            <Link
              to="/search"
              role="button"
              className="bg-white p-3 pl-8 pr-8 m-1 rounded-full border-2 border-gray-200 hover:bg-black hover:text-white font-semibold"
            >
              For Couples
            </Link>
          </div>
        </div>

        <div className="h-3/5 mb-20">
          <div className=" w-full border-b-2 border-slate pb-3 mb-1 flex mt-10 ">
            <div className="font-bold text-4xl">Top 20 BestSeller</div>{' '}
            <div className="ml-auto hover-underline-animation mt-3">
              <Link to="/shop">Go To Daily Deaks Section</Link>
            </div>
          </div>
          <div id="" className="pt-5 h-full flex">
            <Link
              to="/product/clutch-bag/"
              className="w-1/5  h-full rounded-lg p-7 border-2 border-white hover:border-black flex flex-col"
            >
              <div className="w-full h-2/3">
                <div className="relative">
                  <img
                    alt="Best seller pic"
                    className="h-full w-56 "
                    src={bestSeller}
                  ></img>
                  <div className="absolute top-2 left-2 bg-black text-white font-semibold text-xs p-1.5 pl-2.5 pr-2.5 rounded-full">
                    SOLD OUT
                  </div>
                </div>
              </div>
              <div className="w-full h-1/3">
                <p className=" text-sm text-gray-400 hover:text-black">
                  <Link to="/product-category/by-occasion/anniversary/">
                    ANNIVERSARY
                  </Link>
                </p>
                <p className="pt-1 font-bold hover:text-gray-400">
                  <Link to="/product/clutch-bag/">Clutch Bag</Link>
                </p>
                <p className="pt-1">
                  {' '}
                  &#10025;&#10025;&#10025;&#10025;&#10025;
                </p>
              </div>
              <div className="text-center">
                <button className="bg-stone-200 font-semibold text-xl p-2 w-full rounded-full ">
                  <Link to="/gg">Read More</Link>
                </button>
              </div>
            </Link>

            <Link
              to="/product/neon-light-4/"
              className="w-1/5  h-full rounded-lg p-7 border-2 border-white hover:border-black flex flex-col"
            >
              <div className="w-full h-2/3">
                <div className="relative">
                  <img
                    alt="Best seller pic"
                    className="h-full w-56 "
                    src={bestSeller}
                  ></img>
                  <div className="absolute top-2 left-2 bg-black text-white font-semibold text-xs p-1.5 pl-2.5 pr-2.5 rounded-full">
                    SOLD OUT
                  </div>
                </div>
              </div>
              <div className="w-full h-1/3">
                <p className=" text-sm text-gray-400 hover:text-black">
                  <Link to="/product-category/by-occasion/anniversary/">
                    NEON LIGHT
                  </Link>
                </p>
                <p className="pt-1 font-bold hover:text-gray-400">
                  <Link to="/product/neon-light-4/">Neon Light</Link>
                </p>
                <p className="pt-1">
                  {' '}
                  &#10025;&#10025;&#10025;&#10025;&#10025;
                </p>
              </div>
              <div className="text-center">
                <button className="bg-stone-200 font-semibold text-xl p-2 w-full rounded-full ">
                  <Link to="/gg">Read More</Link>
                </button>
              </div>
            </Link>

            <Link
              to="/product/neon-light-3/"
              className="w-1/5  h-full rounded-lg p-7 border-2 border-white hover:border-black flex flex-col"
            >
              <div className="w-full h-2/3">
                <div className="relative">
                  <img
                    alt="Best seller pic"
                    className="h-full w-56 "
                    src={bestSeller}
                  ></img>
                  <div className="absolute top-2 left-2 bg-black text-white font-semibold text-xs p-1.5 pl-2.5 pr-2.5 rounded-full">
                    SOLD OUT
                  </div>
                </div>
              </div>
              <div className="w-full h-1/3">
                <p className=" text-sm text-gray-400 hover:text-black">
                  <Link to="/product-category/by-occasion/anniversary/">
                    NEON LIGHT
                  </Link>
                </p>
                <p className="pt-1 font-bold hover:text-gray-400">
                  <Link to="/product/neon-light-4/">Neon Light</Link>
                </p>
                <p className="pt-1">
                  {' '}
                  &#10025;&#10025;&#10025;&#10025;&#10025;
                </p>
              </div>
              <div className="text-center">
                <button className="bg-stone-200 font-semibold text-xl p-2 w-full rounded-full ">
                  <Link to="/gg">Read More</Link>
                </button>
              </div>
            </Link>

            <Link
              to="/product/neon-light-2/"
              className="w-1/5  h-full rounded-lg p-7 border-2 border-white hover:border-black flex flex-col"
            >
              <div className="w-full h-2/3">
                <div className="relative">
                  <img
                    alt="Best seller pic"
                    className="h-full w-56 "
                    src={bestSeller}
                  ></img>
                  <div className="absolute top-2 left-2 bg-black text-white font-semibold text-xs p-1.5 pl-2.5 pr-2.5 rounded-full">
                    SOLD OUT
                  </div>
                </div>
              </div>
              <div className="w-full h-1/3">
                <p className=" text-sm text-gray-400 hover:text-black">
                  <Link to="/product-category/by-occasion/anniversary/">
                    NEON LIGHT
                  </Link>
                </p>
                <p className="pt-1 font-bold hover:text-gray-400">
                  <Link to="/product/neon-light-4/">Neon Light</Link>
                </p>
                <p className="pt-1">
                  {' '}
                  &#10025;&#10025;&#10025;&#10025;&#10025;
                </p>
              </div>
              <div className="text-center">
                <button className="bg-stone-200 font-semibold text-xl p-2 w-full rounded-full ">
                  <Link to="/gg">Read More</Link>
                </button>
              </div>
            </Link>

            <Link
              to="/product/neon-light-1/"
              className="w-1/5  h-full rounded-lg p-7 border-2 border-white hover:border-black flex flex-col"
            >
              <div className="w-full h-2/3">
                <div className="relative">
                  <img
                    alt="Best seller pic"
                    className="h-full w-56 "
                    src={bestSeller}
                  ></img>
                  <div className="absolute top-2 left-2 bg-black text-white font-semibold text-xs p-1.5 pl-2.5 pr-2.5 rounded-full">
                    SOLD OUT
                  </div>
                </div>
              </div>
              <div className="w-full h-1/3">
                <p className=" text-sm text-gray-400 hover:text-black">
                  <Link to="/product-category/by-occasion/anniversary/">
                    NEON LIGHT
                  </Link>
                </p>
                <p className="pt-1 font-bold hover:text-gray-400">
                  <Link to="/product/neon-light-4/">Neon Light</Link>
                </p>
                <p className="pt-1">
                  {' '}
                  &#10025;&#10025;&#10025;&#10025;&#10025;
                </p>
              </div>
              <div className="text-center">
                <button className="bg-stone-200 font-semibold text-xl p-2 w-full rounded-full ">
                  <Link to="/gg">Read More</Link>
                </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="h-3/5 mt-32">
          <div className="flex w-full border-b-2 border-slate pb-3 mb-5 mt-10">
            <div className="font-bold text-4xl ">By Ocsasion</div>
            <div className="ml-auto hover-underline-animation mt-3">
              <Link to="/shop">Go To Daily Deals Section</Link>
            </div>
          </div>

          <div className="flex flex-row h-2/3">
            <Link
              to="/shop"
              className="h-full w-2/5   flex bg-yellow-200 rounded-lg"
            >
              <div className="h-full w-3/5">
                <p className="text-3xl font-bold pt-10 pl-7">
                  Customized Lamp for Couples
                </p>
                <div className="flex pl-7 pt-5">
                  <div className="pt-1 font-semibold text-xl">Just Price </div>{' '}
                  <div className="text-rose-600 text-2xl font-bold pl-2">
                    &#8377;129
                  </div>
                </div>
                <div className="mt-16 ml-10">
                  <button className="bg-dark-green text-white rounded-full pt-2.5 pb-2.5 font-bold zoom w-1/2  mt-auto">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="h-full w-2/5 bg-slt pt-14">
                <img src={dealLogo1} alt="randomimg"></img>
              </div>
            </Link>
            <div className="h-full w-3/5 rounded-lg ml-5">
              <div className="flex h-4/5">
                <Link
                  to="https://stunhaul.com/product-category/by-occasion/anniversary/"
                  className="w-1/3 h-full flex flex-col m-2 rounded-lg"
                >
                  <div className="h-2/3">
                    <img
                      alt="randoming"
                      src={occasionCard}
                      className="h-full pl-10 pr-10"
                    ></img>
                  </div>
                  <div className="h-1/3 pl-16 text-xl font-semibold">
                    Anniversary
                  </div>
                </Link>

                <Link
                  to="/product-category/by-occasion/baby-shower/"
                  className="w-1/3 h-full flex flex-col m-2 rounded-lg"
                >
                  <div className="h-2/3">
                    <img
                      alt="randoming"
                      src={occasionCard}
                      className="h-full pl-10 pr-10"
                    ></img>
                  </div>
                  <div className="h-1/3 pl-16 text-xl font-semibold">
                    Anniversary
                  </div>
                </Link>

                <Link
                  to="/product-category/by-occasion/best-wishes/"
                  className="w-1/3 h-full flex flex-col m-2 rounded-lg"
                >
                  <div className="h-2/3">
                    <img
                      alt="randoming"
                      src={occasionCard}
                      className="h-full pl-10 pr-10"
                    ></img>
                  </div>
                  <div className="h-1/3 pl-16 text-xl font-semibold">
                    Anniversary
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
