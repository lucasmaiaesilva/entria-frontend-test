import React from 'react'
import {render} from 'enzyme'
import {expect} from 'chai'
import TodoForm from '../src/components/TodoForm'

describe('<TodoForm />', () => {
  const primProps = {
    handleChange: () => '',
    handleSubmit: () => ''
  }
  const wrapper = render(<TodoForm {...primProps} />)
  it('should component exist', () => {
    expect(wrapper).to.exist
  })
  it('render component without crash', () => {
    expect(wrapper.length).to.be.equal(1)
  })
  it('did the handleChange property exists on the proptype of the component?', () => {
    expect(TodoForm.propTypes).to.have.a.property('handleChange')
  })
  it('did the handleSubmit property exists on the proptype of the component?', () => {
    expect(TodoForm.propTypes).to.have.a.property('handleSubmit')
  })
  it('looking for a form tag', () => {
    expect(wrapper.find('form')).to.exist
  })
  it('should form have a submit button', () => {
    expect(wrapper.find('button').attr().type).to.be.equal('submit')
  })
})
