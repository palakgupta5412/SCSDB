import React from 'react'
import Loader from './Loader';
import { Link } from 'react-router-dom';
const Cards = ({data , title } ) => {
  
  return data ? (
    data && <div className='w-full bg-[#1F1E24] mt-8 mx-auto p-7 flex flex-wrap gap-16 justify-center  text-white'>
        {data.map((d,i)=>(
            <Link to={`/${d.media_type || title}/details/${d.id}`} key={i} className='relative rounded-md mb-8 shadow-md shadow-black w-[20%] h-[25vw] object-cover'>
                <img className='w-full h-[100%]  object-cover rounded-md' src={`https://image.tmdb.org/t/p/w500/${d.poster_path || d.backdrop_path || d.profile_path}`} />
                <h2 className='mt-2 text-center font-semibold text-zinc-300 hover:text-zinc-200 cursor-pointer text-xl'>{d.title || d.name || d.original_name || d.original_title}</h2>
                {d.vote_average && 
                (
                    <div className='text-white absolute right-[-10%] top-[5%] w-[7vh] text-center h-[7vh] p-2 rounded-full flex justify-center items-center bg-yellow-600'>
                        {Math.floor(d.vote_average)}<sub>/10</sub>
                    </div>
                )}
            </Link>
        ))}
    </div>
  ):(<Loader />)
}

export default Cards