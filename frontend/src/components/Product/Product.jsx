import React from 'react'
import withBase from '../../hocs/withBase'

const Product = ({productData}) => {
 
  return (
    <div className='w-main text-base'>
        <div className='border p-[15px] flex flex-col items-center relative'>
          <h3>{productData?.product_name}</h3>
            <img src={productData?.thumb} className=' top-[20px] left-[200px] w-[100px] h-[40px] object-cover'/>
        </div>  
    </div>
  )
}

export default withBase(Product)