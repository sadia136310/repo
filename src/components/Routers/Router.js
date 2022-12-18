import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Screens/Navbar/Navbar'
import Home from '../Screens/Home/Home'
// import Home from '../Screens/Home/Home'

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default Router
