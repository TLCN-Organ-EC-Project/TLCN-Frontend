import React from 'react'
import { useGetListProvider } from '../../hooks/useProductsByCategory'


const SelectProvide = () => {
    const {data:listProvider,isLoading:isFetchingData}=useGetListProvider()

    console.log(listProvider)
    
  return (
    <div>SelectProvide</div>
  )
}

export default SelectProvide