import React from 'react'
import { Link} from 'react-router-dom'
import Dropdown from './Dropdown'
import noImage from '../../public/noImage.jpg'
import Loader from '../Components/Loader'

const HorizontalCards = ({data}) => {
  return data ? (
    data &&
        <div className='w-full flex overflow-x-auto'>
            {data.map((d,i)=>{
                return(
                    <Link to={ `/${d.media_type}/details/${d.id}`} key={i} className='ml-4 p-2 h-[40vh] min-w-[20%] mr-1 flex flex-col bg-zinc-700 mb-4 rounded-md text-zinc-300'>
                        <img className='w-full h-[45%] shadow-md shadow-zinc-500 object-cover rounded-sm' src= { d.profile_path || d.poster_path || d.backdrop_path ? `https://image.tmdb.org/t/p/w500/${d.poster_path || d.backdrop_path || d.profile_path}` : noImage}/>
                        <div className='h-[55%] overflow-y-auto'>
                            <h1 className='mt-2 text-xl font-semibold text-white'>{d.title || d.name || d.original_name}</h1>
                            <p className='text-xs mt-1'>{(d.description ? d.description.slice(0, 100) : "No description available" || d.overview ? d.overview.slice(0, 100) : "No description available" || d.summary ? d.summary.slice(0, 100) : "No description available")}...<Link className='text-blue-200'>more</Link></ p>
                        </div>
                    </Link>
                )
            })}
        </div>
  ) : (<Loader />)
}

export default HorizontalCards