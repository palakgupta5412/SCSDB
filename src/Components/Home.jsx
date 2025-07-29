import React, { useEffect , useState} from 'react'
import Sidenav from '../Partials/Sidenav'
import Topnav from './Topnav.jsx'
import axios from '../Utils/axios.jsx'
import Header from './Header.jsx'
import HorizontalCards from '../Partials/HorizontalCards.jsx'
import Dropdown from '../Partials/Dropdown.jsx'
import Loader from './Loader.jsx'
const Home = () => {
    document.title = "SCS | Homepage"

    const [wallpaper , setWallpaper] = useState({});
    const [trending, setTrending] = useState(null)
    const [category, setCategory] = useState("all")

    const getHeader = async() =>{
      try{
        const trending = await axios.get('/trending/all/day');
        setWallpaper(trending.data.results[Math.floor(Math.random()*trending.data.results.length)])
      }
      catch(error){
        console.log(error);
      }
    }

    const getTrending = async() =>{
      try{
        const trend = await axios.get(`/trending/${category}/day`);
        setTrending(trend.data.results);
      }
      catch(error){
        console.log(error);
      }
    }

    useEffect(()=>{
      wallpaper && getHeader();
    },[])

    useEffect(()=>{
      getTrending();
    },[category])

  return wallpaper && trending ?(
    <>
        <Sidenav />
        <div className='h-full w-[80%] overflow-y-auto overflow-x-hidden'>
            <Topnav />
            <Header data={wallpaper} />
            
            <div className='m-2 ml-4 mt-12 text-zinc-400 flex justify-between'>
              <h1 className='text-2xl font-semibold'>Trending <i className="text-orange-500 mr-2 ri-fire-fill"></i> </h1>
              <Dropdown title="Filter" options={["tv", "movie" , "all"]} func={(e)=>setCategory(e.target.value)} />
            </div>
            
            <HorizontalCards data={trending}/>
        </div>

    </>
  ) : (<Loader />)
}

export default Home
