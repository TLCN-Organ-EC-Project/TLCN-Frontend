import React from 'react'
import withBase from '../../hocs/withBase'
import {formatNumber} from '../../ultils/helper'
import { useNavigate } from 'react-router-dom'

const Product = ({productData}) => {
  console.log(productData)
  const navigate=useNavigate();
  return (
    <div className='w-main text-base'>
        <div 
            className='p-[15px] flex flex-col items-center gap-3'
            onClick={()=>navigate(`/${productData?.id}/${productData?.product_name}`)}
            >
            <img src={productData?.thumb} className=' top-[20px] left-[200px] w-[33%] object-cover rounded-lg '/>
            <h3 className='text-'>{productData?.product_name}</h3>
            <div>{`${formatNumber(productData?.price)}đ`}</div>
        </div>  
    </div>
  )
}
export default withBase(Product)