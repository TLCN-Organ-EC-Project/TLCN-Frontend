import React from 'react'
import anh from '../../assets/anh1.jpg'

const ProductModalFind = ({productsData}) => {
  return (
    <div className='flex justify-between border border-b-gray-300 border-t-white border-l-white border-r-white'>
        <div>
             <div className='text-xs pb-2'>Ao thun CARTOON ANT0104</div>
             <div className='text-xs'>99,000d</div>
        </div>
        <div>
            <img src={anh} className='w-[50px] h-[50px] object-cover'/>
        </div>
    </div>
  )
}

export default ProductModalFind