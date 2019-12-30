import React, { Dispatch, useReducer } from 'react';
import orderReducer, { TReducerAction, TOrderShape } from './order-reducer';

type TContextShape = {
  state: TOrderShape;
  disp: Dispatch<TReducerAction>;
};

const initOrder: TOrderShape = {
  id: '',
  price: 0
};

const initContentShape: TContextShape = {
  state: initOrder,
  disp: initPayload => null
};

export const OrderContext = React.createContext<TContextShape>(
  initContentShape
);

export default function StoreContext({ children }: { children: JSX.Element }) {
  const [state, disp] = useReducer(orderReducer, initOrder);

  return (
    <OrderContext.Provider value={{ state, disp }}>
      {children}
    </OrderContext.Provider>
  );
}
