import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TStoreType, Tcustomer } from '../store/redux-reducer';
import getCC from '../store/use-redux-actions';

const getCustomers = (data: TStoreType) => data.customers;

export default function Customers() {
  const allCustomers = useSelector(getCustomers);

  const actions = getCC();

  const handleCustomers = () => {
    actions.getC();
  };

  return (
    <div>
      Show all Customers
      {allCustomers.map(item => (
        <li key={item.firstName}>{item.firstName}</li>
      ))}
      <button onClick={handleCustomers}>Press Me</button>
    </div>
  );
}
