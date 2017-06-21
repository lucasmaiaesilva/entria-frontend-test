import React from 'react'
import PropTypes from 'prop-types'

const style = {
  color: 'rgb(102, 102, 102)'
}

const Title = ({text}) => (
  <div className='header'>
    <h1 style={style} className='header__title'>
      {text}
    </h1>
    <p className='header__description'>
      made by Lucas Maia e Silva - github.com/lucasmaiaesilva
    </p>
  </div>
)

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
