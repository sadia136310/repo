import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SideCart = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="absolute z-10 flex justify-end w-full md:h-full h-screen top-0 overflow-hidden">
        <div className="md:w-[450px] w-[330px] bg-white md:p-6 p-5">
          <div className="flex flex-1 justify-end top-2 right-3 absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="h-24 flex flex-wrap flex-col space-y-2">
            <h1 className="font-bold text-2xl">Shopping Cart</h1>
            <span className="md:w-[350px] w-[300px] font-medium">
              🔥These products are limited, checkout within {}time
            </span>
          </div>
          <div className="md:h-[400px] h-[300px] flex md:space-x-16 space-x-12 overflow-y-scroll">
            <div>products</div>
            <div>products</div>
            <div>products</div>
          </div>
          <div>
            <div className="flex justify-center flex-col md:py-2 py-3">
              <div className="grid grid-flow-col justify-center md:gap-24 gap-14 font-semibold">
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
            <div className="py-1 md:py-0">
              <div className="flex justify-between px-3">
                <span>Subtotal</span>
                <span>700</span>
              </div>
              <div className="flex justify-between px-1 text-lg font-medium">
                <span>Total</span>
                <span>800</span>
              </div>
            </div>
            <div className="flex justify-center flex-col space-y-1 font-medium pt-2">
              <button className="bg-[#194940] py-2 rounded-3xl text-white">
                CHECKOUT
              </button>
              <button className="border-2 border-black rounded-3xl py-2" 
              onClick={()=>navigate("cart")}
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
