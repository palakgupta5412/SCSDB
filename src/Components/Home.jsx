import React from 'react'
import Sidenav from '../Partials/Sidenav'
import Topnav from './Topnav'

const Home = () => {
    document.title = "SCS | Homepage"
  return (
    <>
        <Sidenav />
        <div className='h-full w-[80%] '>
            <Topnav />
            
        </div>
    </>
  )
}

export default Home
