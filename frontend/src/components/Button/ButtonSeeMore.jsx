import React from 'react'
import { css } from '@emotion/css'

const ButtonSeeMore = ({ children ,handleOnClick}) => {
    return (
        <div 
         className={button} 
         onClick={()=>{handleOnClick && handleOnClick()}}
         >
            {children}
        </div>
    )
}

export default ButtonSeeMore

const button = css`
  font-family:Arial, Helvetica, sans-serif;
  font-size: 20px;
  color:white;
  width:200px;
  height:50px;
  background:#A9A9A9;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ::before{
  content: "";
  position: absolute;
  left:0;
  top:0;
  width: 0;
  height: 0;
  border-top: 3px solid #EDF2F7;
  border-right: 3px solid #EDF2F7;
  animation: border-top-right 3s infinite alternate;
  }
  @keyframes border-top-right {
  0%    {width:0px;   height:0px;}
  25%   {width:200px; height:0px;}
  50%   {width:200px; height:48px;}
  100%  {width:200px; height:48px;}
  }
  ::after{
    content: "";
  position: absolute;
  right:0;
  bottom:0;
  width: 0;
  height: 0;
  border-bottom:3px solid #EDF2F7;
  border-left: 3px solid #EDF2F7;
  animation: border-bottom-left 3s infinite alternate;
  }
@keyframes border-bottom-left {
  0%    {width:0px;   height:0px; opacity: 0;}
  50%   {width:0px;   height:0px; opacity: 0;}
  50.1% {width:0px;   height:0px; opacity: 1;}
  75%   {width:200px; height:0px; opacity: 1;}
  100%  {width:200px; height:48px;opacity: 1;}
}
`

