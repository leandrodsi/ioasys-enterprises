import { API } from './api';

export const getAllEnterprises = async () => {
  const api = await API({ auth: true });

  const { data } = await api.get('/enterprises');
  return data;
};
