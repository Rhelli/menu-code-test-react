import {
  CREATE_NEW_BOOKING, CREATE_NEW_ORDER, ADD_TO_ORDER,
  REMOVE_FROM_ORDER, RESET_ORDER
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

export const addToOrder = (food, price, course, guest) => ({
  type: ADD_TO_ORDER,
  food,
  price,
  course,
  guest
});

export const removeFromOrder = (food, course, customer) => ({
  type: REMOVE_FROM_ORDER,
  food,
  course,
  customer
});

export const resetOrder = () => ({
  type: RESET_ORDER
});
