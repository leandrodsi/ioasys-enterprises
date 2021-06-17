import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Text from '../../commons/components/Text';

export const Footer = styled.View`
  width: 100%;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;
  background-color: ${({ buttonColor }) => buttonColor};
  border-radius: 30px;
`;

export const ButtonText = styled(Text)``;

export const RegisterWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`;

export const TextRegister = styled(Text)``;

export const RegisterButton = styled.TouchableOpacity`
  margin-left: 8px;
`;

export const RegisterButtonText = styled(Text)``;
