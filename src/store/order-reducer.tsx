
export type TOrderShape = {
  id: string;
  name?: string;
  price: number;
};

export type TReducerAction = { type: string; payload: TPayload };

export type TPayload = {
  id: string;
  step: number;
};

export default function orderReducer(
  state: TOrderShape,
  action: TReducerAction
) {
  const {type, payload} = action;
  switch (type) {
    case 'MOD':
      return { ...state, ...payload };
    case 'INC':{
      const newVal=state.price+payload.step*3;
      return { ...state, price:newVal };
    }
      
    default:
      return state;
  }
}
