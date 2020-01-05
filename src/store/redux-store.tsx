import { Provider } from 'react-redux';
import {createStore} from 'redux';
import React from 'react';

export type TStoreType ={
  job:string;
  counter:number;
};

const object1 : TStoreType = { job: 'painter', counter: 0 };


function rootReducer (state: TStoreType = object1, action: any):TStoreType {
  const newState = { ...state, job: 'red' };
  switch (action.type) {
    case 'INC':
      return newState;
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default function Store({ children }: { children: JSX.Element }) {
  return <Provider store={store}>{children}</Provider>;
}
