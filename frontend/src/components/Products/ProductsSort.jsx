import React, { useEffect, useState } from 'react'
import { menuSPMoi } from '../../ultils/contants'
import CustomSlider from '../Slider/CustomSlider'
import { getProductByCategory } from '../../apis/products'
import ButtonSeeMore from '../Button/ButtonSeeMore'
import { useNavigate } from 'react-router-dom'
import path from '../../ultils/path'
import { useProductsByCategory } from '../../hooks/useProductsByCategory'

const ProductsSort = () => {
    const navigate=useNavigate()

    const [activedTab, setActivedTab] = useState(1)

    const { data: productsData, isLoading: isFetchingProducts } = useProductsByCategory(activedTab);

    const handleClickButtonShowMore = () => {
        navigate(`${path.PRODUCTS}`);
      };

    return (
        <div className='w-main'>
            <h3 className='font-light text-center text-sm'>NEW PRODUCTS</h3>
            <div className='flex justify-center text-center transition  py-3 gap-10'>
                {menuSPMoi.map((el) => (
                    <h1
                        key={el.id}
                        className={`text-2xl font-semibold text-gray-700 transition hover:text-blue-400 cursor-pointer 
                    ${activedTab === el.id ? 'border-b-black transition border border-t-gray-100 pb-1' : ''}`}
                        onClick={() => setActivedTab(el.id)}
                    >
                        {el.name}
                    </h1>
                ))}
            </div>
            <CustomSlider products={productsData} />
            <div className="justify-center flex  pt-10">
                <ButtonSeeMore children="Show more" handleOnClick={handleClickButtonShowMore}/>
            </div>
        </div>
    )
}

export default ProductsSort