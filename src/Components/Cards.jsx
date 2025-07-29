import React from 'react'
import Loader from './Loader';

const Cards = ({data}) => {
    console.log(data);
  return data ? (
    <div className='w-full p-7 flex flex-wrap gap-10  text-white'>
        {/* {data.map((d,i)=>(
            <div key={i} className='w-[20%] h-[25vw] object-cover p-3 '>
                <img className='w-full h-[100%] p-2' src={`https://image.tmdb.org/t/p/w500/${d.poster_path}`} />
                <h2 className='text-center font-semibold text-zinc-300 text-xl'>{d.title || d.name || d.original_name || d.original_title}</h2>
            </div>
        ))} */}
    </div>
  ): (<Loader />)
}

export default Cards