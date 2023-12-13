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

            <div class="flex justify-center relative top-1/3 " key={el}>
              <div class="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg w-[600px]">
                <div class="relative flex gap-4">
                  <img src={anh1} class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy"/>
                    <div class="flex flex-col w-full">
                      <div class="flex flex-row justify-between">
                        <p class="relative  whitespace-nowrap truncate overflow-hidden font-semibold text-sm">{el?.feedback?.user_comment}</p>
                        <a class="text-gray-500 text-xl" href="#"><i class="fa-solid fa-trash"></i></a>
                      </div>
                      <p class="text-gray-400 text-sm">{moment(el?.feedback?.created_at).fromNow()}</p>
                    </div>
                    
                </div>
                
                <p class="-mt-4 text-gray-500">{el?.feedback?.commention}.</p>
                <div className='flex gap-4'>
                      <div
                        onClick={() => removeFeedBack(el?.feedback?.id, el?.feedback?.user_comment, el?.feedback?.product_commented)}
                        className='text-sm  opacity-70 cursor-pointer hover:text-black'
                      >
                        Remove
                      </div>
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