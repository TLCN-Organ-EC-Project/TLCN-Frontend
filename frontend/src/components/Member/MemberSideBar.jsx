import {memberSideBar} from '../../ultils/contants'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
const activedStyle='flex flex-col gap-2 text-blue-500 transition'
const notactivedStyle='flex flex-col gap-2'

const MemberSideBar = () => {
  return (
    <div className='w-[800px] h-full '>
        <div className='font-bold flex text-center flex justify-center'>Account</div>
        <div className='flex justify-center flex-col'>
        {memberSideBar.map((el)=>(
          <NavLink 
          to={el.path}
          key={el.id}
          className={({isActive})=>clsx(isActive && activedStyle, !isActive && notactivedStyle)}
          >
              <span>{el.text}</span>
            </NavLink>
        ))}
        </div>
    </div>
  )
}
export default MemberSideBar