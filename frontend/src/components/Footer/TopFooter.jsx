import React from 'react'
import anh1 from '../../assets/f1.webp'
import anh2 from '../../assets/f2.webp'
import anh3 from '../../assets/f3.webp'
import anh4 from '../../assets/f4.webp'
import anh5 from '../../assets/f5.webp'
import anh6 from '../../assets/f6.webp'
import styled from "styled-components";

const TopFooter = () => {
  return (
    <div className='w-main pb-4'>
        <div className='flex gap-2'>
        <img src={anh1} className='w[228px] h-[230px]'/>
        <img src={anh2} className='w[228px] h-[230px]'/>
        <img src={anh3} className='w[228px] h-[230px]'/>
        <img src={anh4} className='w[228px] h-[230px]'/>
        <img src={anh5} className='w[228px] h-[230px]'/>
        <img src={anh6} className='w[228px] h-[230px]'/>
        </div>
    </div>
  )
}

export default TopFooter