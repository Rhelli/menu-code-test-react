import {
  CREATE_NEW_BOOKING, CREATE_NEW_ORDER, CREATE_NEW_SHARED_ORDER, ADD_TO_ORDER,
  REMOVE_FROM_ORDER, RESET_ORDER
} from './orderTypes';

const initialState = {
  booking: {
    partySize: null,
    time: '',
    date: ''
  },
  orders: {
    'Guest 1': {
      color: {
        backgroundColor: '#FFA726'
      },
      starters: {},
      mains: {},
      desserts: {}
    },
    'Guest 2': {
      color: {
        backgroundColor: '#A569BD'
      },
      starters: {},
      mains: {},
      desserts: {}
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
        [action.guest]: {
          ...state.orders[action.guest],
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
          ...state.orders[action.customer],
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
