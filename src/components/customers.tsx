import React from 'react';
import allActions from '../store/use-redux-actions';
import {useStoreSelector} from '../store/use-redux-selector';

// const getCustomers = (data: TStoreType) => data.customers;

export default function Customers() {
  // const allCustomers = useSelector(getCustomers);
  const allCustomers = useStoreSelector(state=>state.customers);
  const actions = allActions();

  const handleCustomers = () => {
    actions.getCustomers();
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
