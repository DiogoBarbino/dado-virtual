import React from 'react';
import {Provider} from 'react-redux';

import Main from './scr/Main';
import configureStore from './scr/redux/store';
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
}
