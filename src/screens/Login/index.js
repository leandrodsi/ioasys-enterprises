import React, { useCallback, useRef, useState } from 'react';
import { useTheme } from 'styled-components/native';
import LogoImage from '../../commons/assets/images/logo_ioasys.png';
import Container from '../../commons/components/Container';
import Error from '../../commons/components/Error';
import Spinner from '../../commons/components/Spinner';
import validateEmail from '../../commons/helpers/validateEmail';
import { useSignIn } from './hooks';
import {
  ButtonLogin,
  ButtonLoginText,
  InputField,
  InputsWrapper,
  Logo,
  Title,
} from './styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useSignIn();
  const passwordInputRef = useRef();

  const {
    colors,
    typography: { sizes },
  } = useTheme();

  const buttonLogin = () =>
    loading ? (
      <Spinner size={25} color={colors.white} />
    ) : (
      <ButtonLoginText>Entrar</ButtonLoginText>
    );

  const handleLogin = useCallback(async () => {
    await login({ email, password });
  }, [login, email, password]);

  return (
    <Container>
      <Logo source={LogoImage} />
      <Title textColor={colors.gray} textSize={sizes.title}>
        Olá
      </Title>
      <Title textColor={colors.secondary} textSize={sizes.title} $bold>
        Bem Vindo!
      </Title>
      <InputsWrapper>
        <InputField
          placeholder="E-mail"
          // icon={}
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={colors.gray}
          rules={[
            () => !!email || 'E-mail obrigatório',
            () => validateEmail(email) || 'E-mail inválido',
          ]}
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordInputRef.current?.focus();
          }}
          blurOnSubmit={false}
          autoCapitalize="none"
        />
        <InputField
          placeholder="Senha"
          // icon={}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={colors.gray}
          rules={[
            () =>
              password.length || 'A senha deve conter no mínimo 6 caracteres',
          ]}
          textContentType="password"
          returnKeyType="send"
          onSubmitEditing={handleLogin}
          inputRef={passwordInputRef}
          blurOnSubmit={false}
          autoCorrect={false}
          autoCapitalize="none"
        />
        {error && <Error error={error} />}
      </InputsWrapper>
      <ButtonLogin onPress={handleLogin}>{buttonLogin()}</ButtonLogin>
    </Container>
  );
};

export default Login;
