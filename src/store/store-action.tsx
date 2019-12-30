import { useContext } from 'react';
import { OrderContext } from './store-context';

export default function useStoreAction() {
  const contextObj = useContext(OrderContext);
  return contextObj.disp;
}
