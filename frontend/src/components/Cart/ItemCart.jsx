import React from 'react'
import { formatNumber } from '../../ultils/helper'
import icons from '../../ultils/icons'
import { deleteItemCart } from '../../apis/user'
import withBase from '../../hocs/withBase'
import { useSelector } from 'react-redux'
import { getListCart } from '../../store/user/asyncActions'

const { ImBin } = icons

const ItemCart = ({ cartData, dispatch }) => {
    const { current } = useSelector(state => state.user)
    const removeCart = async (username, cid) => {
        const response = await deleteItemCart(username, cid)
        if (response){
           dispatch(getListCart(current?.username))
        }
    }

    return (
        <div className='w-full justify-between  flex gap-2 border  border-t-white border-l-white border-r-white border-b-gray-200'>
            <div className='w-full flex gap-2 border  border-t-white border-l-white border-r-white border-b-gray-200'>
                <img src={cartData?.product?.thumb} className='w-[90px] h-[90px] object-contain' />
                <div>
                    <div className='uppercase text-xs font-medium text-gray-900 mt-1'>{cartData?.product?.product_name}</div>
                    <div className='font-light text-sm opacity-70 pt-1'>{cartData?.cart?.size}</div>
                    <div className='flex gap-3 items-center'>
                        <div className='w-[30px] h-[25px] bg-gray-300 flex justify-center items-center mt-3 text-gray-700 text-xs'>{cartData?.cart?.quantity}</div>
                        <div className='mt-2 block text-center font-normal opacity-70 text-sm'>{`${formatNumber(cartData?.cart?.price)}đ`}</div>
                    </div>
                </div>
            </div>
            <div
                onClick={() => removeCart(current?.username, cartData?.cart?.id)}
                className='pt-2 hover:text-gray-300 text-gray-800 cursor-pointer'
            >
                <ImBin />
            </div>
        </div>
    )
}

export default withBase(ItemCart)