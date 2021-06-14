import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;
  background-color: ${({ buttonColor }) => buttonColor};
  border-radius: 30px;
`;

export const ButtonText = styled.Text`
  color: ${({ textColor }) => textColor};
  font-size: ${({ textSize }) => textSize}px;
`;
