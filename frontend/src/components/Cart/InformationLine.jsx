import React from 'react'
import Button from '../Button/Button'
import { formatNumber } from '../../ultils/helper'

const InformationLine = ({data}) => {
    console.log(data)
    return (
        <div className='border border-gray-300 w-[250px] h-[200px] ml-6 flex flex-col '>
            <div className=' h-[33%] flex justify-start items-center p-2 border border-b-gray-300 text-base font-semibold opacity-80 '>Information line</div>
            <div className='h-[33%] border border-b-gray-300 flex opacity-90 justify-between items-center text-sm font-semibold'>
                <span className='pl-2'>Total payment : </span>
                <span className='pr-2'>{formatNumber(data?.carts?.reduce((sum, el) => sum + Number(el?.cart?.price), 0)) + 'đ'}</span>
            </div>
            <div className='h-[33%] w-full  justify-center items-center text-center flex'>
                <div className='w-[90%] flex flex-col'>
                    <Button buttonAdd children='CHECK OUT' />
                </div>
            </div>
        </div>
    )
}

export default InformationLine