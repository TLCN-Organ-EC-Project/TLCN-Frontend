import React from 'react'
import { formatNumber } from '../../ultils/helper'
import { useNavigate } from 'react-router-dom'
import path from '../../ultils/path'
import { ButtonBack } from '../Button/ButtonBack'

const InformationLine = ({ data }) => {
    const navigate = useNavigate()
    return (
        <div className='border border-gray-300 w-[250px] h-[200px] ml-6 flex flex-col '>
            <div className=' h-[33%] flex justify-start items-center p-2 border border-b-gray-300 text-base font-semibold opacity-80 '>Information line</div>
            <div className='h-[33%] border border-b-gray-300 flex opacity-90 justify-between items-center text-sm font-semibold'>
                <span className='pl-2'>Total payment : </span>
                <span className='pr-2'>{formatNumber(data?.carts?.reduce((sum, el) => sum + Number(el?.cart?.price), 0)) + 'đ'}</span>
            </div>
            <div className='h-[33%] w-full  justify-center items-center text-center flex'>
                <div className='w-[90%] flex flex-col'>
                    <ButtonBack
                        children='CHECK OUT'
                        handleClick={() => navigate(`/${path.ORDER}`)}
                    />
                </div>
            </div>
        </div>
    )
}

export default InformationLine