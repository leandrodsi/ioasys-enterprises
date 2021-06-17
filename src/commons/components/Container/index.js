import React from 'react';
import { Wrapper } from './styled';

const Container = ({ children, padding }) => {
  return <Wrapper paddingWrapper={padding}>{children}</Wrapper>;
};

export default Container;
