import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux-reducer';
import React from 'react';


const store = createStore(rootReducer);

export default function Store({ children }: { children: JSX.Element }) {
  return <Provider store={store}>{children}</Provider>;
}
