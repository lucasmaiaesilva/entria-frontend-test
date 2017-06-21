import React from 'react'

const TodoList = ({items, handleClick}) => {
  const todoNode = items.map((todo, index) => {
    const classHtml = todo.completed ? 'done' : 'undone'
    return (
      <div className='todo__item' key={index}>
        <div className='todo__item--task'>
          <span className={classHtml}>{todo.task}</span>
        </div>
        <div className='todo__item--check'>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={handleClick}
            id={index}
          />
        </div>
      </div>
    )
  })
  return (<div className='todo'>{todoNode}</div>)
}

export default TodoList
