import React, { useState } from 'react'
import {memberSideBar} from '../../ultils/contants'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import icons from '../../ultils/icons'

const MemberSideBar = () => {
  const [actived, setactived] = useState([])
  return (
    <div className='w-[800px] h-full'>
        <div className='font-bold flex text-center flex justify-center'>Account</div>
        {memberSideBar.map((el)=>(
            <NavLink 
              to={el.path}
              key={el.id}
              className='flex flex-col gap-3'
            >
              <span>{el.icons}</span>
              <span>{el.text}</span>
            </NavLink>
        ))}
    </div>
  )
}

export default MemberSideBar