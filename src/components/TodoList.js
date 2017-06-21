import React from 'react'

const TodoList = ({items}) => {
  const todoNode = items.map((todo, index) => {
    return (
      <div className='todo__item' key={index}>
        {todo.task} - {String(todo.completed)}
      </div>
    )
  })
  return (<div>{todoNode}</div>)
}

export default TodoList
