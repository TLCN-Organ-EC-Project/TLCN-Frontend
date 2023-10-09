import React, { useCallback, useEffect, useState } from 'react'
import icons from '../../ultils/icons'
import { InputField } from '../Input'
import ProductModalFind from '../Product/ProductModalFind'
import { useSearchParams } from 'react-router-dom'
import { findProducts } from '../../apis/products'
import useDebounce from '../../hooks/useDebounce'

const { AiOutlineCloseCircle } = icons
const ModalSearch = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [productsData, setProductsData] = useState(null)
    const [params] = useSearchParams()

    const [search, setSearch] = useState({
        search: ''
    })
    console.log(search)
    const queriesDebounce = useDebounce(search.search, 800)
    const fetchProducts = useCallback(async (keyword) => {
        const response = await findProducts(
            keyword, 1, 10
        )
        if (response) {
            setProductsData(response)
        }
    }, [])
    useEffect(() => {
        setIsLoading(true)
        const queries = Object.fromEntries([...params])
        if (queriesDebounce) queries.search = queriesDebounce
        fetchProducts(queries)
    }, [search])
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className='w-[400px]  h-screen overflow-y-auto bg-white  text-gray-800 p-6 z-50 '>
            <div className='flex justify-between'>
                <span className='text-base font-semibold'>Find products</span>
                <span className='hover:text-blue-600 transition cursor-pointer'>
                    <AiOutlineCloseCircle size={25} />
                </span>
            </div>
            <div className='py-5'>
                <InputField
                    search
                    placeholder='Find products here'
                    nameKey={'search'}
                    value={search.search}
                    setValue={setSearch}
                />
            </div>
            <ProductModalFind productsData={productsData} />
        </div>
    )
}

export default ModalSearch