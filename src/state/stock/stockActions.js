import { INCREASE_STOCK, DECREASE_STOCK, RESET_STOCK } from './stockTypes';

export const increaseStock = (food, course) => ({
  type: INCREASE_STOCK,
  food,
  course
});

export const decreaseStock = (food, course) => ({
  type: DECREASE_STOCK,
  food,
  course
});

export const resetStock = () => ({
  type: RESET_STOCK
});
