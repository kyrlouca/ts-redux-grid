import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import {TStoreType} from '../store/redux-store'

export default function Box() {
  
  const obj = useSelector<TStoreType,TStoreType>(state => state);
  const dispatch= useDispatch();
    
  
  
  const inc = () => {
    dispatch({type:'INC'})    
    // dispatch({ type: 'INC', payload: { id: '3', step: 1 } });
  };

  return (
    <div>
      
      <p>job: </p>
      job2={obj.job}

      <button onClick={inc} >Inc</button>
    </div>
  );
}
