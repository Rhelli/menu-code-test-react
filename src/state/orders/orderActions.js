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

export const createNewSharedOrder = (color) => ({
  type: CREATE_NEW_SHARED_ORDER,
  color
});

export const addToOrder = (food, price, course, guest) => ({
  type: ADD_TO_ORDER,
  food,
  price,
  course,
  guest
});

export const addToSharedOrder = (food, price, course) => ({
  type: ADD_TO_SHARED_ORDER,
  food,
  price,
  course
});

export const removeFromOrder = (food, course, customer) => ({
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
