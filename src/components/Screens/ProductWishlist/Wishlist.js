import React, { useRef, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import wishcard1 from '../../../assets/wishlist/wishcard1.jpg'
import wishcard2 from '../../../assets/wishlist/wishcard2.jpg'
import Selection from '../WebsiteFooter/Selection'

const Wishlist = () => {
  const [copySuccess, setCopySuccess] = useState('')
  const textAreaRef = useRef(null)

  function copyToClipboard(e) {
    textAreaRef.current.select()
    document.execCommand('copy')
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus()
    setCopySuccess('Copied!')
  }

  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-16">Wishlist</h2>

      <div className="flex items-center justify-between border-b border-gray-300 py-2 lg:mx-48 sm:mx-2 md:mx-2">
        <div className="flex mx-4 items-center">
          <RxCross2 className="text-2xl mr-2 text-gray-700"></RxCross2>
          <img className="w-36 h-36 mr-20" src={wishcard2} alt="" />
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
        <div>
          <button className="bg-teal-900 py-2 px-4 text-white font-semibold rounded-3xl">
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-gray-300 py-2 lg:mx-48 sm:mx-2 md:mx-2">
        <div className="flex mx-4 items-center">
          <RxCross2 className="text-2xl mr-2 text-gray-700"></RxCross2>
          <img className="w-36 h-36 mr-20" src={wishcard1} alt="" />
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
        <div>
          <button className="bg-teal-900 py-2 px-4 text-white font-semibold rounded-3xl">
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="flex items-center py-2 lg:mx-48 sm:mx-2 md:mx-2 mt-6">
        <p className="pr-4">Wishlist Link</p>
        <input
          className="rounded-full px-4 py-2 border border-gray-400"
          type="text"
          ref={textAreaRef}
          value="http://localhost:3000/wishlist"
        />
        {document.queryCommandSupported('copy') && (
          <div>
            <button
              onClick={copyToClipboard}
              className="bg-teal-900 py-2 px-6 ml-4 text-white font-semibold rounded-3xl"
            >
              COPY
            </button>
            {copySuccess}
          </div>
        )}
      </div>
      
      <Selection />
    </div>
  )
}

export default Wishlist
