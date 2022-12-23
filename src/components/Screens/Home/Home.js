import React from 'react'
import BestDeals from './Campaign/BestDeals'
import BestSeller from './Campaign/BestSeller'
import ByOccasion from './Campaign/ByOccasion'
import Customization from './Campaign/Customization'
import HomeLiving from './Campaign/HomeLiving'
import PopularCategory from './Campaign/PopularCategory'
import PriceCard from './Campaign/PriceCard'
// import Selection from './Campaign/Selection'
import Selection from '../WebsiteFooter/Selection'
import Header from './Header/Header'

const Home = () => {
  return (
    <>
      <div className='overflow-x-hidden'>
      <Header></Header>
      <PriceCard></PriceCard>
      <PopularCategory></PopularCategory>
      <BestDeals></BestDeals>
      <HomeLiving></HomeLiving>
      <Customization></Customization>
      <ByOccasion></ByOccasion>
      <BestSeller></BestSeller>
      <Selection></Selection>
      </div>
    </>
  )
}

export default Home
