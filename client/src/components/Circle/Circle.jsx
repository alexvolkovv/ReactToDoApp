import React from 'react'
import './Circle.scss'

const Circle = (props) => {
  let { color, onClick, className } = props
  let style = {
    backgroundColor: color,
  }
  return (
    <span
      onClick={onClick}
      className={`circle ${className}`}
      style={style}
    ></span>
  )
}

export default Circle
