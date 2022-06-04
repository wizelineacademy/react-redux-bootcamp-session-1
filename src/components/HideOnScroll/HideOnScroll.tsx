import React, { FunctionComponent, ReactElement } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

interface HideOnScrollTypes {
  children: ReactElement;
}

const HideOnScroll: FunctionComponent<HideOnScrollTypes> = ({ children }) => {
  const trigger = useScrollTrigger();
  return ( 
    <Slide in={!trigger}>
      {children}
    </Slide>
  );
}

export default HideOnScroll;
