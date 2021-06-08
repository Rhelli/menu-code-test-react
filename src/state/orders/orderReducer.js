import {
  CREATE_NEW_BOOKING, CREATE_NEW_ORDER, CREATE_NEW_SHARED_ORDER, ADD_TO_ORDER,
  ADD_TO_SHARED_ORDER, REMOVE_FROM_ORDER, REMOVE_FROM_SHARED_ORDER, RESET_ORDER
} from './orderTypes';

const initialState = {
  booking: {
    partySize: null,
    time: '',
    date: ''
  },
  orders: {
    Sam: {
      starters: {
        food: 'Soup',
        price: '3'
      },
      mains: {
        food: 'Meatballs',
        price: '18'
      }
    },
    Tim: {
      starters: {
        food: 'Prawn Cocktail',
        price: '4'
      }
    },
    Sharing: {
      mains: {
        food: 'Meatballs',
        price: '18'
      }
    }
  },
  customerCount: 0
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_BOOKING: return {
      ...state,
      booking: {
        partySize: action.partySize,
        time: action.time,
        date: action.date
      }
    };

    case CREATE_NEW_ORDER: return {
      ...state,
      orders: {
        ...state.orders,
        [action.name]: {
          color: action.color,
          starters: {},
          mains: {},
          desserts: {}
        }
      }
    };

    case CREATE_NEW_SHARED_ORDER: return {
      ...state,
      orders: {
        ...state.orders,
        Sharing: {
          color: action.color,
          starters: {},
          mains: {},
          desserts: {}
        }
      }
    };

    case ADD_TO_ORDER: return {
      ...state,
      orders: {
        ...state.orders,
        [action.customer]: {
          ...state.orders[action.customer],
          [action.course]: {
            food: action.food,
            price: action.price
          }
        }
      }
    };

    case ADD_TO_SHARED_ORDER: return {
      ...state,
      orders: {
        ...state.orders,
        Sharing: {
          ...state.orders.shared,
          [action.course]: {
            food: action.food,
            price: action.price
          }
        }
      }
    };

    case REMOVE_FROM_ORDER: return {
      ...state,
      orders: {
        ...state.orders,
        [action.customer]: {
          ...state[action.customer],
          [action.course]: {}
        }
      }
    };

    case REMOVE_FROM_SHARED_ORDER: return {
      ...state,
      orders: {
        ...state.orders,
        Sharing: {
          [action.course]: {}
        }
      }
    };

    case RESET_ORDER: return {
      ...initialState
    };

    default: return state;
  }
};

export default orderReducer;
