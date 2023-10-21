import React, {useEffect, useRef} from 'react'
import lottie from 'lottie-web'
import loadingAnimation from '../../assets/comment.json'


const LoadingComment = () => {
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
      <div className='h-20' ref={container}></div>
    </div>
  )
}

export default LoadingComment