import React from 'react'
import Todo from './todo'
import Addtodo from './add'

class App extends React.Component{
  state = {
    todos: [
      {id:1 , content : 'Buy some eggs'},
      {id:2 , content : 'Play video games'}
    ]
  }
  //state is made equal to a object and in that object,todo is a property which is an array of objects.
  deletetodo = (id) =>{
    const todosnew = this.state.todos.filter(item => {
      return item.id !== id
    })
    this.setState({
      todos : todosnew
    })
  }
  
  additem = (todo) => {
    todo.id = Math.random();
    let todosnew = [...this.state.todos,todo] //... is a spread operator
    this.setState({
      todos:todosnew
    })

  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">To-do List</h1>
         <Todo todol={this.state.todos} del={this.deletetodo}/>
         <Addtodo add={this.additem}/>
      </div>
    )

  }
}

export default App;
