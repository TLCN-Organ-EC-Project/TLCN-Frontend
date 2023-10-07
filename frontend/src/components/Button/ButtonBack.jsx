import React from 'react';
import * as M from '../../motion/ButtonBack.motion';
import { motion } from "framer-motion";
import styled from "styled-components";


export const ButtonBack = ({handleClick}) => {

  return (
    <M.MotionContainer
      onClick={ handleClick }
      color='#000000'>
      <StyledIconWrapper>
      </StyledIconWrapper>
      <div>
        back to home page
      </div>
    </M.MotionContainer>
  )
}

export const StyledContainer = styled(motion.div)`
  border: solid 1px #000000;
  color: black;
  background: linear-gradient(to left, rgb(255, 255, 255, 0) 50%,#eee5 50%) right;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  background-size: 200%;
  gap: 10px;

  &:hover {
    cursor: pointer;
    background-position: left;
    color: black;
  }
`;


export const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
