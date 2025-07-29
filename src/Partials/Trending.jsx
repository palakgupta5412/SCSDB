import React, { useState ,useEffect } from 'react'
import Dropdown from './Dropdown'
import Topnav from '../Components/Topnav'
import 'remixicon/fonts/remixicon.css'
import { useNavigate } from 'react-router-dom'
import axios from '../Utils/axios'
import Cards from '../Components/Cards'
import Loader from '../Components/Loader'
const Trending = () => {

    const [duration , setDuration] = useState("day");
    const [category , setCategory] = useState("all");
    const [trending , setTrending] = useState(null);

    const navigate = useNavigate();

    const getTrending = async() =>{
      try{
        const trend = await axios.get(`/trending/${category}/${duration}`);
        setTrending(trend.data.results);
      }
      catch(error){
        console.log(error);
      }
    }   

    useEffect(()=>{
        getTrending();
    } , [category , duration])
    console.log(trending);
    
  return trending.length>0 ? (
    <div className='p-[3%] w-screen min-h-screen overflow-auto'>
        <div className='flex items-center justify-between h-[10vh]'>
            <h1 className='text-2xl text-zinc-400 flex items-center gap-1 justify-center'><i onClick={()=>{navigate(-1)}} className="hover:text-[#6556CD] text-4xl ri-arrow-drop-left-line z-9000"></i>Trending</h1>
            <div className='flex items-end gap-1'>  
                <Topnav className={'w-[40vw] relative'} div={'left-[25%] w-[55%] top-[100%]'}/>
                <Dropdown title={"Category"} options={["all" , "movie" , "tv"]} func={(e)=>{setCategory(e.target.value)}}/>
                <Dropdown title={"duration"} options={["week","day"]} func={(e)=>{setDuration(e.target.value)}}/>
            </div>  
        </div>
        <Cards data={trending}/>  
    </div>
  ) : (<Loader />)
}

export default Trending