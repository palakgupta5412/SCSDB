import React, { useState ,useEffect } from 'react'
import Dropdown from './Dropdown'
import Topnav from '../Components/Topnav'
import 'remixicon/fonts/remixicon.css'
import { useNavigate } from 'react-router-dom'
import axios from '../Utils/axios'
import Cards from '../Components/Cards'
import Loader from '../Components/Loader'
import InfiniteScroll from 'react-infinite-scroll-component';


const Trending = () => {

  document.title = "SCS | Trending";
  
    const [duration , setDuration] = useState("day");
    const [category , setCategory] = useState("all");
    const [trending , setTrending] = useState([]);
    const [page , setPage] = useState(1);
    const [hasMore , setHasMore] = useState(true);


    const navigate = useNavigate();

    const getTrending = async() =>{
      try{
        const trend = await axios.get(`/trending/${category}/${duration}?page=${page}`);

        if(trend.data.results.length>0){
          setPage((prev)=>prev+1);
          setTrending((prev)=>[...prev , ...trend.data.results]);
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
      if(trending.length===0){
        getTrending();
      }
      else{
        setPage(1);
        setTrending([]);
        getTrending();
      }
    }

    useEffect(()=>{
        refreshHandler();
    } , [category , duration])

    useEffect(()=>{
        refreshHandler();
    } , [])
    
  return trending ? (
    <div className='w-screen h-screen'>
        <div className='flex items-center justify-between h-[10vh] align-center pt-4 '>
            <h1 className='text-3xl text-zinc-400 flex items-center ml-[5%] font-bold gap-1 justify-center'><i onClick={()=>{navigate(-1)}} className="hover:text-[#6556CD] text-4xl ri-arrow-drop-left-line z-9000"></i>Trending</h1>
            <div className='flex items-end gap-1 p-3 '>  
                <Topnav className={'w-[40vw] h-[10vh] relative'} div={'left-[23%]  w-[55%] top-[100%]'}/>
                <Dropdown title={"Category"} options={["all" , "movie" , "tv"]} func={(e)=>{setCategory(e.target.value)}}/>
                <Dropdown title={"duration"} options={["week","day"]} func={(e)=>{setDuration(e.target.value)}}/>
            </div>  
        </div>

        <InfiniteScroll
          dataLength={trending.length}
          next={getTrending}
          hasMore={hasMore}
          loader={<h1 className='text-zinc-400 p-10'>Loading...</h1>}
        >
          <Cards data={trending}/>  
        </InfiniteScroll>
    </div>
  ) : (<Loader />)
}

export default Trending