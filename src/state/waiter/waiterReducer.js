import {
  TRIGGER_WAITER_MESSAGE, REMOVE_WAITER_MESSAGE
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
