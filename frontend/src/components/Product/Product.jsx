import React from 'react'
import withBase from '../../hocs/withBase'
import {formatNumber} from '../../ultils/helper'
import { useNavigate } from 'react-router-dom'

const Product = ({productData}) => {
  const navigate=useNavigate();
  return (
    <div className='w-[450px] h-[450px]'>
        <div 
            className='p-[15px] flex flex-col text-center justify-center items-center gap-3 '
            onClick={()=>navigate(`/${productData?.id}/${productData?.product_name}`)}
            >
            <img src={productData?.thumb} className=' top-[20px] left-[200px] sm:w-[200px] sm:h[200px]  lg:w-[300px] lg:h-[300px] object-cover rounded-lg '/>
            <h3 className=' sm:text-xs lg:text-base'>{productData?.product_name}</h3>
            <div className=' sm:text-xs lg:text-base'>{`${formatNumber(productData?.price)}đ`}</div>
        </div>  
    </div>
  )
}
export default withBase(Product)