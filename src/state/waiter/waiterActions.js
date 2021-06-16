import { TRIGGER_WAITER_MESSAGE, REMOVE_WAITER_MESSAGE } from './waiterTypes';

export const triggerWaiterMessage = (message) => ({
  type: TRIGGER_WAITER_MESSAGE,
  payload: message
});

export const removeWaiterMessage = (id) => ({
  type: REMOVE_WAITER_MESSAGE,
  payload: id
});
