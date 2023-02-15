import React, { useEffect } from 'react'
import { Index } from './Calender/Index'
import HomePage from './HomePage/HomePage'
import { BlogForm } from '../components/BlogForm/BlogForm'
import { Board } from './BlogPages/Board'

import BlogService from "./../service/Blog.service";




const KosziE = () => {
  //className={`border-sky-500 bg-[#092636]`}


  return (
    <div>
      
       <HomePage/>
      <Index/> 
  
      <Board/>
    
    </div>
  )
}

export default KosziE