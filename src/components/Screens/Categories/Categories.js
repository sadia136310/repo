import React from 'react'
import Category from './Sections/Category'
import Selection from '../WebsiteFooter/Selection'
import Slider from './Sections/Slider'

const Categories = () => {
  return (
    <div className="secondary-content overflow-x-hidden">
      <Slider />
      <Category />
      <Selection />
    </div>
  )
}

export default Categories
