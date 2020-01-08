import { useDispatch } from 'react-redux';
import axios from 'axios';
// import { TStoreType, Tcustomer } from '../store/redux-reducer';
//TODO types for axios fetch

export default function useReduxActions() {
  const dispatch = useDispatch();
  const inc = ()=>{
    dispatch({ type: 'INC'});
  }
  const getCust = async () => {
    try {
      const resp = await axios.get(
        `https://f8h018dhb4.execute-api.eu-west-2.amazonaws.com/Prod/orders`,
        {
          params: {
            custId: 'CUST#101#'
          }
        }
      );
      const orders = resp.data.Items.filter(
        (item: any) => item.TABLE_NAME === 'ORDER'
      ).map((item: any) => {
        return { firstName: item.orderValue };
      });
      console.log(orders);
      dispatch({ type: 'GET_CUSTOMERS', payload: orders });
    } catch (error) {
      console.log(error);
    }
  };
  
  return {
    getCustomers: getCust,
    incCounter:inc,
  };
}
