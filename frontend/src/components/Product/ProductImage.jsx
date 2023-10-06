import React from 'react'

const ProductImage = ({productData}) => {
 
  return (
    <div className='mb-2'>
      <img src={productData} className='w-[230px] h-[200px] object-cover'/>
    </div>
  )
}

export default ProductImage