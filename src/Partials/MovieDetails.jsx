import React, { useEffect } from 'react'
import { asyncMovieLoader } from '../store/Actions/movieActions'
import { removemovie } from '../store/Actions/movieActions'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loader from '../Components/Loader.jsx'
import HorizontalCards from '../Partials/HorizontalCards.jsx'

const MovieDetails = () => {

    const {pathname} = useLocation();
    const navigate = useNavigate();
    const data = useSelector((state) => state.movie);
    console.log("Movie data:", data);
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(asyncMovieLoader(id))
        return () => {
            dispatch(removemovie)
        }
    }, [id])

    
    const fullStar = data.info && data.info.details.vote_average ? Math.floor(data.info.details.vote_average/2)  : "No" 
    const halfStar = data.info && data.info.details.vote_average ? (data.info.details.vote_average%2==1 ? 1 : 0) : "No"
    const emptyStar = 5 - (fullStar + halfStar)

  return data.info ? (
    <div className='w-full relative h-full flex flex-col overflow-auto ' style={{ opacity:0.7 , backgroundImage: `url(${data.info.details.backdrop_path ? `https://image.tmdb.org/t/p/original${data.info.details.backdrop_path}` : './default-bg.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className= 'w-screen h-screen px-[10%] '>
        <nav className=' w-full text-zinc-200 h-[10vh]  flex justify-between items-center  gap-10 text-xl'>
            <Link onClick={()=>{navigate(-1)}} className="hover:text-[#6556CD] text-4xl ri-arrow-drop-left-line z-9000"></Link>
            <div className='flex gap-7 items-center'>
            <a target='_blank' href={data.info.details.homepage} className=''><i className='hover:text-white hover:font-bold ri-external-link-fill'></i></a>
            <a target='_blank' href={`https://www.wikidata.org/wiki/${data.info.externalId.wikidata_id}`} className='hover:text-[#fff]'><i className='ri-earth-fill hover:text-[#fff]'></i></a>    
            <a target='_blank' className="text-sm" href={`https://www.imdb.com/title/${data.info.externalId.imdb_id}`}><i className='ri-fill'>imdb</i></a>
            </div>
        </nav>
        <div className='w-screen h-screen blur-sm absolute top-0 left-0 -z-10' style={{backgroundAttachment: 'fixed' , backgroundImage: `url(${data.info.details.backdrop_path ? `https://image.tmdb.org/t/p/original${data.info.details.backdrop_path}` : './default-bg.jpg'})` , backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className='relative z-8 w-[80%] flex gap-6 mt-10 text-white items-start'>
            <div className='w-full h-[70vh] flex items-center flex-col'>
                <img className='h-[50vh] w-[40vh] shadow-lg shadow-black  object-cover rounded-md' src={`https://image.tmdb.org/t/p/w500/${data.info.details.poster_path || data.info.details.backdrop_path }`} />
                <Link to={`${pathname}/trailer}` || `${pathname}/teaser`} className='w-[40vh] text-center px-4 py-2 bg-blue-600 font-regular rounded-sm hover:bg-blue-800 hover:text-white mt-6 flex gap-2 justify-center'>Watch Trailer <i class="ri-play-large-fill"></i></Link>
            </div>
            <div className=''>
                <h1 className=' text-5xl font-black '>{data.info.details.title}</h1>
                <p className='mt-5 leading-tight text-md '>
                    <span className='text-zinc-400'>Overview:<br/></span> 
                    {data.info.details.overview}
                </p>
                <p className='text-md text-zinc-400 mt-4'>Releasing On : <span className='text-white'>{data.info.details.release_date}</span></p>
                <div className='flex gap-4 mt-5'>
                    {data.info.details.genres.map((genre, index) => (
                        <p key={index} className='border-[1px] border-zinc-600 hover:border-blue-600 rounded-full px-2 py-1 bg-blend-saturation text-md text-white'>{genre.name}</p>
                    ))}
                </div>
                    <div className='flex gap-4 mt-5 items-center'>
                        <div className={``}>
                            {Array.from({ length: fullStar }, (_, i) => (
                                <i key={i} className='ri-star-fill text-yellow-500'></i>
                            ))}
                            {Array.from({ length: halfStar }, (_, i) => (
                                <i key={i} className='ri-star-half-fill text-yellow-500'></i>
                            ))}
                            {Array.from({ length: emptyStar }, (_, i) => (
                                <i key={i} className='ri-star-line text-yellow-500'></i>
                            ))}
                        </div>
                        {data.info.details.vote_average}/10
                    </div>
            </div>
            
        </div>
        <hr className='border-zinc-400'/>
        <h1 className='text-2xl font-bold text-white my-6'>Recommendations</h1>
        <HorizontalCards data={data.info.recommendations ? data.info.recommendations : (data.info.similar ? data.info.similar : [])} />

        <Outlet />
    </div>
    </div>
  ):<Loader />
}

export default MovieDetails