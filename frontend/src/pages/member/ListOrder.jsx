import React from 'react'
import { useListOrderByUserName } from '../../hooks/useProductsByCategory'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Loading from '../../components/Loading/Loading'
import { ButtonBack } from '../../components/Button/ButtonBack'
import { useNavigate } from "react-router-dom"
import path from '../../ultils/path'

const ListOrder = () => {
    const navigate= useNavigate()
    const { current } = useSelector(state => state.user);
    const { data: orderData, isLoading: isFetchingProducts } = useListOrderByUserName(current?.username);
    console.log(orderData)
    const handleClickOrder=()=>{
        
    }
    return (
        <div>
            <div className='flex justify-center text-base font-semibold'>List Order</div>
            <div className='w-full bg-order h-full'>
                <div className='text-sm font-semibold py-2 border border-b-gray-200'>LATEST ORDER LIST</div>
                <div className='grid grid-cols-4 text-sm font-bold gap-20 justify-around border border-b-gray-300 py-2'>
                    <div className='pl-2'>Code orders</div>
                    <div>Booking date</div>
                    <div className='mr-2'>Payment status</div>
                </div>
                {
                    isFetchingProducts 
                    ?
                     (<Loading/>)
                     :
                   orderData?.map((el) => (
                        <div className='grid grid-cols-4 text-sm font-medium gap-16 justify-around py-1'>
                            <div className='text-xs flex justify-start'>{el?.booking_id}</div>
                            <div className='pr-5'>{moment(el?.booking_date).format('YYYY-MM-DD')}</div>
                            <div className='mr-2'>{el.status}</div>
                            <ButtonBack children='Detail Order'handleClick={()=>navigate(`/member/${el?.booking_id}`)} />  
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default ListOrder