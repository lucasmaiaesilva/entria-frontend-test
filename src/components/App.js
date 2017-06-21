import React, { Component } from 'react'
import Title from './Title'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      items: [],
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({
      items: [
        ...this.state.items,
        {task: this.state.text, completed: false}
      ],
      text: ''
    })
  }

  handleChange (e) {
    this.setState({text: e.target.value})
  }

  render () {
    return (
      <div className='app'>
        <Title text='To Do List' />
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.text}
        />
        <TodoList items={this.state.items} />
      </div>
    )
  }
}

export default App
