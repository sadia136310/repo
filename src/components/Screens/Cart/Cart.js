import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import wishcard1 from '../../../assets/wishlist/wishcard1.jpg'
import wishcard2 from '../../../assets/wishlist/wishcard2.jpg'
import Selection from '../WebsiteFooter/Selection'

const Cart = () => {
  return (
    <>
      <div className="w-full mt-24 mb-44">
        <div className="flex flex-col w-full items-center space-y-2">
          <h1 className="text-4xl font-semibold">Cart</h1>
          <h1 className="text-xl font-medium">
            🔥 These products are limited, checkout within{' '}
          </h1>
        </div>
        <div className="pt-6">
          <div className="lg:grid lg:grid-cols-2 hidden pl-56">
            <span>Product</span>
            <div className="lg:grid lg:grid-cols-3 hidden pr-32 pl-20">
              <span>Price</span>
              <span className="pl-4">Quantity</span>
              <span className="pl-8">Subtotal</span>
            </div>
          </div>
          <div className="lg:flex sm:flex-none  items-center justify-between border-b border-gray-300 py-2 lg:mx-36 sm:mx-2 md:mx-2">
            <div className="flex mx-4 items-center">
              <RxCross2 className="text-2xl mr-2 text-gray-700"></RxCross2>
              <img className="w-36 h-36 mr-6" src={wishcard2} alt="" />
              <div className="text-gray-700">
                <h4 className="text-md font-semibold">
                  1 Photo Brithday Wish Photo Frame 8 inch by 7 inch
                </h4>
                <p className="font-semibold">
                  <del className="text-gray-400">₹399.00</del> ₹229.00
                </p>
                <p>December 18,2022</p>
              </div>
            </div>

            <h2 className="py-2 text-gray-800 font-semibold lg:ml-20 sm:ml-6">
              <span className="sm:block lg:hidden">Price:</span>
              ₹229.00
            </h2>
            <div className="border-2 text-md text-lg py-1 px-4  font-semibold rounded-3xl flex text-black lg:ml-10 sm:ml-6">
              <button>-</button>
              <p className="mx-6">1</p>
              <button>+</button>
            </div>
            <h2 className="py-2 text-gray-800 font-semibold lg:mr-2 sm:mr-0 sm:ml-6">
              <span className="sm:block lg:hidden">Subtotal:</span>
              ₹229.00
            </h2>
          </div>
          <div className="lg:flex sm:flex-none  items-center justify-between border-b border-gray-300 py-2 lg:mx-36 sm:mx-2 md:mx-2">
            <div className="flex mx-4 items-center">
              <RxCross2 className="text-2xl mr-2 text-gray-700"></RxCross2>
              <img className="w-36 h-36 mr-6" src={wishcard1} alt="" />
              <div className="text-gray-700">
                <h4 className="text-md font-semibold">
                  1 Photo Brithday Wish Photo Frame 8 inch by 7 inch
                </h4>
                <p className="font-semibold">
                  <del className="text-gray-400">₹399.00</del> ₹229.00
                </p>
                <p>December 18,2022</p>
              </div>
            </div>

            <h2 className="py-2 text-gray-800 font-semibold lg:ml-20 sm:ml-6">
              <span className="sm:block lg:hidden">Price:</span>
              ₹499.00
            </h2>
            <div className="border-2 text-md text-lg py-1 px-4 font-semibold rounded-3xl flex text-black lg:ml-10 sm:ml-6">
              <button>-</button>
              <p className="mx-6">1</p>
              <button>+</button>
            </div>
            <h2 className="py-2 text-gray-800 font-semibold lg:mr-2 sm:mr-0 sm:ml-6">
              <span className="sm:block lg:hidden">Subtotal:</span>
              ₹499.00
            </h2>
          </div>
        </div>
        <div className="flex lg:justify-end sm:justify-end md:justify-end lg:pr-48 sm:mx-auto md:mx-auto pt-6">
          <div className="lg:w-2/6 md:w-full sm:w-full space-y-4 border px-4 pt-4 shadow">
            <h1 className="flex flex-col items-center text-2xl font-medium">
              Order Summary
            </h1>
            <div className="flex justify-center flex-col md:py-2 py-3">
              <div className="grid grid-flow-col justify-center md:gap-20 gap-14 font-semibold">
                <div className="flex">
                  <div className="flex justify-center flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-full h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                    <span>Note</span>
                  </div>
                  <p className="px-10 text-gray-300 text-3xl font-light">|</p>
                  <div className="flex justify-center flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-full h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                    <span>Shipping</span>
                  </div>
                  <p className="px-10 text-gray-300 text-3xl font-light">|</p>
                  <div className="flex justify-center flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-full h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>
                    <span>Coupons</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-1 md:py-0">
              <hr />
              <div className="flex justify-between py-2">
                <span>Subtotal</span>
                <span>₹728.00</span>
              </div>
              <hr />
              <div className="flex justify-between py-2">
                <span>Shipping</span>
                <span>Flat rate: ₹60.00</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-medium py-2">
                <span>Total</span>
                <span>₹788.00</span>
              </div>
            </div>
            <div className="flex justify-center flex-col space-y-1 font-medium pt-2">
              <button className="bg-[#194940] py-2 mb-4 rounded-3xl text-white">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Selection />
    </>
  )
}

export default Cart
