import React from 'react'

import {shallow} from 'enzyme'
import {expect} from 'chai'
import TodoList from '../src/components/TodoList'

describe('<TodoList />', () => {
  const primProps = [
    {
      task: 'do the homework today',
      completed: false
    },
    {
      task: 'write another chapter of the book',
      completed: false
    }
  ]
  const wrapper = shallow(<TodoList items={primProps} handleClick={() =>{}} />)
  it('render without crash', () => {
    expect(wrapper).to.exist
  })
  it('rendering all the tasks', () => {
    expect(wrapper.find('.todo__item')).to.have.length(2)
  })
})
