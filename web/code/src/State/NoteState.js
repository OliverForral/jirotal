import { NOT_FOUND } from 'redux-first-router'

const noteReducer = (state = null, action = {}) => {
  switch(action.type) {
    case 'HOME':
    case NOT_FOUND:
      return null;
    case 'USER':
      return action.payload.id;
    default:
      return state;
  };
}

export default noteReducer;
