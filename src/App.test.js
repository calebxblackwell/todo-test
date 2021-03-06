import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Redux from 'redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import * as actions from './index'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    })
  })

describe('addToDo', () => {
  it ('should add new todo', () => {
    let state={
      todo: todo
    };
    state= trelloReducer(state, addToDo(todoText, 0));
    expect(state).toEqual({
      todo: [{todo:[todoText]}]
    })
  })
})
