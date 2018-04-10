import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer)
const initialState = {
  todos: [{'walk dog', 'feed fish'}],
  list: []
};

export const trelloReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_TODO) {
    return newState;
  }
  return state;
};
ReactDOM.render(<App />, <List />, document.getElementById('root'));
registerServiceWorker();
