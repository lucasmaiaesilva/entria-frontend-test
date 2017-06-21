import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import propTypes from 'prop-types'

import Title from '../src/components/Title'

describe('<Title />', () => {
  const primProps = {
    text: 'titulo generico'
  }
  it('render wihout crashing', () => {
    const wrapper = shallow(<Title {...primProps} />)
    expect(wrapper.length).to.be.equal(1)
  })
  it('Did the component have a author property in proptypes', () => {
    expect(Title.propTypes).to.have.property('text')
  })
})
