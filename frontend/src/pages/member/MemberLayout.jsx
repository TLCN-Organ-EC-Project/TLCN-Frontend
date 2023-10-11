import React from 'react'
import MemberSideBar from '../../components/Member/MemberSideBar'
import { Outlet } from 'react-router-dom'
import Personal from './Personal'

const MemberLayout = () => {
  return (
    <div className='w-main justify-center text-center'>
            <h2 className='flex justify-center text-center text-xl font-semibold '>My Account</h2>
    <div className='flex w-main'>
            <MemberSideBar/>
            <div>
                <Personal/>
            </div>
    </div>
    </div>
  )
}

export default MemberLayout