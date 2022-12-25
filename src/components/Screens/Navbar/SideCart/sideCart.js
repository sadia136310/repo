import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SideCart = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="absolute z-40 flex justify-end w-full md:h-full h-screen top-0 overflow-x-hidden">
        <div className="md:w-[450px] w-[330px] bg-white md:p-6 p-5">

          


          <div className="h-24 space-y-2">
            <h2 className="font-bold text-3xl">Shopping Cart</h2>
            <small className="md:w-[350px] w-[300px] font-medium pt-5">
              🔥These products are limited, checkout within { }time
            </small>
          </div>

          <div className="h-[400px] h-[300px] flex space-x-10 mt-16 overflow-y-scroll">
            <small>products</small>
            <small>products</small>
            <small>products</small>

          </div>
          <div>
            <div className="flex justify-center flex-col md:py-2 py-3">
              <div className="grid grid-flow-col justify-center md:gap-12 gap-8 font-semibold">
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
                  <small>Note</small>
                </div>
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
                  <small>Shipping</small>
                </div>
                <div className="flex justify-center flex-col">


                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  class="w-full h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                  </svg>

                  <small>Coupons</small>
                </div>
              </div>
            </div>
            <div className="py-1 md:py-0">
              <div className="flex justify-between px-3 text-xl ">
                <small>Subtotal</small>
                <small>700</small>
              </div>
              <div className="flex justify-between px-1 text-2xl font-medium font-bold">
                <span>Total</span>
                <span>800</span>
              </div>
            </div>
            <div className="flex justify-center flex-col space-y-1 pt-2">
              <button className="bg-[#194940]  rounded-3xl text-white">
                CHECKOUT
              </button>
              <button className="border-2 border-black rounded-3xl"
                onClick={() => navigate("cart")}
              >
                VIEW CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideCart
