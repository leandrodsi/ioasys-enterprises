import styled, { css } from 'styled-components/native';

export const CustomText = styled.Text`
  color: ${({ textColor, theme }) => textColor || theme.colors.gray};

  font-size: ${({ textSize, theme }) =>
    textSize || theme.typography.sizes.medium}px;

  ${({ bold }) =>
    bold
      ? css`
          font-weight: bold;
        `
      : css`
          font-weight: normal;
        `}
`;
