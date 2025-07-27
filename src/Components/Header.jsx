import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
const Header = ({data}) => {
  return (
    <div 
        style={{backgroundPosition : "top 10%" , background :`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))`, backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${data.backdrop_path || data.poster_path})` , backgroundSize:"cover"}}
        className='z-9 realative w-[98%] rounded-xl h-[60%] mx-auto flex flex-col justify-end items-start p-[5%] '>
            <h1 className='bg-transparent text-5xl w-[60%] text-white font-black'>{data.title || data.name}</h1>
            <p className='text-white mt-3 w-[60%] font-bold text-sm '>{data.overview ? `${data.overview.slice(0, 200)}` : "No description available"}...<Link className='text-blue-700' to='/movie'>more</Link></p>
            <p className='w-[60%] mt-4 flex justify-between pr-16 font-bold text-sm'>
                <div className='text-white text-md'><i className="text-yellow-500 text-lg ri-broadcast-fill"></i> {data.release_date ? data.release_date : data.first_air_date}</div>
                <div className='text-white text-md'><i className="text-yellow-500 text-lg ri-album-fill"></i> {data.media_type}</div>
            </p>
            <button className='px-4 py-2 bg-blue-700 font-regular rounded-sm hover:bg-blue-900 hover:text-zinc-200 mt-4'>Watch Trailer</button>
    </div>
  )
}

export default Header