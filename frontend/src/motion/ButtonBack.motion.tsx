import React, { useCallback, useEffect, useRef } from 'react';
import { 
  Transition,
  Variants, 
  AnimatePresence,
  useAnimate
} from 'framer-motion';
import styled from "styled-components";
import { motion } from "framer-motion";

export const MotionContainer: React.FC<{
  children,
  color,
  onClick
}> = React.memo((props) => {
  const { children, color, onClick } = props;

  const transition = useRef<Transition>({
    duration: 0.3,
  });

  const variants = useRef<Variants>({
    hide: { opacity: 1, x: '-150%' },
    enter: { opacity: 1, x: 0 },
  });

  return (
    <StyledContainer
      onClick={onClick}
      color={color}
      variants={variants.current}
      transition={transition.current}
      initial='hide'
      animate='enter'
      exit='hide'
    >
      {children}
    </StyledContainer>
  );
});

export const StyledContainer = styled(motion.div)`
  border: solid 1px #eee5;
  color: #eee5;
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
    color: white;
  }
`;
