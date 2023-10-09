import React from 'react'
import anh from '../../assets/anh1.jpg'

const ProductModalFind = ({productsData}) => {
   
  return (
    <div className='flex justify-between border border-b-gray-300 border-t-white border-l-white border-r-white'>
        <div>
             <div className='text-xs pb-2'>{productsData?.product_name}</div>
             <div className='text-xs'>{productsData?.price}</div>
        </div>
        <div>
            <img src={productsData?.thumb} className='w-[50px] h-[50px] object-cover'/>
        </div>
    </div>
  )
}
export default ProductModalFind