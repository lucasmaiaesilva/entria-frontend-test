import React, { Component } from 'react'
import Title from './Title'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      items: [{task: 'missao comprida', completed: true}],
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
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

  // removeItem (e) {
  //   const newArray = this.state.items
  //   newArray.splice(e.target.id, 1)
  //   this.setState({
  //     items: newArray
  //   })
  // }

  handleClick (e) {
    const newArray = this.state.items
    // toogle
    newArray[e.target.id].completed = !newArray[e.target.id].completed
    this.setState({
      items: newArray
    })
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
        <TodoList
          items={this.state.items}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default App
