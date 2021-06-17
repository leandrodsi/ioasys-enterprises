import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Text from '../Text';

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

export const CardText = styled(Text)``;

export const CardTextTitle = styled(Text)`
  margin-top: 8px;
`;

export const CardTextValue = styled(Text)``;

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
