import { INCREASE_STOCK, DECREASE_STOCK, RESET_STOCK } from './stockTypes';
import initialStockGen from '../../utils/menuUtils';

const menuData = require('../../../menu-data.json');

const initialState = initialStockGen(menuData);

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
