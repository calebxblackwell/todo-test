import React from 'react';
import ReactDOM from 'react-dom';

const List = (props) => {
  const todos = props.list.map((list) => {
    <li key={list.toString()}>{list}</li>
  })


  return(
    <ul>
      {todos}
    </ul>
  );
}

export default List;
