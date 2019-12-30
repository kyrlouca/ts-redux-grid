import React from 'react';

import useStoreObject from '../store/store-object';
import useStoreAction from '../store/store-action';

export default function Square() {
  const obj = useStoreObject();
  const dispatch = useStoreAction();

  const inc = () => {
    dispatch({ type: 'INC', payload: { id: '3', step: 1 } });
  };

  return (
    <div>
      <p>hell {obj?.price}</p>
      <button onClick={inc}>Inc</button>
    </div>
  );
}
