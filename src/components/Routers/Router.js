import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Screens/Navbar/Navbar'
import Home from '../Screens/homepage/homepage'

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
