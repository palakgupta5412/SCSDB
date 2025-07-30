import React, { useState ,useEffect } from 'react'
import Dropdown from './Dropdown'
import Topnav from '../Components/Topnav'
import 'remixicon/fonts/remixicon.css'
import { useNavigate } from 'react-router-dom'
import axios from '../Utils/axios'
import Cards from '../Components/Cards'
import Loader from '../Components/Loader'
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {

    document.title = "SCS | Popular";

    const [category , setCategory] = useState("all");
    const [popular , setPopular] = useState([]);
    const [page , setPage] = useState(1);
    const [hasMore , setHasMore] = useState(true);
    
    const navigate = useNavigate();

    const getPopular = async() =>{
      try{
        const popular = await axios.get(`/movie/popular?page=${page}`);

        if(popular.data.results.length>0){
          setPage((prev)=>prev+1);
          setPopular((prev)=>[...prev , ...popular.data.results]);
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
      if(popular.length===0){
        getPopular();
      }
      else{
        setPage(1);
        setPopular([]);
        getPopular();
      }
    }

    useEffect(()=>{
        refreshHandler();
    } , [category])

    useEffect(()=>{
        refreshHandler();
    } , [])

  return popular ? (
    <div className='w-screen h-screen'>
        <div className='flex items-center justify-between h-[10vh] align-center pt-4 '>
            <h1 className='text-3xl text-zinc-400 flex items-center ml-[5%] font-bold gap-1 justify-center'><i onClick={()=>{navigate(-1)}} className="hover:text-[#6556CD] text-4xl ri-arrow-drop-left-line z-9000"></i>Popular</h1>
            <div className='flex items-end gap-1 p-3 pr-10'>  
                <Topnav className={'w-[40vw] h-[12vh] pt-4'} div={'left-[23%]  w-[55%] top-[100%]'}/>
                <Dropdown title={"Category"} options={["movie" , "tv"]} func={(e)=>{setCategory(e.target.value)}}/>
                {/* <Dropdown title={"duration"} options={["week","day"]} func={(e)=>{setDuration(e.target.value)}}/> */}
            </div>  
        </div>

        <InfiniteScroll
          dataLength={popular.length}
          next={getPopular}
          hasMore={hasMore}
          loader={<h1 className='text-zinc-400 p-10'>Loading...</h1>}
        >
          <Cards data={popular}/>  
        </InfiniteScroll>
    </div>
  ) : <Loader />
}

export default Popular