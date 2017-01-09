import React from 'react';
import Todoapp from 'Todoapp';

export default class Todolist extends React.Component{
render(){
      return (
        <div>
        <ul>
         {this.props.todos.map(todo => (
           <li key={todo.id}>{todo.text}</li>
         ))}
        </ul>
        </div>
      )
    }
  };
