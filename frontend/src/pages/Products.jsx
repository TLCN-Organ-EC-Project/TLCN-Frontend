import { useState } from "react";
import { category } from '../ultils/contants'
import { motion } from "framer-motion";
import { NavLink, useNavigate } from 'react-router-dom'
import Product from "../components/Product/Product";
import Skeleton from "../components/Skeleton/Skeleton";
import { useProductsByCategory } from "../hooks/useProductsByCategory";
import Pagination from "../components/Pagination/Pagination";
import { useDetailProductStore } from "../hooks/useDetailProductStore";
import {  useQueryClient } from "react-query";
import { useSnapshot } from "valtio";

const Products = () => {

  const navigate = useNavigate()
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState(category[0].id)
  const detailProductStore = useDetailProductStore();
  const detailProductStoreSnapshot = useSnapshot(detailProductStore)


  const handleItemClick = (el) => {
    setTimeout(() => {
      navigate(el.id);
    }, 0);
  };
  console.log(detailProductStoreSnapshot.page_id)
  const { data: productsData, isLoading: isFetchingProducts } = useProductsByCategory(activeTab, detailProductStoreSnapshot.page_id);
  
  return (
    <div className="w-main">
      <div className='xl:w-main xl:flex xl:justify-around xl:items-center bg-gray-200 h-10  sm:grid sm:grid-cols-9 sm:text-center sm:items-center sm:justify-center'>
        {category.map((el) => (
          <button
            key={el.id}
            onClick={() => { setActiveTab(el.id); handleItemClick(el); detailProductStoreSnapshot.page_id(1)}}
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
        <div className="w-full grid grid-cols-3 justify-center items-center sm:grid-cols-2 sm:justify-start md:grid-cols-3  gap-2 lg:pl-8 sm:pl-0">
          {isFetchingProducts ? (
            <Skeleton type="test" />
          ) : (
            productsData?.map((el) => (
              <Product key={el.id} pid={el.id} productData={el} normal={true} />
            ))
          )}
        </div>
      </div>
      <Pagination/>
    </div>
  )
}
export default Products