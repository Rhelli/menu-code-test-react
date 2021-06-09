import {
  TRIGGER_WAITER_MESSAGE, TRIGGER_WAITER_COURSES_ERROR, TRIGGER_WAITER_STOCK_ERROR,
  TRIGGER_WAITER_SNOBBY_ERROR, REMOVE_WAITER_MESSAGE
} from './waiterTypes';

export const triggerWaiterMessage = (message) => ({
  type: TRIGGER_WAITER_MESSAGE,
  payload: message
});

export const triggerWaiterCoursesError = (errorMessage) => ({
  type: TRIGGER_WAITER_COURSES_ERROR,
  payload: errorMessage
});

export const triggerWaiterStockError = (stockErrorMessage) => ({
  type: TRIGGER_WAITER_STOCK_ERROR,
  payload: stockErrorMessage
});

export const triggerWaiterSnobbyError = (snobbyError) => ({
  type: TRIGGER_WAITER_SNOBBY_ERROR,
  payload: snobbyError
});

export const removeWaiterMessage = (id) => ({
  type: REMOVE_WAITER_MESSAGE,
  payload: id
});
