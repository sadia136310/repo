import React from 'react'
import img from '../../../../images/ss.jpg'
const Slider = () => {
  return (
    <div className="flex justify-center md:flex-1 md:mx-24 my-20">
        <img src={img} alt="image" className="md:w-full" />
    </div>
  )
}

export default Slider
