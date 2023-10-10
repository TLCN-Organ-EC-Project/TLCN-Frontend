import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Personal = () => {
  const { register, formState: { errors, isDirty }, handleSubmit, reset } = useForm()
  const {current}=useSelector(state=>state.user)
  const dispatch = useDispatch()

  console.log(current)
  useEffect(()=>{
    reset({
      username:current?.firstname,
      email:current?.email,
      phone:current?.phone,
      address:current?.address
    })
},[])
  const handleUpdateInfor=async(data)=>{
    
  }
  return (
    <div>
      <div className='border border-b-gray-800 border-t-gray-100 border-l-gray-100 border-r-gray-100'>Account information</div>
      <form onSubmit={handleSubmit(handleUpdateInfor)}>

      </form>
    </div>
  )
}

export default Personal