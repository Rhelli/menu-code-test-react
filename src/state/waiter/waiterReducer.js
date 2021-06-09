import {
  TRIGGER_WAITER_MESSAGE, TRIGGER_WAITER_COURSES_ERROR, TRIGGER_WAITER_STOCK_ERROR,
  TRIGGER_WAITER_SNOBBY_ERROR, REMOVE_WAITER_MESSAGE
} from './waiterTypes';
import { waiterStartupMessage } from '../../utils/waiterUtils';

const initialState = {
  messageList: [
    waiterStartupMessage()[0],
    waiterStartupMessage()[1]
  ]
};

const waiterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRIGGER_WAITER_MESSAGE: return {
      messageList: [
        ...state.messageList,
        action.payload
      ]
    };

    case TRIGGER_WAITER_COURSES_ERROR: return {
      messageList: [
        ...state.messageList,
        action.payload
      ]
    };

    case TRIGGER_WAITER_STOCK_ERROR: return {
      messageList: [
        ...state.messageList,
        action.payload
      ]
    };

    case TRIGGER_WAITER_SNOBBY_ERROR: return {
      messageList: [
        ...state.messageList,
        action.payload
      ]
    };

    case REMOVE_WAITER_MESSAGE: return {
      messageList: [
        ...state.messageList.slice(0, action.payload),
        ...state.messageList.slice(action.payload + 1, state.messageList.length)
      ]
    };

    default: return state;
  }
};

export default waiterReducer;
