import React, { useCallback, useEffect, useState } from 'react'
import icons from '../../ultils/icons'
import ProductModalFind from '../Product/ProductModalFind'
import { findProducts } from '../../apis/products'
import useDebounce from '../../hooks/useDebounce'
import { useDispatch } from 'react-redux'
import { ShowModal } from '../../store/app/appSlice'
import clsx from 'clsx'

const { AiOutlineCloseCircle } = icons
const ModalSearch = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const [productsData, setProductsData] = useState(null)
    const [search, setSearch] = useState('')

    const fetchProducts = useCallback(async (keyword) => {
        const response = await findProducts(
            keyword, 1, 10
        )
        if (response) {
            setProductsData(response?.data)
        }
    }, [])
    const debounce = useDebounce(search, 400)
    useEffect(() => {
        setIsLoading(true)
        fetchProducts(debounce)
        setIsLoading(false)
    }, [search, debounce])
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className='w-[400px]  h-screen overflow-y-auto bg-white  text-gray-800 p-6 z-50 '>
            <div className='flex justify-between'>
                <span className='text-base font-semibold'>Find products</span>
                <span className='hover:text-blue-600 transition cursor-pointer'>
                    <AiOutlineCloseCircle
                        onClick={() => dispatch(ShowModal({
                            isShowModal: false,
                            modalChildren: null,
                        }))}
                        size={25}
                    />
                </span>
            </div>
            <div className='py-5'>
                <div className={clsx('w-full relative mb-2 ')}>
                    <input
                        type='text'
                        className={clsx('px-4 py-2 rounded-sm border w-full focus:invalid:border-pink-300')}
                        placeholder='Find product here'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            {
                productsData?.map((el) => (
                    <ProductModalFind productsData={el} key={el.id} />
                ))
            }
        </div>
    )
}

export default ModalSearch