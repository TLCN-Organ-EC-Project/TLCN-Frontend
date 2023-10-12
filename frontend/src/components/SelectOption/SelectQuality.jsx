import React ,{memo}from 'react'

const SelectQuality = ({quantily, handleQuantily,handleChangeQuantity}) => {
    return (
        <div className='flex items-center pt-5 h-8'>
            <span onClick={()=>handleChangeQuantity('minus')} className='p-3 border-r border-gray-100  h-8 border  border-b border-t   bg-gray-200 cursor-pointer flex justify-center items-center'>-</span>
            <input
              className='h-8 px-4 outline-none w-[100px] text-black text-center flex justify-center border-b border-t border-gray-200'
              type='text'
              value={quantily}
              onChange={e=>handleQuantily(e.target.value)}
            />
            <span onClick={()=>handleChangeQuantity('plus')} className='p-3 border-l border-gray-100  h-8 border  border-b border-t bg-gray-200 cursor-pointer flex justify-center items-center'>+</span>
        </div>
      )
}
export default memo(SelectQuality)