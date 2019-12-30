import { useContext } from 'react';
import { OrderContext } from '../store/store-context';

export default function useStoreObject() {
  const contextObj = useContext(OrderContext);
  return contextObj?.state;
}
