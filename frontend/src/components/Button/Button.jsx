import {memo}from 'react'
import clsx from 'clsx'
const Button = ({children, handleOnClick, style,type='button'}) => {
  return (
    <button
     type={type}
     className={clsx('px-2 py-2 rounded-md text-gray-800 bg-red-300 text-semibold border border-gray-600 transition opacity-90 hover:opacity-100 hover:border-gray-900 hover:shadow-lg')}
     onClick={()=>{handleOnClick && handleOnClick()}}
    >
     {children}   
    </button>
  )
}

export default memo(Button)