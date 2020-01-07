import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TStoreType, Tcustomer } from '../store/redux-store';

const getCustomers = (data: TStoreType) => data.customers;
const customers: Tcustomer[] = [
  { firstName: 'bbFirst' },
  { firstName: 'bbSecond' }
];

export default function Customers() {
  const allCustomers = useSelector(getCustomers);
  const dispatch = useDispatch();

  const handleCustomers = () => {
    dispatch({ type: 'GET_CUSTOMERS',payload:customers });
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
