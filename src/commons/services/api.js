import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ACCESS_HEADERS } from '../constants/asyncStorage';
import { BASE_URL } from '../constants/host';
import store from '../store';
import { clearApiHeaders } from '../store/actions/headers';

export const getAuthHeaders = async headerParams => {
  const headers = headerParams;

  const accessHeadersAsString = await AsyncStorage.getItem(ACCESS_HEADERS);

  if (!accessHeadersAsString) {
    return;
  }

  const accessHeaders = JSON.parse(accessHeadersAsString);

  headers['access-token'] = accessHeaders['access-token'];
  headers.client = accessHeaders.client;
  headers.uid = accessHeaders.uid;
};

export const API = async ({ auth = false }) => {
  const headers = {};

  if (auth) {
    await getAuthHeaders(headers);
  }

  const instance = axios.create({
    baseURL: BASE_URL,
    headers,
  });

  instance.interceptors.response.use(
    response => response,
    async error => {
      await AsyncStorage.removeItem(ACCESS_HEADERS);
      store.dispatch(clearApiHeaders());
      return Promise.reject(error);
    },
  );

  return instance;
};
