import { useForm } from 'react-hook-form';
import InputForGot from '../components/Input/InputForGot'
import icons from '../ultils/icons'
import { useState } from 'react';
import cod from '../assets/cod.svg'
import Button from '../components/Button/Button';
import anh1 from '../assets/anh1.jpg'

const { MdKeyboardArrowRight, BsPerson, AiFillCheckCircle } = icons
const OrderPage = () => {
  const [isLoading, setIsLoading] = useState(false)
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

  return (
    <div className="w-full flex h-full flex justify-center ">
      <div className="w-[50%] border border-r-gray-300 flex flex-col justify-start pt-10 items-start gap-3 pl-20 pr-2">
        <div className='flex justify-center font-semibold text-2xl'>KENTA.VN</div>
        <div className='text-sm flex items-center gap-3 cursor-pointer'>
          <span>My cart</span>
          <span><MdKeyboardArrowRight size={12} /></span>
          <span>Shipment Details</span>
        </div>
        <div className='text-base'>
          Shipment Details
        </div>
        <div className='flex justify-center gap-4 items-center text-center'>
          <div className='w-12 h-12 bg-gray-300 border flex justify-center items-center text-center shadow-sm rounded-lg'><BsPerson size={20} color='white' /></div>
          <div>tran tue</div>
        </div>
        <div className='w-full flex gap-5 flex-col'>
          <InputForGot
            id='username'
            label='Username'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
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
          <InputForGot
            id='province'
            label='Province'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
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
          <Button children='Order' buttonAdd btnOrder />
        </div>
      </div>
      <div className="w-[50%] bg-gray-200 p-10">
        <div className='relative flex border border-b-gray-300'>
          <img src={anh1} className='w-16 h-16 rounded-lg p-1' />
          <div className='flex flex-col pl-2 justify-center'>
            <div className='text-sm'>Áo Khoác Dù Phối Có Nón AKD0034</div>
            <div className='text-sm opacity-80'>M</div>
          </div>
          <div className='flex justify-center text-center items-center pl-4 text-sm opacity-90'>
            350,000d
          </div>
          <span className='absolute border bg-gray-400 transform translate-y-[-7px]  translate-x-[45px] text-center flex justify-center items-center w-6 h-6 rounded-xl  text-white'>1</span>
        </div>
      </div>
    </div>
  )
}
export default OrderPage