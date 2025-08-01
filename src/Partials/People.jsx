import React, { useState ,useEffect } from 'react'
import Dropdown from './Dropdown'
import Topnav from '../Components/Topnav'
import 'remixicon/fonts/remixicon.css'
import { useNavigate } from 'react-router-dom'
import axios from '../Utils/axios'
import Cards from '../Components/Cards'
import Loader from '../Components/Loader'
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {

    document.title = "SCS | People";

    const [people , setPeople] = useState([]);
    const [page , setPage] = useState(1);
    const [hasMore , setHasMore] = useState(true);
    
    const navigate = useNavigate();

    const getPeople = async() =>{
      try{
        const people = await axios.get(`/person/popular?page=${page}`);

        if(people.data.results.length>0){
          setPage((prev)=>prev+1);
          setPeople((prev)=>[...prev , ...people.data.results]);
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
      if(people.length===0){
        getPeople();
      }
      else{
        setPage(1);
        setPeople([]);
        getPeople();
      }
    }

    useEffect(()=>{
        refreshHandler();
    } , [])

  return people ? (
    <div className='w-screen h-screen'>
        <div className='flex items-center justify-between h-[10vh] align-center pt-4 '>
            <h1 className='text-3xl text-zinc-400 flex items-center ml-[5%] font-bold gap-1 justify-center'><i onClick={()=>{navigate(-1)}} className="hover:text-[#6556CD] text-4xl ri-arrow-drop-left-line z-9000"></i>People</h1>
            <div className='flex items-end gap-1 p-3 pr-10'>  
                <Topnav className={'w-[40vw] h-[12vh] pt-4'} div={'left-[23%]  w-[55%] top-[100%]'}/>
                {/* <Dropdown title={"Category"} options={["airing_today" , "on_the_air" , "popular" , "top_rated"]} func={(e)=>{setCategory(e.target.value)}}/> */}
                {/* <Dropdown title={"duration"} options={["week","day"]} func={(e)=>{setDuration(e.target.value)}}/> */}
            </div>  
        </div>

        <InfiniteScroll
          dataLength={people.length}
          next={getPeople}
          hasMore={hasMore}
          loader={<h1 className='text-zinc-400 p-10'>Loading...</h1>}
        >
          <Cards data={people} title={'people'}/>  
        </InfiniteScroll>
    </div>
  ) : <Loader />
}

export default People