import {
  CREATE_NEW_BOOKING, CREATE_NEW_ORDER, CREATE_NEW_SHARED_ORDER, ADD_TO_ORDER,
  ADD_TO_SHARED_ORDER, REMOVE_FROM_ORDER, REMOVE_FROM_SHARED_ORDER, RESET_ORDER
} from './orderTypes';

export const createNewBooking = (partySize, date, time) => ({
  type: CREATE_NEW_BOOKING,
  partySize,
  date,
  time
});

export const createNewOrder = (name, color) => ({
  type: CREATE_NEW_ORDER,
  name,
  color
});

export const createNewSharedOrder = () => ({
  type: CREATE_NEW_SHARED_ORDER
});

export const addToOrder = (food, course, customer = null) => ({
  type: ADD_TO_ORDER,
  food,
  course,
  customer
});

export const addToSharedOrder = (food, course) => ({
  type: ADD_TO_SHARED_ORDER,
  food,
  course
});

export const removeFromOrder = (food, course, customer = null) => ({
  type: REMOVE_FROM_ORDER,
  food,
  course,
  customer
});

export const removeFromSharedOrder = (food, course) => ({
  type: REMOVE_FROM_SHARED_ORDER,
  food,
  course
});

export const resetOrder = () => ({
  type: RESET_ORDER
});
