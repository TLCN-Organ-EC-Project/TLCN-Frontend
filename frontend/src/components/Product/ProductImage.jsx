import React, { useEffect } from 'react'
import { useDetailProductStore } from '../../hooks/useDetailProductStore'
const ProductImage = ({productData}) => {

  const detailProductStore = useDetailProductStore();

  const handleOnClick = (e, el) => {
    e.stopPropagation()
    detailProductStore.urlImageString = el 
  }
 
  return (
    <div className='mb-2'>
      <img src={productData} className='w-[230px] h-[200px] object-contain' onClick={e=>handleOnClick(e,productData)}/>
    </div>
  )
}

export default ProductImage