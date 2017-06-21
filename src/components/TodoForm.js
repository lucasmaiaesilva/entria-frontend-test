import React from 'react'
import PropTypes from 'prop-types'

const TodoForm = ({handleSubmit, handleChange, value}) => (
  <form onSubmit={handleSubmit}>
    <input
      onChange={handleChange}
      placeholder='add your task in here ...'
      value={value}
    />
    <button type='submit'> + </button>
  </form>
)

TodoForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  value: PropTypes.string
}

export default TodoForm
