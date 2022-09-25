import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

export default (tools = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...tools, action.payload];
    case UPDATE:
      return tools.map((tool) => (tool._id === action.payload._id ? action.payload : tool));
    case DELETE:
      return tools.filter((tool) => tool._id !== action.payload);
    default:
      return tools;
  }
};