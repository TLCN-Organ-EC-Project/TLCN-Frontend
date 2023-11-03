import React from 'react'
import LoadingComment from '../Loading/LoadingComment'
import anh1 from '../../assets/cm.webp'
import { useDetailProductStore } from '../../hooks/useDetailProductStore'
import { useSnapshot } from 'valtio'
import { useFeedBackProductById } from '../../hooks/useProductsByCategory'
import moment from 'moment'
import { deleteFeedBack } from '../../apis/user'
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify'

const Comment = () => {
  const detailProductStore = useDetailProductStore()
  const queryClient = useQueryClient();
  const { data: productsData, isLoading: isFetchingProducts } = useFeedBackProductById(detailProductStore.productId);
  const removeFeedBack = async (id, username, productCommented) => {
    const response = await deleteFeedBack(id, username, productCommented)
    if (response) {
      queryClient.invalidateQueries(["products-dataFeedBack", detailProductStore.productId])
    } else {
      toast.error('Cant not delete Feedbacks')
    }
  }

  return (
    <div className='w-main'>
      <div className='flex justify-center text-center items-center'>
        <div className='text-sm font-semibold'>
          Do you want review this product ?
        </div>
        <div>
          <span
            onClick={() => { detailProductStore.isOpenModalCommet = true }}
            title='Click Here'
            className='hover:opacity-50 transition cursor-pointer'>
            <LoadingComment />
          </span>
        </div>
      </div>
      <div className='w-main'>
        {
          productsData?.feedbacks?.map((el) => (
            <div className='flex flex-col gap-3 pb-2' key={el}>
              <div className='bg-white shadow-md flex justify-around rounded-2xl  w-[600px] h-[100px] ml-auto mr-auto'>
                <div className='flex gap-3 justify-center'>
                  <div className='pt-3'>
                    <img src={anh1} className='w-10 h-10 rounded-xl object-contain' />
                  </div>
                  <div>
                    <div className='pt-3'>
                      <div className='text-blue-500  font-semibold'>{el?.feedback?.user_comment}</div>
                      <div className='font-bold text-gray-700 text-sm'>{el?.feedback?.commention}</div>
                    </div>
                    <div className='flex gap-4'>
                      <div
                        onClick={() => removeFeedBack(el?.feedback?.id, el?.feedback?.user_comment, el?.feedback?.product_commented)}
                        className='text-sm pt-3 opacity-60 cursor-pointer'
                      >
                        Remove
                      </div>
                    </div>
                  </div>

                </div>
                <div className='flex justify-end pt-3 text-xs opacity-70 '>
                  <div>{moment(el?.feedback?.created_at).fromNow()}</div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Comment