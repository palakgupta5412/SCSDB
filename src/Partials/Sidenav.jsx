import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
const Sidenav = () => {
  return (
    <div className='h-full p-2 w-[20%] border-r-2 border-zinc-500'>
        <h1 className='text-2xl text-white p-3 flex gap-2'>
            <i className="text-[#6556CD] ri-tv-fill"></i>
            <span>SCSDB</span>
        </h1>

        <nav className='flex flex-col gap-3 my-6 ml-5'>
            <h1 className='text-white text-xl'>New Feeds</h1>
            <Link to={"/trending"} className='p-2 text-zinc-400 pl-5 hover:text-white hover:bg-[#6556CD] rounded-lg mr-5'><i className="mr-2 ri-fire-fill"></i> Trending</Link>
            <Link className='p-2 text-zinc-400 pl-5 hover:text-white hover:bg-[#6556CD] rounded-lg mr-5'><i className="mr-2 ri-bard-fill"></i> Popular</Link>
            <Link className='p-2 text-zinc-400 pl-5 hover:text-white hover:bg-[#6556CD] rounded-lg mr-5'><i className="mr-2 ri-movie-2-fill"></i> Movies</Link>
            <Link className='p-2 text-zinc-400 pl-5 hover:text-white hover:bg-[#6556CD] rounded-lg mr-5'><i className="mr-2 ri-tv-2-fill"></i> TV Shows</Link>
            <Link className='p-2 text-zinc-400 pl-5 hover:text-white hover:bg-[#6556CD] rounded-lg mr-5'><i className="mr-2 ri-user-fill"></i> People</Link>
        </nav>

        <hr className='border-zinc-400 pl-10 pr-10'/>

        <nav className='flex flex-col gap-3 my-10 ml-5'>
            <h1 className='text-white text-xl'>Website Information</h1>
            <Link className='p-2 text-zinc-400 pl-5 hover:text-white hover:bg-[#6556CD] rounded-lg mr-5'><i className="ri-information-fill mr-2"></i>About SCSDB</Link>
            <Link className='p-2 text-zinc-400 pl-5 hover:text-white hover:bg-[#6556CD] rounded-lg mr-5'><i className="ri-phone-fill mr-2 "></i>Contact Us</Link>
        </nav>

    </div>
  )
}

export default Sidenav