import React from 'react';
import { Image } from 'react-native';
import { useTheme } from 'styled-components/native';
import LogoImage from '../../commons/assets/images/logo_ioasys.png';
import Container from '../../commons/components/Container';
import { Button, ButtonText } from './styled';

const Welcome = ({ navigation: { navigate } }) => {
  const handleNavigateToLogin = () => {
    navigate('Login');
  };

  const {
    colors,
    typography: { sizes },
  } = useTheme();

  return (
    <Container>
      <Image source={LogoImage} />
      <Button buttonColor={colors.primary} onPress={handleNavigateToLogin}>
        <ButtonText textColor={colors.white} textSize={sizes.large}>
          Login
        </ButtonText>
      </Button>
    </Container>
  );
};

export default Welcome;
