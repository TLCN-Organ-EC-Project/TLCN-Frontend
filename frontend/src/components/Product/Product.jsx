import React from 'react'
import withBase from '../../hocs/withBase'
import {formatNumber} from '../../ultils/helper'

const Product = ({productData}) => {
 
  console.log(productData)
  return (
    <div className='w-main text-base'>
        <div className='p-[15px] flex flex-col items-center gap-3'>
            <img src={productData?.thumb} className=' top-[20px] left-[200px] w-[33%] object-cover rounded-lg '/>
            <h3 className='text-'>{productData?.product_name}</h3>
            <div>{`${formatNumber(productData?.price)}đ`}</div>
        </div>  
    </div>
  )
}

export default withBase(Product)