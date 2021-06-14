const INITIAL_STATE = {
  user: null,
};

export function user(state = INITIAL_STATE, action) {
  switch (action) {
    case 'SET_USER':
      return { user: action.user };
    case 'CLEAR_USER':
      return { user: null };
    default:
      return state;
  }
}
