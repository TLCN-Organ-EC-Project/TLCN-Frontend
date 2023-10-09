import React from 'react'
import {InputField} from '../Input'
import Button from '../Button/Button'

const ContactRight = () => {
  return (
    <div className='w-[40%]'>
        <div className='flex gap-2'>
            <InputField placeholder='Name'/>
            <InputField placeholder='Email'/>
        </div>
        <InputField placeholder="Phone number"/>
        <InputField placeholder="Message"/>
        <div className='flex justify-end py-2'>
            <Button children="SEND" buttonAdd/>
        </div>
    </div>
  )
}

export default ContactRight