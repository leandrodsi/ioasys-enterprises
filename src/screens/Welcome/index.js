import React from 'react';
import { Alert, Image } from 'react-native';
import { useTheme } from 'styled-components/native';
import LogoImage from '../../commons/assets/images/logo_ioasys.png';
import Container from '../../commons/components/Container';
import {
  Button,
  ButtonText,
  Footer,
  RegisterButton,
  RegisterButtonText,
  RegisterWrapper,
  TextRegister,
} from './styled';

const Welcome = ({ navigation: { navigate } }) => {
  const handleNavigateToLogin = () => {
    navigate('Login');
  };

  const {
    colors,
    typography: { sizes },
  } = useTheme();

  return (
    <Container padding={16}>
      <Image source={LogoImage} />
      <Footer>
        <Button buttonColor={colors.primary} onPress={handleNavigateToLogin}>
          <ButtonText textColor={colors.white} textSize={sizes.large}>
            Log in
          </ButtonText>
        </Button>

        <RegisterWrapper>
          <TextRegister textColor={colors.gray} textSize={sizes.medium}>
            New to IOASYS?
          </TextRegister>
          <RegisterButton onPress={() => Alert.alert('Redirect to Sign Up')}>
            <RegisterButtonText
              textColor={colors.primary}
              textSize={sizes.large}>
              Sign up
            </RegisterButtonText>
          </RegisterButton>
        </RegisterWrapper>
      </Footer>
    </Container>
  );
};

export default Welcome;
