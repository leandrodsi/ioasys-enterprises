import styled from 'styled-components';

export const ErrorWrapper = styled.View`
  padding: 10px;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.typography.sizes.medium}px;
`;
