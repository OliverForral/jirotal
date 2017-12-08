import { NOT_FOUND } from 'redux-first-router';

const initialState = {
  workItemId: null,
  route: 'HOME',
};

export const routeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'HOME':
    case NOT_FOUND:
      return {
        ...state,
        workItemId: null,
        route: action.type,
      };
    case 'WORK_ITEM_NEW':
      return {
        ...state,
        workItemId: null,
        route: action.type,
      };
    case 'WORK_ITEM_VIEW':
      return {
        ...state,
        workItemId: action.payload.id,
        route: action.type,
      };
    case 'SPRINT_VIEW':
      return {
        ...state,
        workItemId: null,
        route: action.type,
      };
    default:
  }

  return state;
};
