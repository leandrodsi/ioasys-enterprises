import React from 'react';
import { Provider } from 'react-redux';
import store from './src/commons/store';
import Routes from './src/routing';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
