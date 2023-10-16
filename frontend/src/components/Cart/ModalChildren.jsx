import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ShowModal } from '../../store/app/appSlice'

const ModalChildren = ({children}) => {
    const dispatch=useDispatch()
    useEffect(()=>{
        const handleClickOutOption=(e)=>{
          const cart=document.getElementById('modal')
        }
        document.body.style.overflow = 'hidden';
        return ()=>{
          document.body.style.overflow = 'auto';
        }
    },[])
  return (
    <div 
    onClick={()=>dispatch(ShowModal({isShowModal:false, modalChildren:null}))} 
    className='absolute inset-0 z-50 bg-overplay flex justify-end'
    id='modal'
    >
      {children}
    </div>
  )
}

export default ModalChildren