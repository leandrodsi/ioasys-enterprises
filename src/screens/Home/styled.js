import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  height: 70px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.white};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarButton = styled.TouchableOpacity`
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
