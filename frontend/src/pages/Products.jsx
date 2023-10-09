import { useEffect, useState,useCallback } from "react";
import NavBarCategory from "../components/Navbar/NavBarCategory"
import { getProductByCategory } from '../apis/products'
import { category } from '../ultils/contants'
import { motion } from "framer-motion";
import { NavLink, useNavigate } from 'react-router-dom'
import Product from "../components/Product/Product";
import Skeleton from "../components/Skeleton/Skeleton";


const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(category[0].id)
  const [products, setproducts] = useState(null)
  const handleItemClick = (el) => {
    setTimeout(() => {
      navigate(el.id);
    }, 0);
  };
  const fetchProducts = useCallback(async (cid) => {
    const response = await getProductByCategory(
      cid, 1, 10
    )
    if (response) {
      setproducts(response?.data)
    }
  },[])

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2 * 1000)
    fetchProducts(activeTab)
  }, [activeTab])
  
  return (
    <div className="w-main">
      <div className='w-main flex justify-around items-center bg-gray-200 h-10'>
        {category.map((el) => (
          <button
            key={el.id}
            onClick={() => { setActiveTab(el.id); handleItemClick(el) }}
            className={`${activeTab === el.id ? "text-gray-900" : "hover:text-gray-500"
              } relative px-5 py-1.5 text-sm font-medium text-gray-900 transition 
            `}
          >
            {activeTab === el.id && (
              <motion.div
                layoutId='active-pill'
                className='absolute inset-0 border-b-2 border-b-rose-300 '
                style={{ borderRadius: 9999 }}
                transition={{ duration: 0.5 }}
              />
            )}
            <NavLink to={el.path} className='relative'>{el.name}</NavLink>
          </button>
        ))}
      </div>
      <div className="w-main">
        <div className="w-full grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
          {isLoading ? (
            <Skeleton type="test" />
          ) : (
            products?.map((el) => (
              <Product key={el.id} pid={el.id} productData={el} normal={true} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Products