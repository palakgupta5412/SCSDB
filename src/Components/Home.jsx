import React, { useEffect , useState} from 'react'
import Sidenav from '../Partials/Sidenav'
import Topnav from './Topnav.jsx'
import axios from '../Utils/axios.jsx'
import Header from './Header.jsx'
import HorizontalCards from '../Partials/HorizontalCards.jsx'
const Home = () => {
    document.title = "SCS | Homepage"

    const [wallpaper , setWallpaper] = useState({});

    const getHeader = async() =>{
      try{
        const trending = await axios.get('/trending/all/day');
        setWallpaper(trending.data.results[Math.floor(Math.random()*trending.data.results.length)])
        console.log(wallpaper);
      }
      catch(error){
        console.log(error);
      }
    }

    useEffect(()=>{
      getHeader();
    },[])
  return (
    <>
        <Sidenav />
        <div className='h-full w-[80%] overflow-y-auto overflow-x-hidden'>
            <Topnav />
            <Header data={wallpaper} />
            <HorizontalCards />
        </div>

    </>
  )
}

export default Home
