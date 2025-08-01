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
import MovieDetails from './Partials/MovieDetails'
import TvDetails from './Partials/TvDetails'
import PeopleDetails from './Partials/PeopleDetails'
import Trailer from './Partials/Trailer'

const App = () => {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex '>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path='/movie/details/:id' element={<MovieDetails />} >
          <Route path='/movie/details/:id/trailer' element={<Trailer />}/>
        </Route>
        <Route path="/tv" element={<TvShows />} />
        <Route path='/tv/details/:id' element={<TvDetails />} />
        <Route path="/people" element={<People />} />
        <Route path='/people/details/:id' element={<PeopleDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />


      </Routes>
    </div>
  )
}

export default App