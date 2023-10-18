import React, {useEffect, useRef} from 'react'
import lottie from 'lottie-web'
import loadingAnimation from './loading.json'

const Loading = () => {
    const container= useRef(null)

    useEffect(()=>{
        lottie.loadAnimation({
          container:container.current,
          renderer:'svg',
          loop:true,
          autoplay:true,
          controls:true,
          direction:-1,
          animationData:loadingAnimation,
        },[]) 
      }, [])
  return (
    <div className='w-full'>
      <div className='h-10' ref={container}></div>
    </div>
  )
}

export default Loading