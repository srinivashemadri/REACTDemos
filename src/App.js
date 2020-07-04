import React, { Component } from 'react';
import Todos from './todos';
import Addtodo from './addtodo';


class App extends Component{
  state ={
    todos:[
      
    ]
  }
  deletetodo =(id) =>{
    var copyoftodos = this.state.todos.filter(todo=>{
      return todo.id ===id ? false: true
    })
    this.setState({
      todos: copyoftodos
    })
  }
  addtodo =(newtodo) =>{
    var timestamp = new Date();
    newtodo.id = timestamp.getTime();
    let copyoftodos = [...this.state.todos , newtodo];
    this.setState({
      todos : copyoftodos
    })

  }
  render(){
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deletetodo={this.deletetodo}/> 
        <Addtodo addtodo = {this.addtodo}/>

      </div>
    )
  }
}

export default App;
