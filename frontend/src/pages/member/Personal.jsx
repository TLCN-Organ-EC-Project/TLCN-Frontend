import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import InputForm from '../../components/Input/InputForm'
import { Button } from '../../components'
import { apiUpdateUser } from '../../apis/user'
import { login } from "../../store/user/userSlice";
import { getProvinceById } from '../../apis/products'
const Personal = () => {
  const { register, formState: { errors, isDirty }, handleSubmit, reset } = useForm()
  const { current } = useSelector(state => state.user)
  console.log(current)
  const [userData, setUserData] = useState(null)
  const [provinces, setProvinces] = useState('')
  const dispatch = useDispatch()
  const handleUpdateInfor = async (data) => {
    const response = await apiUpdateUser(current?.username, data)
    if (response?.data) {
      setUserData(response?.data)
      dispatch(login({
        isLoggedIn: true,
        current: response?.data,
      }))
      toast.success('Success')
    }
  }
  const getProvince=useCallback(async(pid)=>{
    const response=await getProvinceById(pid)
    if (response){
      setProvinces(response?.data?.name)
    }
  },[provinces,current])

  useEffect(() => {
    getProvince(current?.province?.toString())
    reset({
      full_name: current?.full_name,
      email: current?.email,
      phone: current?.phone,
      address: current?.address,
      province: provinces,
    })
  }, [userData,provinces,current])
  return (
    <div>
      <div className='border border-b-gray-800 border-t-gray-100 border-l-gray-100 border-r-gray-100'>Account information</div>
      <form onSubmit={handleSubmit(handleUpdateInfor)}>
        <InputForm
          label='Full_name'
          register={register}
          errors={errors}
          id='full_name'
          validate={{ required: 'Need fill this field' }}
        />
        <InputForm
          label='Email'
          register={register}
          errors={errors}
          id='email'
          validate={{
            required: 'Need fill this field',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Email invalid'
            }
          }}
        />
        <InputForm
          label='Phone'
          register={register}
          errors={errors}
          id='phone'
          validate={{ required: 'Need fill this field' }}
        />
        <InputForm
          label='Address'
          register={register}
          errors={errors}
          id='address'
          validate={{ required: 'Need fill this field' }}
        />
        <InputForm
          label='Province'
          register={register}
          errors={errors}
          id='province'
          validate={{ required: 'Need fill this field' }}
        />
        {
          isDirty && <Button buttonAdd type='submit'>Update</Button>
        }
      </form>
    </div>
  )
}
export default Personal