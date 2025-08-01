import React from 'react'
import { useState } from 'react';
const Loader = () => {
  return (
    <div className={`absolute top-0 w-screen h-screen flex  bg-[#403939] justify-center items-center`}>
        <img src='./loader.gif' alt='loader' className='w-[30vh] h-[30vh]'/>
    </div>
  )
}

export default Loader