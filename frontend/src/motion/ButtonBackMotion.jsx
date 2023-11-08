import React from 'react';
import styled from "styled-components";
import { motion } from 'framer-motion';

export const MotionContainer = ({onClick,color,children}) => {

  return (
    <StyledContainer
      onClick={onClick}
      color={color}
      variants={{
        hide: { opacity: 0.5, x: "-50%" },
        enter: { opacity: 1, x: 0 }
      }}
      transition={{
        duration: 0.2
      }}
      initial='hide'
      animate='enter'
      exit='hide'
    >
      {children}
    </StyledContainer>
  );
};

export const StyledContainer = styled(motion.div)`
  border: solid 1px #000000;
  color: #000000;
  background: linear-gradient(to left, rgb(255, 255, 255, 0) 50%,#000000 50%) right; 
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-size: 200%;
  gap: 10px;
  transition: all 0.8s cubic-bezier(0.5, 1, 0, 1);   
  
  &:hover {
    cursor: pointer;
    background-position: left;
    color: #eee;
  }
`;
