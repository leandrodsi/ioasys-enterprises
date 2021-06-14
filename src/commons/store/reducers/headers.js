const INITIAL_STATE = {
  apiHeaders: null,
};

export function headers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_API_HEADERS':
      return { apiHeaders: action.apiHeaders };
    case 'CLEAR_API_HEADERS':
      return { apiHeaders: null };
    default:
      return state;
  }
}
