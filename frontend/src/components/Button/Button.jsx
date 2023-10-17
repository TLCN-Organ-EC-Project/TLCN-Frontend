import {memo}from 'react'
import clsx from 'clsx'
const Button = ({children, handleOnClick,type='button',buttonAdmin, buttonAdd,btnLogin,btnOrder}) => {
  return (
    <button
     type={type}
     className={clsx('px-2 py-2 rounded-md text-white text-semibold',btnLogin&& 'bg-rose-500',buttonAdd && 'bg-black text-white rounded-none w-full' ,buttonAdmin && 'flex justify-end  ml-40 my-5',btnOrder && 'w-full')}
     onClick={()=>{handleOnClick && handleOnClick()}}
    >
     {children}   
    </button>
  )
}

export default memo(Button)