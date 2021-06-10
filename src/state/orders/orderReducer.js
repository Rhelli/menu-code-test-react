import {
  CREATE_NEW_BOOKING, CREATE_NEW_ORDER, CREATE_NEW_SHARED_ORDER, ADD_TO_ORDER,
  REMOVE_FROM_ORDER, RESET_ORDER
} from './orderTypes';

const initialState = {
  booking: {},
  orders: {},
  customerCount: 0
};

const tempInitial = {
  booking: {
    partySize: 2,
    time: '12:00',
    date: '2021-06-10T14:04:30.778Z'
  },
  orders: {
    Sam: {
      color: {
        backgroundColor: '#FFA726'
      },
      starters: {
        food: 'Pâté',
        price: 5
      },
      mains: {
        food: 'Meatballs',
        price: 11.5
      },
      desserts: {
        food: 'Sticky toffee',
        price: 18
      }
    },
    Pam: {
      color: {
        backgroundColor: '#28B463'
      },
      starters: {
        food: 'Bruschetta',
        price: 4.5
      },
      mains: {
        food: 'Salmon fillet',
        price: 14
      },
      desserts: {
        food: 'Cheesecake',
        price: 4
      }
    }
  },
  customerCount: 0
};

const orderReducer = (state = tempInitial, action) => {
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
