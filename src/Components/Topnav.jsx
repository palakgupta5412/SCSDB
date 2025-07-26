import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom'
const Topnav = () => {
    const [search , setSearch] = useState(null);
    console.log(search);
  return (

    <div className='w-full h-[10%] flex items-center justify-center relative'>
        <i class="ri-search-line text-2xl text-zinc-400"></i>
        <input onChange={(e)=>setSearch(e.target.value)} className='w-[60%] p-3 h-1/2 m-6 border-[0.2px] text-zinc-400 border-zinc-400 rounded-full bg-transparent' type="text" placeholder="Search Anything..."/>
        <i onClick={()=>{setSearch("")
            
        }} class="ri-close-line text-2xl text-zinc-400"></i>

        <div className='absolute top-[77%] w-[60%] bg-zinc-800 h-[40vh] overflow-auto '>
            <Link className="p-4 w-full font-semibold hover:bg-zinc-900 hover:text-zinc-500 duration-300 border-b-2 border-zinc-600 text-zinc-400 flex justify-start items-center">
                <img src=""/>
                <span>Heya Everyone</span>
            </Link>
            <Link className="p-4 w-full font-semibold hover:bg-zinc-900 hover:text-zinc-500 duration-300 border-b-2 border-zinc-600 text-zinc-400 flex justify-start items-center">
                <img src=""/>
                <span>Heya Everyone</span>
            </Link>
            <Link className="p-4 w-full font-semibold hover:bg-zinc-900 hover:text-zinc-500 duration-300 border-b-2 border-zinc-600 text-zinc-400 flex justify-start items-center">
                <img src=""/>
                <span>Heya Everyone</span>
            </Link>
            <Link className="p-4 w-full font-semibold hover:bg-zinc-900 hover:text-zinc-500 duration-300 border-b-2 border-zinc-600 text-zinc-400 flex justify-start items-center">
                <img src=""/>
                <span>Heya Everyone</span>
            </Link>
            <Link className="p-4 w-full font-semibold hover:bg-zinc-900 hover:text-zinc-500 duration-300 border-b-2 border-zinc-600 text-zinc-400 flex justify-start items-center">
                <img src=""/>
                <span>Heya Everyone</span>
            </Link>
        </div>
    </div> 
  )
}

export default Topnav