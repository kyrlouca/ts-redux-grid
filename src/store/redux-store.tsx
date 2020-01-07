import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';

export type Tcustomer = {
  firstName: string;
};

export type TStoreType = {
  job: string;
  counter: number;
  customers: Tcustomer[];
};

const customers: Tcustomer[] = [
  { firstName: 'first' },
  { firstName: 'second' }
];
const intitialState: TStoreType = {
  job: 'painter',
  counter: 0,
  customers: customers,
};

function rootReducer(
  state: TStoreType = intitialState,
  action: any
): TStoreType {
  switch (action.type) {
    case 'INC':
      const newState: TStoreType = { ...state, counter: state.counter + 1 };
      return newState;
    case 'GET_CUSTOMERS':
      const XState: TStoreType = { ...state, customers:action.payload };
      return XState;
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default function Store({ children }: { children: JSX.Element }) {
  return <Provider store={store}>{children}</Provider>;
}
