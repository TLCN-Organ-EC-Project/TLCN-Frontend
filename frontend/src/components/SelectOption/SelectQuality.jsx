import React ,{memo}from 'react'

const SelectQuality = ({quantily, handleQuantily,handleChangeQuantity}) => {
    return (
        <div className='flex items-center pt-5 h-8'>
            <span onClick={()=>handleChangeQuantity('minus')} className='p-1 border-r border-gray-400 pr-2 h-8 border bg-gray-300 cursor-pointer'>-</span>
            <input
              className='py-1 h-8 px-4 outline-none w-[100px] text-black text-center flex justify-center border-b border-t border-gray-400'
              type='text'
              value={quantily}
              onChange={e=>handleQuantily(e.target.value)}
            />
            <span onClick={()=>handleChangeQuantity('plus')} className='p-1 border-l border-gray-400 pl-2 h-8 border bg-gray-300 cursor-pointer'>+</span>
        </div>
      )
}
export default memo(SelectQuality)