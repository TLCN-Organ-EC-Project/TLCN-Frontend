import React from 'react'
import {blogs} from '../ultils/contants'
import { BlogItem } from '../components'
import Masonry from 'react-masonry-css'


const Blog = () => {
  return (
    <div className='w-main h-full'>
        <div className='grid grid-cols-3 justify-center gap-4 pl-4'>
           {blogs.map((el)=>(
                <BlogItem el={el}/>
           ))}
        </div>
    </div>
  )
}

export default Blog