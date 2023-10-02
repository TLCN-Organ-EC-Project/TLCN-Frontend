import React,{useState} from 'react'
import { menuSPMoi } from '../ultils/contants'

const ProductsSort = () => {
    const [activedTab, setActivedTab] = useState(1)
    return (
        <div className='w-main'>
            <h3 className='font-light text-center text-sm'>SẢN PHẨM MỚI</h3>
            <div className='flex justify-center text-center transition  py-3 gap-10'>
                {menuSPMoi.map((el) => (
                    <h1 
                    className={`text-2xl font-semibold text-gray-700 transition hover:text-blue-400 cursor-pointer 
                    ${activedTab === el.id ? 'border-b-black transition border border-t-gray-100' : ''}`}
                    onClick={() => setActivedTab(el.id)}
                    >
                        {el.name}
                    </h1>
                ))}
            </div>
        </div>
    )
}

export default ProductsSort