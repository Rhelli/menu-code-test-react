import { UPDATE_ORDER_POINT, RESET_ORDER_POINT } from './orderPointTypes';

const initialState = {
  orderPoint: ''
};

const orderPointReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_ORDER_POINT: return {
      ...state,
      orderPoint: action.payload
    };

    case RESET_ORDER_POINT: return {
      orderPoint: ''
    };

    default: return state;
  }
};

export default orderPointReducer;
