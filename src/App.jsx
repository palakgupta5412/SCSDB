import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Trending from '../src/Partials/Trending'
import Home from './Components/Home'
import Movies from '../src/Partials/Movies'
import Popular from '../src/Partials/Popular'
import TvShows from '../src/Partials/TvShows'
import People from '../src/Partials/People'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'


const App = () => {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex'>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TvShows />} />
        <Route path="/people" element={<People />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />


      </Routes>
    </div>
  )
}

export default App