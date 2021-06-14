import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { ACCESS_HEADERS, USER } from '../commons/constants/asyncStorage';
import store from '../commons/store';
import { setApiHeaders } from '../commons/store/actions/headers';
import { setUser } from '../commons/store/actions/user';
import MainTheme from '../commons/styles/theme';
import Splash from '../screens/Splash';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';

const getLocaleData = async () => {
  const accessHeadersAsString = await AsyncStorage.getItem(ACCESS_HEADERS);

  if (!accessHeadersAsString) {
    return;
  }

  const accessHeaders = JSON.parse(accessHeadersAsString);
  store.dispatch(setApiHeaders(accessHeaders));

  const userAsString = await AsyncStorage.getItem(USER);
  const user = JSON.parse(userAsString);
  store.dispatch(setUser(user));
};

const Routes = ({ headers }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    getLocaleData();
  }, []);

  const getCurrentRouter = useCallback(() => {
    if (showSplash) {
      return <Splash showSplash={setShowSplash} />;
    }

    // validar dados do usuário
    const isAuthenticated = headers.apiHeaders;

    return isAuthenticated ? (
      <AuthenticatedRoutes />
    ) : (
      <UnauthenticatedRoutes />
    );
  }, [showSplash, headers]);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={MainTheme}>
        <NavigationContainer>{getCurrentRouter()}</NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default connect(state => ({ headers: state.headers }))(Routes);
