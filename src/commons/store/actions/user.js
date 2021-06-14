export function setUser(user) {
  return {
    type: 'SET_USER',
    user,
  };
}

export function clearUser(user) {
  return {
    type: 'CLEAR_USER',
    user,
  };
}
