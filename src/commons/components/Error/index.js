import React from 'react';
import { ErrorText, ErrorWrapper } from './styled';

const Error = ({ error }) => {
  return (
    <ErrorWrapper>
      <ErrorText>{error}</ErrorText>
    </ErrorWrapper>
  );
};

export default Error;
