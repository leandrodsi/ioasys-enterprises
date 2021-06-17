import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';
import Text from '../../commons/components/Text';

export const Header = styled.View`
  width: 100%;
  height: 70px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.white};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary}33;
`;

export const AvatarImage = styled.Image``;

export const Logo = styled.Image`
  flex: 1;
  height: 50px;
`;

export const ExitButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary}33;
`;

export const LoadingWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f2f2fe;
`;

export const ButtonFind = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const SearchWrapper = styled.View`
  width: 90%;
  margin-top: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TabFilterContainer = styled.View`
  flex-direction: row;
  height: 50px;
  width: 100%;
`;

export const TabFilter = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.white};
  ${({ $left }) =>
    $left &&
    css`
      border-top-left-radius: 16px;
    `}
  ${({ $right }) =>
    $right &&
    css`
      border-top-right-radius: 16px;
    `}
`;

export const CustomText = styled(Text)``;

export const InputField = styled.TextInput`
  width: 100%;
  height: 60px;
  margin-bottom: 16px;
  border-radius: 30px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.gray};
`;

export const SearchFiltersContainer = styled.View`
  padding: 32px 16px;
`;

export const ButtonSearch = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
