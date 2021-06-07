import { UPDATE_ORDER_POINT, RESET_ORDER_POINT } from './orderPointTypes';

export const updateOrderPoint = (orderPoint) => ({
  type: UPDATE_ORDER_POINT,
  payload: orderPoint
});

export const resetOrderPoint = () => ({
  type: RESET_ORDER_POINT
});
