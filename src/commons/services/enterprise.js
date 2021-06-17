import { API } from './api';

export const getAllEnterprises = async () => {
  const api = await API({ auth: true });

  const { data } = await api.get('/enterprises');
  return data;
};

export const getEnterpriseById = async id => {
  const api = await API({ auth: true });

  const { data } = await api.get(`/enterprises/${id}`);
  return data;
};

export const getEnterpriseByTypeAndName = async params => {
  const api = await API({ auth: true });

  const { data } = await api.get('/enterprises', { params });
  return data;
};
