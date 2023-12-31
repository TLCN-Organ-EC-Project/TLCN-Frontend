import React,{useState} from 'react'
import {category} from '../../ultils/contants'
import { motion } from "framer-motion";
import { NavLink,useNavigate } from 'react-router-dom'

const NavBarCategory = () => {
    const navigate=useNavigate()
    const [activeTab, setActiveTab] = useState(category[0].id)
    const handleItemClick = (el) => {
        setTimeout(() => {
          navigate(el.id);
        }, 0);
      };
    return (
    <div className='w-main flex justify-around items-center bg-gray-200 h-10'>
        {category.map((el)=>(
            <button
            key={el.id}
            onClick={()=>{setActiveTab(el.id);handleItemClick(el)}}
            className={`${
              activeTab===el.id ? "text-gray-900" : "hover:text-gray-500"
            } relative px-5 py-1.5 text-sm font-medium text-gray-900 transition 
            `}
          >
              {activeTab===el.id && (
                <motion.div
                  layoutId='active-pill'
                  className='absolute inset-0 border-b-2 border-b-rose-300 '
                  style={{borderRadius:9999}}
                  transition={{duration:0.5}}
                />
              )}
              <NavLink  to={el.path}  className='relative z-50'>{el.name}</NavLink>
          </button>
        ))}
    </div>
  )
}

export default NavBarCategory