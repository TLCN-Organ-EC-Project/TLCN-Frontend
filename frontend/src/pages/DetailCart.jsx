import SelectQuality from '../components/SelectOption/SelectQuality'
import icons from '../ultils/icons'
import { useProductsByCart } from '../hooks/useProductsByCategory'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { deleteItemCart } from '../apis/user'
import { useQueryClient } from 'react-query'
import Information from '../components/Contact/Information'
import InformationLine from '../components/Cart/InformationLine'
import { formatNumber } from '../ultils/helper'


const { ImBin } = icons
const DetailCart = () => {
  const queryClient = useQueryClient();
  const [note, setNote] = useState('');
  const { current } = useSelector(state => state.user);
  const { data: productsData, isLoading: isFetchingProducts } = useProductsByCart(current?.username);
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };
  const removeCart = async (username, cid) => {
    const response = await deleteItemCart(username, cid)
    if (response) {
      queryClient.invalidateQueries(['products-dataCart', current?.username])
    }
  }


  return (
    <div className="w-main">
      <div className="flex justify-center items-center uppercase font-medium opacity-80">My Cart</div>
      <div className="flex gap-2 py-3 ">
        <div className="w-[70%] bg-gray-200 ">
          {<div className='text-xs p-2'>You have {productsData?.carts?.reduce((sum, el) => sum + Number(el?.cart?.quantity), 0)} products in your cart</div>}
          <div className='flex justify-center py-2 flex-col items-center'>
            {
              productsData?.carts?.map((el) => (
                <div className="w-[95%] flex bg-white border border-b-gray-200 ">
                  <img src={el?.product?.thumb} className='w-[80px] h-[80px] object-contain' />
                  <div className=' pl-4 flex flex-col gap-2 justify-center'>
                    <div className='text-sm font-normal '>
                      {el?.product?.product_name}
                    </div>
                    <span className='font-light text-sm'>{el?.cart?.size}</span>
                  </div>
                  <div className='flex justify-center flex-col ml-auto'>
                    <SelectQuality selectDetail quantily={el?.cart?.quantity} />
                  </div>
                  <div className='flex flex-col justify-center pl-10 text-sm'>
                    {formatNumber(el?.cart?.price)+'đ'}
                  </div>
                  <div className='pl-7 flex flex-col justify-center items-center text-sm'>
                    <div >Into money</div>
                    <div className='text-rose-500'> {formatNumber(el?.cart?.price)+'đ'}</div>
                  </div>
                  <div className='flex flex-col justify-center pl-10 mr-3'>
                    <div
                      onClick={() => removeCart(current?.username, el?.cart?.id)}
                      className='hover:text-rose-800'
                    ><ImBin color='gray' size={16} />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='flex gap-2 items-center'>
          <div className='p-4'>
            <div className='text-sm font-medium p-2'>ORDER NOTES</div>
            <textarea
              value={note}
              onChange={handleNoteChange}
              rows={4}
              cols={40}
              className="border p-2 focus:outline-none focus:border-transparent"
              />
          </div>
          <div className="ml-10">
            <Information/>
        </div>
              </div>
        </div>
            <div className='w-[30%]'>
                <InformationLine data={productsData} />
            </div>
      </div>
    </div>
  )
}
export default DetailCart