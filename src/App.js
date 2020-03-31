import React, { Component } from 'react';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos';
import { v4 as uuidv4 } from 'uuid'

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Job One",
        completed: false
      },
      {
        id: 2,
        title: "Job Two",
        completed: false
      },
      {
        id: 3,
        title: "Job Three",
        completed: false
      },
    ]
  };

  // Toggle Completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }

}

export default App;
