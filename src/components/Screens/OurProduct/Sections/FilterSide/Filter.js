import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './filterCss.css'
const Filter = () => {
  const [click1, setClick1] = useState(0)
  const [click2, setClick2] = useState(0)
  const [click3, setClick3] = useState(0)
  const [click4, setClick4] = useState(0)

  const handleCategoryClick = () => {
    if (click1 == 0) {
      setClick1(1)
    } else {
      setClick1(0)
    }
  }
  const handleColorClick = () => {
    if (click2 == 0) {
      setClick2(1)
    } else {
      setClick2(0)
    }
  }
  const handleTypesClick = () => {
    if (click3 == 0) {
      setClick3(1)
    } else {
      setClick3(0)
    }
    // click3 ? setClick3(0) : setClick3(1)
    // var coll = document.getElementsByClassName('collapsible')
    // var i

    // for (i = 0; i < coll.length; i++) {
    //   coll[i].addEventListener('click', function () {
    //     this.classList.toggle('active')
    //     var content = this.nextElementSibling
    //     if (content.style.display === 'block') {
    //       content.style.display = 'none'
    //     } else {
    //       content.style.display = 'block'
    //     }
    //   })
    // }
  }

  const handlePriceClick = () => {
    if (click4 == 0) {
      setClick4(1)
    } else {
      setClick4(0)
    }
    // click4 ? setClick4(0) : setClick4(1)
    // var coll = document.getElementsByClassName('collapsible')
    // var i

    // for (i = 0; i < coll.length; i++) {
    //   coll[i].addEventListener('click', function () {
    //     this.classList.toggle('active')
    //     var content = this.nextElementSibling
    //     if (content.style.display === 'block') {
    //       content.style.display = 'none'
    //     } else {
    //       content.style.display = 'block'
    //     }
    //   })
    // }
  }

  return (
    <>
      <div className="w-full h-screen">
        <div className="h-full selection:bg-black selection:text-white overflow-visible">
          <div className="w-full text-3xl font-bold">Filters</div>

          <div className="mt-8 w-full">
            <button
              type="button"
              className="collapsible font-bold "
              onClick={handleCategoryClick}
            >
              <div className="text-lg flex w-full justify-end">
                <div className="w-4/5">Categories</div>
                <div className="mx-auto w-1/5">{click1 ? '-' : '+'}</div>
              </div>
            </button>

            <div class="content">
              {click1 ? (
                <div>
                  <div className="mt-4">
                    <Link
                      to="/shop-2/?filtering=1&filter_product_cat=15"
                      className="font-xs text-neutral-500"
                    >
                      <div className="hover-underline-animation hover:text-black">
                        Uncategorized
                      </div>
                    </Link>
                  </div>
                  <div className="mt-3">
                    <Link
                      to="/shop-2/?filtering=1&filter_product_cat=109"
                      className="font-xs text-neutral-500"
                    >
                      <div className="hover-underline-animation hover:text-black">
                        By Gender
                      </div>
                    </Link>
                  </div>
                  <div className="mt-3">
                    <Link
                      to="/shop-2/?filtering=1&filter_product_cat=112"
                      className="font-xs text-neutral-500"
                    >
                      <div className="hover-underline-animation hover:text-black">
                        By Occassion
                      </div>
                    </Link>
                  </div>
                  <div className="mt-3">
                    <Link
                      to="/shop-2/?filtering=1&filter_product_cat=131"
                      className="font-xs text-neutral-500"
                    >
                      <div className="hover-underline-animation hover:text-black">
                        Clutch
                      </div>
                    </Link>
                  </div>
                  <div className="mt-3">
                    <Link
                      to="/shop-2/?filtering=1&filter_product_cat=114"
                      className="font-xs text-neutral-500"
                    >
                      <div className="hover-underline-animation hover:text-black">
                        Popular
                      </div>
                    </Link>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>

          <div className="w-full mt-8">
            <button
              type="button"
              className="collapsible font-bold"
              onClick={handleColorClick}
            >
              <div className="text-lg flex w-full justify-end">
                <div className="w-4/5">Colors</div>
                <div className="mx-auto w-1/5">{click2 ? '-' : '+'}</div>
              </div>
            </button>

            {click2 ? (
              <div class=" w-4/5 content flex flex-wrap">
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=grass-green"
                    className="text-xl  font-xs "
                  >
                    Grass Green
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=pink"
                    className="text-xl  font-xs "
                  >
                    Pink
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=red"
                    className="text-xl  font-xs "
                  >
                    Red
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=sky-blue"
                    className="text-xl  font-xs "
                  >
                    Sky Blue
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=blue"
                    className="text-xl  font-xs "
                  >
                    Blue
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=dark-grey"
                    className="text-xl  font-xs "
                  >
                    Dark Grey
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=green"
                    className="text-xl  font-xs "
                  >
                    Green
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=grey"
                    className="text-xl  font-xs "
                  >
                    Grey
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=white"
                    className="text-xl  font-xs "
                  >
                    white
                  </Link>
                </div>
                <div className="p-1.5 border w-max rounded m-1 border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_color=black"
                    className="text-xl  font-xs "
                  >
                    Black
                  </Link>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="mt-8">
            <button
              type="button"
              className="collapsible font-bold"
              onClick={handleTypesClick}
            >
              <div className="text-lg flex w-full justify-end">
                <div className="w-4/5">Types</div>
                <div className="mx-auto w-1/5">{click3 ? '-' : '+'}</div>
              </div>
            </button>

            {click3 ? (
              <div class="content flex w-4/5 flex-wrap">
                <div className="p-1.5 border w-max m-1 rounded border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_types=eu-plug"
                    className="text-xl  font-xs "
                  >
                    UK Plug
                  </Link>
                </div>
                <div className="p-1.5 border w-max m-1 rounded border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_types=uk-plug"
                    className="text-xl  font-xs "
                  >
                    EU Plug
                  </Link>
                </div>
                <div className="p-1.5 border w-max m-1 rounded border-neutral-400 hover:bg-black hover:text-white">
                  <Link
                    to="/shop-2/?filtering=1&filter_types=us-plug"
                    className="text-xl  font-xs "
                  >
                    US Plug
                  </Link>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <div className="bg-stone-200 w-3/4 h-full"></div>
          </div>

          <div className="mt-8">
            <button
              type="button"
              className="collapsible font-bold"
              onClick={handlePriceClick}
            >
              <div className="text-lg flex w-full justify-end">
                <div className="w-4/5">Price</div>
                <div className="mx-auto w-1/5">{click4 ? '-' : '+'}</div>
              </div>
            </button>

            {click4 ? (
              <div class="content">
                <div className="mt-4">
                  <Link
                    to="/shop-2/?filtering=1&filter_product_cat=15"
                    className="font-medium text-neutral-500"
                  >
                    <div className="w-max text-black border-b-2 border-black">
                      All
                    </div>
                  </Link>
                </div>
                <div className="mt-4">
                  <Link
                    to="/shop-2/?filtering=1&filter_product_cat=15"
                    className="font-medium text-neutral-500"
                  >
                    <div className="hover-underline-animation hover:text-black">
                      &#x20b9;0.00 - &#x20b9;240.00
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link
                    to="/shop-2/?filtering=1&filter_product_cat=15"
                    className="font-medium text-neutral-500"
                  >
                    <div className="hover-underline-animation hover:text-black">
                      &#x20b9;240.00 - &#x20b9;480.00
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link
                    to="/shop-2/?filtering=1&filter_product_cat=15"
                    className="font-medium text-neutral-500"
                  >
                    <div className="hover-underline-animation hover:text-black">
                      &#x20b9;480.00 - &#x20b9;720.00
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link
                    to="/shop-2/?filtering=1&filter_product_cat=15"
                    className="font-medium text-neutral-500"
                  >
                    <div className="hover-underline-animation hover:text-black">
                      &#x20b9;720.00 - &#x20b9;960.00
                    </div>
                  </Link>
                </div>
                <div className="mt-3">
                  <Link
                    to="/shop-2/?filtering=1&filter_product_cat=15"
                    className="font-medium text-neutral-500"
                  >
                    <div className="hover-underline-animation hover:text-black">
                      &#x20b9;960.00+
                    </div>
                  </Link>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter
