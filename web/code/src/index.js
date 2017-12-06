import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import Link from 'redux-first-router-link';
import store from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const App = ({ noteId, onClick }) =>
  <div>
    {!noteId
      ? <div>
          <h1>HOME</h1>
          
          <Link to="/note/123">Note 123</Link>
          <Link to={{ type: 'NOTE', payload: { id: 456 } }}>Note 456</Link>
          <span onClick={onClick}>Note 5</span>
        </div>
      
      : <h1>NOTE: {noteId}</h1>
    }
  </div>;

const mapStateToProps = ({ noteId }) => ({ noteId });
const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch({ type: 'NOTE', payload: { id: 5 } })
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
