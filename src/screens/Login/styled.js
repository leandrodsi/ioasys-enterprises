import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { css } from 'styled-components/native';

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: ${({ textSize }) => textSize}px;
  color: ${({ textColor }) => textColor};
  ${({ $bold }) =>
    $bold &&
    css`
      font-weight: bold;
    `}
`;

export const InputsWrapper = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  margin-top: 64px;
`;

export const InputField = styled.TextInput`
  width: 100%;
  height: 60px;
  margin-bottom: 16px;
  border-radius: 30px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.gray};
`;

export const ButtonLogin = styled(RectButton)`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonLoginText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.sizes.large}px;
  font-weight: bold;
`;
