import React,{useState, useEffect} from 'react'
import {blogs} from '../ultils/contants'
import { BlogItem } from '../components'
import Skeleton from "../components/Skeleton/Skeleton";


const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect (()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },3*1000)
  },[])
  return (
    <div className='w-main h-full'>
      {
        isLoading ? 
        <div className='grid grid-cols-3 justify-center gap-4 pl-4'>
           <Skeleton type="feed"/> 
        </div>
        :
        (
          <div className='grid grid-cols-3 justify-center gap-4 pl-4'>
             {blogs.map((el)=>(
                 <BlogItem el={el}/>
             ))}
         </div>
        )}
    </div>
  )
}

export default Blog