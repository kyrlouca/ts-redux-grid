import { useDispatch } from 'react-redux';
import { TStoreType, Tcustomer } from '../store/redux-reducer';

const customers: Tcustomer[] = [
  { firstName: 'ccFirst' },
  { firstName: 'ccSecond' }
];

export default function useReduxActions() {
  const dispatch = useDispatch();
  const getCust = () => {
    dispatch({ type: 'GET_CUSTOMERS', payload: customers });
  };
  return {
    getC: getCust
  };
}
