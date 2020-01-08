import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { TStoreType } from '../store/redux-reducer';

export const useStoreSelector: TypedUseSelectorHook<TStoreType> = useSelector;

const getCustomers = (data: TStoreType) => data;
export const useAllCustomers=()=>{
    return useSelector(getCustomers);
}

