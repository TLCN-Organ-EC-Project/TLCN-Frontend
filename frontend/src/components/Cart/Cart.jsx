import icons from '../../ultils/icons'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { useProductsByCart } from '../../hooks/useProductsByCategory'
import { formatNumber } from '../../ultils/helper'
import Button from '../Button/Button'
import { deleteItemCart } from '../../apis/user'
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom'
import path from '../../ultils/path'
import { ShowModal } from '../../store/app/appSlice'
import { useDispatch } from 'react-redux'
import Loading from '../Loading/Loading'

const { AiOutlineCloseCircle, ImBin } = icons

const Cart = () => {
    const dispatch = useDispatch()
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const { current } = useSelector(state => state.user);
    const { data: productsData, isLoading: isFetchingProducts } = useProductsByCart(current?.username);
    
    const removeCart = async (username, cid) => {
        const response = await deleteItemCart(username, cid)
        if (response) {
            queryClient.invalidateQueries(['products-dataCart', current?.username])
        }
    }
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className='w-[400px]  h-screen overflow-y-auto bg-white  text-gray-800 p-6 z-50 '>
            <div className='flex justify-between'>
                <span className='text-base font-semibold'>Cart products</span>
                <span className='hover:text-blue-600 transition cursor-pointer'>
                    <AiOutlineCloseCircle
                        onClick={() => dispatch(ShowModal({
                            isShowModal: false,
                            modalChildren: null,
                        }))}
                        size={25}
                    />
                </span>
            </div>
            <div className='py-5 border border-t-white border-l-white border-r-white border-b-gray-700 border-b-2'>
                <div className={clsx('w-full relative mb-2 ')}>
                    {
                        isFetchingProducts
                        ?
                       <Loading/>
                        :
                        productsData?.carts?.map((el) => (
                            <div className='w-full justify-between  flex gap-2 border  border-t-white border-l-white border-r-white border-b-gray-200'>
                                <div className='w-full flex gap-2 border  border-t-white border-l-white border-r-white border-b-gray-200'>
                                    <img src={el?.product?.thumb} className='w-[90px] h-[90px] object-contain' />
                                    <div>
                                        <div className='uppercase text-xs font-medium text-gray-900 mt-1'>{el?.product?.product_name}</div>
                                        <div className='font-light text-sm opacity-70 pt-1'>{el?.cart?.size}</div>
                                        <div className='flex gap-3 items-center'>
                                            <div className='w-[30px] h-[25px] bg-gray-300 flex justify-center items-center mt-3 text-gray-700 text-xs'>{el?.cart?.quantity}</div>
                                            <div className='mt-2 block text-center font-normal opacity-70 text-sm'>{`${formatNumber(el?.cart?.price)}đ`}</div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    onClick={() => removeCart(current?.username, el?.cart?.id)}
                                    className='pt-2 hover:text-gray-300 text-gray-800 cursor-pointer'
                                >
                                    <ImBin />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                productsData &&
                <div className='py-2 flex justify-between items-center'>
                    <span className='uppercase'>Total amount : </span>
                    <span>
                        {
                            formatNumber(
                                productsData?.carts?.reduce((sum, el) => sum + Number(el?.cart?.price), 0)
                            )
                                === undefined ? 0 :
                                formatNumber(
                                    productsData?.carts?.reduce((sum, el) => sum + Number(el?.cart?.price), 0)
                                ) +

                                'đ'
                        }
                    </span>
                </div>
            }
            {
                productsData &&
                <div className='flex justify-between items-center gap-3 py-5'>
                    <Button
                        handleOnClick={() => {
                            navigate(`/${path.ORDER}`)
                            dispatch(ShowModal({
                                isShowModal: false,
                                modalChildren: null
                            }))
                        }
                        }
                        children='CHECK OUT'
                        buttonAdd
                    />
                    <Button
                        handleOnClick={() => {
                            navigate(`/${path.DETAIL_CART}`)
                            dispatch(ShowModal({
                                isShowModal: false,
                                modalChildren: null
                            }))
                        }
                        }
                        children='DEATAIL CART'
                        buttonAdd />
                </div>
            }

        </div>
    )
}

export default Cart