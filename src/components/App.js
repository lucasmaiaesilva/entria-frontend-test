import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      items: [],
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    return (
      <div>
        <h1> ToDo list </h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder='add your task in here ...' value={this.state.text} />
          <button type='submit'> + </button>
        </form>
        <div>
          {this.state.items.map((item, index) => <div key={index}><span>{item.task} - {String(item.completed)}</span></div>)}
        </div>
      </div>
    )
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
}

export default App
