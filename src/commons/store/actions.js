const setApiHeaders = apiHeaders => {
  return {
    type: 'SET_API_HEADERS',
    apiHeaders,
  };
};

const clearApiHeaders = apiHeaders => {
  return {
    type: 'CLEAR_API_HEADERS',
    apiHeaders,
  };
};

const setUser = user => {
  return {
    type: 'SET_USER',
    user,
  };
};

const clearUser = user => {
  return {
    type: 'CLEAR_USER',
    user,
  };
};
