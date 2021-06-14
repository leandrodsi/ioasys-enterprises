import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components';

const { width: ScreenWidth } = Dimensions.get('screen');

export const Wrapper = styled.View`
  width: ${ScreenWidth * 0.9}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 10px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

export const CardImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-right: 16px;
`;

export const CardInfo = styled.View`
  flex: 1;
`;

export const CardText = styled.Text`
  font-size: ${({ textSize }) => textSize}px;
  color: ${({ textColor }) => textColor};
  ${({ $bold }) =>
    $bold &&
    css`
      font-weight: bold;
    `}
`;

export const CardTextTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.medium}px;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: bold;
  margin-top: 8px;
`;

export const CardTextValue = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.medium}px;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: normal;
`;

export const SocialIconsContainer = styled.View`
  flex-direction: row;
  margin: 8px 0;
`;

export const SocialButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  align-items: center;
  margin-right: 16px;
`;
