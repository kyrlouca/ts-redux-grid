import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import {TStoreType} from '../store/redux-store'

export default function Box() {
  const selector=((state:TStoreType)=>state);

  const obj = useSelector(selector);
  
  const dispatch= useDispatch();
      
  const inc = () => {
    dispatch({type:'INC',load:{step:1}})    
  };

  return (
    <div>      
      <p>job: </p>
      counter={obj.counter}
      <button onClick={inc} >Inc</button>
    </div>
  );
}
