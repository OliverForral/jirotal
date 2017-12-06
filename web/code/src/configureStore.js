import { connectRoutes } from 'redux-first-router';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory'
import noteReducer from './State/NoteState';

const history = createHistory();

const routesMap = {
  HOME: '/home',
  NOTE: '/note/:id',
};

const { reducer, middleware } = connectRoutes(history, routesMap);

const rootReducer = combineReducers({ location: reducer, note: noteReducer });
const middlewares = applyMiddleware(middleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(middlewares));

export default store;

