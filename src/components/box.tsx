import React from 'react';
import {useAllCustomers} from '../store/use-redux-selector'
import useReduxActions from '../store/use-redux-actions'
export default function Box() {
  const obj = useAllCustomers();
  const actions=useReduxActions();
        
  const inc = () => {
    actions.incCounter();
  };

  return (
    <div>      
      <p>job: </p>
      counter={obj.counter}
      <button onClick={inc} >Inc</button>
    </div>
  );
}
