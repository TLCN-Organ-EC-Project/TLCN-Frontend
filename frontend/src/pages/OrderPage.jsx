import { useForm } from 'react-hook-form';
import InputForGot from '../components/Input/InputForGot'
import icons from '../ultils/icons'
import { useState } from 'react';
import cod from '../assets/cod.svg'
import Button from '../components/Button/Button';
import withBase from '../hocs/withBase'
import { useSelector } from 'react-redux';
import { useGetListProvider, useProductsByCart } from '../hooks/useProductsByCategory';
import { formatNumber } from '../ultils/helper';
import path from '../ultils/path'
import { createOrder, deleteAllCart } from '../apis/user'
import { toast } from 'react-toastify';
import { useQueryClient } from 'react-query';
import SelectProvide from '../components/SelectOption/SelectProvide';

const { MdKeyboardArrowRight, BsPerson, AiFillCheckCircle, TiTickOutline } = icons
const OrderPage = ({ dispatch, navigate }) => {
  const queryClient = useQueryClient();
  const { current } = useSelector(state => state.user);
  const [dataOrder, setDataOrder] = useState(null)
  const { data: listProvider, isLoading: isFetchingData } = useGetListProvider()
  const { data: productsDataCart, isLoading: isFetchingProductsCart } = useProductsByCart(current?.username);
  const { data: productsData, isLoading: isFetchingProducts } = useProductsByCart(current?.username);
  const [isLoading, setIsLoading] = useState(false)
  const product_id = productsData?.carts?.map((item) => item?.product?.id)
  const size = productsData?.carts?.map((item) => item?.cart?.size)
  const quantity = productsData?.carts?.map((item) => item?.cart?.quantity)
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: '',
      phone: '',
      address: '',
      province: '',

    },
  });
  const address = watch('address')
  const province = watch('province')
 
  const data = {
    address: address,
    payment_method: 'SHIP COD',
    product_id: product_id,
    promotion_id: 'none',
    province: province,
    quantity: quantity,
    size: size,
  }
  const handleOrder = async () => {
    const response = await createOrder(current?.username, data)
    console.log(data)
    if (!response?.data) {
      toast.error('Cant not order')
    } else {
      toast.success('Success')
      setDataOrder(response?.data)
    }
  }
  const handleGoHome = async () => {
    const respone = await deleteAllCart(current?.username)
    if (respone) {
      navigate(`${path.PUBLIC}`)
      queryClient.invalidateQueries(['products-dataCart', current?.username])
    }
  }
  return (
    <div className="w-full flex flex justify-center min-h-screen ">
      {
        !dataOrder ? <div className="w-[50%] border border-r-gray-300 flex flex-col justify-start pt-10 items-start gap-3 pl-20 pr-2">
          <div className='flex justify-center font-semibold text-2xl'>KENTA.VN</div>
          <div className='text-sm flex items-center gap-3 cursor-pointer'>
            <span
              className='hover:text-blue-500'
              onClick={() =>
                navigate(`/${path.DETAIL_CART}`)
              }
            >My cart</span>
            <span><MdKeyboardArrowRight size={12} /></span>
            <span>Shipment Details</span>
          </div>
          <div className='text-base'>
            Shipment Details
          </div>
          <div className='flex justify-start gap-2 items-center'>
            <div className='w-12 h-12 bg-gray-300 border flex justify-center items-center text-center shadow-sm rounded-lg'><BsPerson size={20} color='white' /></div>
            <div className='flex flex-col gap-1 text-sm'> 
              <div>{current?.fullname}</div>
              <div>{current?.email}</div>
            </div>
          </div>
          <div className='w-full flex gap-2 flex-col'>
            <InputForGot
              id='phone'
              label='Phone'
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <InputForGot
              id='address'
              label='Address'
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <SelectProvide
              fullWidth
              id='province'
              register={register}
              options={listProvider?.map((el) => (el))}
            />
          </div>
          <div className='flex flex-col gap-3 w-full'>
            <div>Payment methods</div>
            <div className='border rounded-md flex gap-3 items-center pl-5 h-[70px]  border-gray-300'>
              <div><AiFillCheckCircle color='#1E90FF' size={18} /></div>
              <img src={cod} />
              <div>Cash on delivery (COD)</div>
            </div>
          </div>
          <div className='w-full'>
            <Button children='Order' buttonAdd btnOrder handleOnClick={handleOrder} />
          </div>
        </div>
          :
          <div className="w-[50%] border border-r-gray-300 flex flex-col justify-start pt-10 items-start gap-3 pl-20 pr-2">
            <div className='flex justify-center font-semibold text-2xl'>KENTA.VN</div>
            <div className='flex text-center gap-2'>
              <div className='text-sm'>Order Success</div>
              <span><TiTickOutline color='blue' /></span>
            </div>
            <div className='flex text-center gap-2 text-sm'>
              <div>Code orders</div>
              <span>{dataOrder?.order?.booking_id}</span>
            </div>
            <div className='text-sm'>Thank you for your purchase</div>
            <div className='border w-[500px] h-[250px] bg-white shadow-lg rounded-lg'>
              <div className='p-3 text-sm font-semibold flex justify-center border border-b-gray-400'>Information line</div>
              <div className='flex justify-between'>
                <div className='p-3 text-sm font-semibold'>Shipment Details</div>
              </div>
              <div className='p-3 text-sm font-semibold'>Name :{dataOrder?.order?.user_booking}</div>
              <div className='p-3 text-sm'>Address : {dataOrder?.order?.address}</div>
              <div className='p-3 text-sm'>Payment methods : </div>
              <div className='pt-1 px-3 pb-2 text-sm'>Cash on delivery (COD)</div>
            </div>
            <Button children='Go home' btnGoHome handleOnClick={handleGoHome} />
          </div>
      }
      <div className="w-[50%] bg-gray-200 p-10">
        {
          productsData?.carts?.map((el) => (
            <div className='relative flex border border-b-gray-300 py-4'>
              <img src={el?.product?.thumb} className='w-16 h-16 rounded-lg p-1' />
              <div className='flex flex-col pl-2 justify-center'>
                <div className='text-sm'>{el?.product?.product_name}</div>
                <div className='text-sm opacity-80'>{el?.cart?.size}</div>
              </div>
              <div className='flex ml-auto justify-center text-center items-center pl-4 text-sm opacity-90'>
                {formatNumber(el?.cart?.price) + 'đ'}
              </div>
              <span className='absolute border bg-gray-300 transform translate-y-[-7px]  translate-x-[45px] text-center flex justify-center items-center w-6 h-6 rounded-xl  text-white text-sm'>{el?.cart?.quantity}</span>
            </div>
          ))
        }
        <div className='p-4 flex items-center justify-between font-bold'>
          <span>Total price : </span>
          <span>{formatNumber(productsData?.carts?.reduce((sum, el) => sum + Number(el?.cart?.price), 0)) + 'đ'}</span>
        </div>
      </div>
    </div>
  )
}
export default withBase(OrderPage)