import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom'
import axios from '../Utils/axios'
import noImage from '../../public/noImage.jpg'
const Topnav = ({className , div}) => {
    const [searchQuery , setSearchQuery] = useState("");
    console.log(searchQuery);
    
    const [searchData, setsearchData] = useState([]);

    const getData = async() =>{
        try{
            const {data} = await axios.get(`search/multi?query=${searchQuery}`);
            console.log(data);  
            setsearchData(data.results);
        }
        catch(error){
            console.log(error);
        };
        
    }

    useEffect(()=>{
        getData();
    },[searchQuery])
  return (

    <div className={`${className} ml-20 h-[10%] flex items-center justify-center gap-3 relative`}>
        <i className="ri-search-line text-2xl text-zinc-400"></i>
        <div className='flex items-center justify-between w-[63%] h-1/2 bg-transparent rounded-full border-[1px] border-zinc-400 p-2'>
            <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='p-2 h-1/2 text-zinc-400 outline-none rounded-full bg-transparent' type="text" placeholder="Search Anything..."/>
            {searchQuery.length>0 && (<i onClick={()=>{setSearchQuery("")}} class="cursor-pointer ri-close-line text-2xl text-zinc-400"></i>) }
        </div>
        <div className={`absolute z-50 ${div} top-[77%] w-[60%] bg-zinc-800 max-h-[40vh] overflow-auto`}>
            {searchData.map((data,index)=>{
                return(
                    <Link to={`/${data.media_type}/${data.id}`} key={index} className="z-999 p-4 w-full font-semibold hover:bg-zinc-900 hover:text-zinc-500 duration-300 border-b-2 border-zinc-600 text-zinc-400 flex justify-start items-center">
                        <img className='w-[12vh] h-[12vh] shadow-md shadow-zinc-500 object-cover rounded-full mr-8' src= { data.profile_path || data.poster_path || data.backdrop_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path || data.backdrop_path || data.profile_path}` : noImage}/>
                        <span>{data.name || data.orignial_name || data.original_title }</span>
                    </Link>
                )
            })}
            
        </div>
    </div> 
  )
}

export default Topnav