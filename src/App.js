import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form';
import List from './list';

class App extends Component {
  constructor(){
    super();
    this.state= {
      todos: [],
      title: "Test todo App"
    }
  }
  render() {
    return (
      <div className="App">
          <h1>ToDo</h1>
            <form>
              <input type="text" />
              <button onClick={this.addToDo}>Add</button>
            </form>
      </div>
    );
  }
}

export default App;
