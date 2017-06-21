import React from 'react'
import PropTypes from 'prop-types'

const style = {
  color: 'rgb(102, 102, 102)'
}

const Title = ({text}) => (
  <h1 style={style}>{text}</h1>
)

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
