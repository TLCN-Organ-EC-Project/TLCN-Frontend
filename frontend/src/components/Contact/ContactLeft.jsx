import React from 'react'
import icons from '../../ultils/icons'

const {SiBlockchaindotcom,RiOpenbaseFill} =icons

const ContactLeft = () => {
  return (
    <div>
        <div className='w-[60%] text-sm text-gray-600 font-medium'>Sed vestibulum faucibus felis, sit amet facilisis tellus. Aliquam erat volutpat. Sed consectetur ipsum velit, quis rhoncus libero egestas eget.</div>
        <div className='flex gap-2 py-2'>
          <SiBlockchaindotcom size={14} color='gray'/>
          <div className='text-xs '>Address: 474 Ontario St Toronto, ON M4X 1M7 Canada</div>
        </div>
        <div className='flex gap-2 py-2'>
          <RiOpenbaseFill size={14} color='gray'/>
          <div className='text-xs '>Opening hours</div>
        </div>
        <span className='text-xs text-gray-800'>Mon-Fri : 11.00 - 20.00</span>
        <span className='text-xs text-gray-800'>Sat: 10.00 - 20.00</span>
        <span className='text-xs text-gray-800'>Sun: 19.00 - 20.00</span>
    </div>
  )
}

export default ContactLeft