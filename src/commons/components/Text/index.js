import React from 'react';
import { CustomText } from './styled';

const Text = ({ textColor, textSize, bold, children }) => {
  const props = {
    textColor,
    textSize,
    bold,
  };

  return <CustomText {...props}>{children}</CustomText>;
};

export default Text;
