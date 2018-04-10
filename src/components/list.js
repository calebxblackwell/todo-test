import React from 'react';
import ReactDOM from 'react-dom';

const List = (props) => {
  const list = props.list;
  const todos = list.map((list) => {
    <li key={list.toString()}>{list}</li>
  })


  return(
    <ul>
      {todos}
    </ul>
  );
}
const list = [];
ReactDom.render(
  <List list={list} />,
  document.getElementById('root')
);

export default List;
