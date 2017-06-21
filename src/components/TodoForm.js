import React from 'react'
import PropTypes from 'prop-types'

const TodoForm = ({handleSubmit, handleChange, value}) => (
  <form className='add-task' onSubmit={handleSubmit}>
    <input
      className='add-task__input'
      onChange={handleChange}
      placeholder='add your task in here ...'
      value={value}
      required
    />
    <button className='add-task__submit' type='submit'> + </button>
  </form>
)

TodoForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  value: PropTypes.string
}

export default TodoForm
