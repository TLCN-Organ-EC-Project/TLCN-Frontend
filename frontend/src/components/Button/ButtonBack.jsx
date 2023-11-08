import React from 'react';
import * as M from '../../motion/ButtonBackMotion';
import styled from "styled-components";


export const ButtonBack = ({handleClick,children}) => {
  return (
    <M.MotionContainer
      onClick={ handleClick }
      color='#222222'>
      <StyledLabel>
        {children}
      </StyledLabel>
    </M.MotionContainer>
  )
}
export const StyledLabel = styled.div`
  color: black;
  &:hover{
    color: white;
  }
`