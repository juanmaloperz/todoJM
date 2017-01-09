import React from 'react';
import Todolist from 'Todolist';
var now = require("date-now");
import uuid from 'uuid';

export default class Todoapp extends React.Component{
constructor(props){
   super(props);
     this.state= {
       todos:[ ],
        text:''
   };
}
handleChange(e){
    this.setState({text: e.target.value});

}
 handleSubmit(e){
   e.preventDefault();
   var newTodos ={
       text:  this.state.text,
       id: uuid()
   };
   this.setState((prevState)=>({
     todos: prevState.todos.concat(newTodos),
     text : ''
   }));
 }


render(){
return(
  <div>
    <Todolist todos={this.state.todos}/>
    <form onSubmit={this.handleSubmit.bind(this)}>
       <input  type="text" onChange={this.handleChange.bind(this)} value={this.state.text}/>
    <button className="button">{'Add #'+(this.state.todos.length+1)}</button>
    </form>
  </div>
)
}

};
