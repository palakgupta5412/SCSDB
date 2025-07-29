import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Trending from '../src/Partials/Trending'
import Home from './Components/Home'
const App = () => {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex'>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />

      </Routes>
    </div>
  )
}

export default App