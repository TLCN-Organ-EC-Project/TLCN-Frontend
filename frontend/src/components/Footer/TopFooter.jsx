import React from 'react'
import anh1 from '../../assets/f1.webp'
import anh2 from '../../assets/f2.webp'
import anh3 from '../../assets/f3.webp'
import anh4 from '../../assets/f4.webp'
import anh5 from '../../assets/f5.webp'
import anh6 from '../../assets/f6.webp'

const TopFooter = () => {
  return (
    <div className='w-main pb-4'>
      <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6'>
        <img src={anh1} className='w-full lg:h-[230px] sm:h-full object-cover' />
        <img src={anh2} className='w-full h-[230px] sm:h-full object-cover' />
        <img src={anh3} className='w-full h-[230px] sm:h-full object-cover' />
        <img src={anh4} className='w-full h-[230px] sm:h-full object-cover' />
        <img src={anh5} className='w-full h-[230px] sm:h-full object-cover' />
        <img src={anh6} className='w-full h-[230px] sm:h-full object-cover' />
      </div>
    </div>
  )
}

export default TopFooter