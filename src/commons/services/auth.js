import AsyncStorage from '@react-native-async-storage/async-storage';
import { ACCESS_HEADERS, USER } from '../constants/asyncStorage';
import store from '../store';
import { setApiHeaders } from '../store/actions/headers';
import { setUser } from '../store/actions/user';
import { API } from './api';

export const signIn = async credentials => {
  const api = await API({ auth: false });
  const result = await api.post('/users/auth/sign_in', credentials);

  if (result.status === 200) {
    const accessHeaders = {
      'access-token': result?.request?.responseHeaders['access-token'],
      client: result?.request?.responseHeaders?.client,
      uid: result?.request?.responseHeaders?.uid,
    };
    const accessTokenAsString = JSON.stringify(accessHeaders);

    await AsyncStorage.setItem(ACCESS_HEADERS, accessTokenAsString);
    store.dispatch(setApiHeaders(accessHeaders));

    const { data } = result;

    store.dispatch(setUser(data));
    const userAsString = JSON.stringify(data);
    await AsyncStorage.setItem(USER, userAsString);
  }

  return result;
};
