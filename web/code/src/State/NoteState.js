import { NOT_FOUND } from 'redux-first-router'

const initialState = {
  id: null,
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case 'HOME':
    case NOT_FOUND:
      return {
        ...state,
        id: null,
      };
    case 'NOTE':
      return {
        ...state,
        id: action.payload.id,
      };
    default:
      return state;
  };
}
