import { useState } from 'react';
import { signIn } from '../../commons/services/auth';

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [error, setError] = useState();

  return {
    error,
    loading,
    result,
    async login({ email, password }) {
      let loginResponse;
      try {
        setLoading(true);
        const { data } = await signIn({ email, password });
        loginResponse = data;
        setResult(data);
        setError();
      } catch (err) {
        console.log('HOOK ERROR: ', err);
        if (err?.response?.status === 401) {
          setError('E-mail ou senha inválidos');
        } else {
          setError('Falha ao realizar o login');
        }
      } finally {
        setLoading(false);
      }
      return loginResponse;
    },
  };
};
