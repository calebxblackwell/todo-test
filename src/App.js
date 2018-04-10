import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Form from './components/form';
import List from './components/list';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      todos: [],
      list: []
    }
  }
      onSubmit(text){
        this.setState({
          list: text
        })
      }
  render() {
    const todos = this.state.todos;
    const list = this.state.list;
    return (
      <div className="App">
          <h1>ToDo</h1>
          <Form todos={this.state.todos}
                updateList={(text)=> {this.onSubmit(text)} }/>
          <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
