import React from 'react'
import ReadMoreReact from 'read-more-react';

const BlogItem = ({ el }) => {
    return (
        <div className='w-[400px]'>
            <img src={el.image} className='w-[380px] h-[254px]' />
            <div className='font-semibold text-lg py-2'>
                {el.title}
            </div>
            <div className='flex gap-2 text-sm text-gray-700'>
                <span>{el.author}</span>
                <span>{el.createAt}</span>
            </div>
            <div className='text-sm font-normal py-2'>
                <ReadMoreReact text={el.desc}
                    min={80}
                    ideal={100}
                    max={200}
                    readMoreText={<span className="text-red-500 hover:text-red-900 translate-x-1 transition">Read more → </span>} />
            </div>
        </div>
    )
}

export default BlogItem