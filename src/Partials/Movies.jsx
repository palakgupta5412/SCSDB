import React, { useState ,useEffect } from 'react'
import Dropdown from './Dropdown'
import Topnav from '../Components/Topnav'
import 'remixicon/fonts/remixicon.css'
import { useNavigate } from 'react-router-dom'
import axios from '../Utils/axios'
import Cards from '../Components/Cards'
import Loader from '../Components/Loader'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
const Movies = () => {

    document.title = "SCS | Movies";

    const [category , setCategory] = useState("now_playing");
    const [movies , setMovies] = useState([]);
    const [page , setPage] = useState(1);
    const [hasMore , setHasMore] = useState(true);
    
    const navigate = useNavigate();

    const getMovies = async() =>{
      try{
        const movies = await axios.get(`/movie/${category}?page=${page}`);

        if(movies.data.results.length>0){
          setPage((prev)=>prev+1);
          setMovies((prev)=>[...prev , ...movies.data.results]);
        }
        else{
          setHasMore(false);
        }
      }
      catch(error){
        console.log(error);
      }
    }   

    const refreshHandler = () => {
      if(movies.length===0){
        getMovies();
      }
      else{
        setPage(1);
        setMovies([]);
        getMovies();
      }
    }

    useEffect(()=>{
        refreshHandler();
    } , [category])

    useEffect(()=>{
        refreshHandler();
    } , [])

  return movies ? (
    <div className='w-screen h-screen'>
        <div className='flex items-center justify-between h-[10vh] align-center pt-4 '>
            <h1 className='text-3xl text-zinc-400 flex items-center ml-[5%] font-bold gap-1 justify-center'><i onClick={()=>{navigate(-1)}} className="hover:text-[#6556CD] text-4xl ri-arrow-drop-left-line z-9000"></i>Movies <small className='text-zinc-400 text-xs font-normal ml-1 mt-2'>({category})</small></h1>
            <div className='flex items-end gap-1 p-3 pr-10'>  
                <Topnav className={'w-[40vw] h-[12vh] pt-4'} div={'left-[23%]  w-[55%] top-[100%]'}/>
                <Dropdown title={"Category"} options={["now_playing" , "popular" , "top_rated" , "upcoming"]} func={(e)=>{setCategory(e.target.value)}}/>
                {/* <Dropdown title={"duration"} options={["week","day"]} func={(e)=>{setDuration(e.target.value)}}/> */}
            </div>  
        </div>

        <InfiniteScroll
          dataLength={movies.length}
          next={getMovies}
          hasMore={hasMore}
          loader={<h1 className='text-zinc-400 p-10'>Loading...</h1>}
        >
          <Cards data={movies} title={"movie"}/>  
        </InfiniteScroll>
    </div>
  ) : <Loader />
}

export default Movies