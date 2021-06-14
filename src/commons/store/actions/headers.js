export function setApiHeaders(apiHeaders) {
  return {
    type: 'SET_API_HEADERS',
    apiHeaders,
  };
}

export function clearApiHeaders(apiHeaders) {
  return {
    type: 'CLEAR_API_HEADERS',
    apiHeaders,
  };
}
