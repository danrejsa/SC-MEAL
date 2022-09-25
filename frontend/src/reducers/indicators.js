import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (indicators = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...indicators, action.payload];
    case UPDATE:
      return indicators.map((indicator) => (indicator._id === action.payload._id ? action.payload : indicator));
    case DELETE:
      return indicators.filter((indicator) => indicator._id !== action.payload);
    default:
      return indicators;
  }
};