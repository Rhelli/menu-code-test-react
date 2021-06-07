import { INCREASE_STOCK, DECREASE_STOCK, RESET_STOCK } from './stockTypes';
import initialStockGen from '../../utils/menuUtils';

const menuData = require('../../../menu-data.json');

// Util func to create the initial state object dynamically from the menu data/
// Param1 = menu Data, Param2 = stock count, Param 3 = Low stock item
const initialState = initialStockGen(menuData, 30, 'Cheesecake');

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_STOCK: return {
      ...state,
      [action.course]: {
        ...state[action.course],
        [action.food]: action.food++
      }
    };

    case DECREASE_STOCK: return {
      ...state,
      [action.course]: {
        ...state[action.course],
        [action.food]: action.food--
      }
    };

    case RESET_STOCK: return {
      ...initialState
    };

    default: return state;
  }
};

export default stockReducer;
