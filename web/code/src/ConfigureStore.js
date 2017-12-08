import { connectRoutes } from 'redux-first-router';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { createWorkItemReducer } from './State/CreateWorkItemState';
import { routeReducer } from './State/RouteState';

const history = createHistory();

const routesMap = {
  HOME: '/',
  SPRINT_VIEW: '/sprint/current',
  WORK_ITEM_NEW: '/work-item/new',
  WORK_ITEM_VIEW: '/work-item/:id',
};

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);

const rootReducer = combineReducers({
  location: reducer,
  createWorkItem: createWorkItemReducer,
  route: routeReducer,
});
const middlewares = applyMiddleware(middleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(enhancer, middlewares)
);
