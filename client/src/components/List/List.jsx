import React from 'react'
import './List.scss'
import Circle from '../Circle/Circle'

const List = (props) => {
  const { lists, isRemovable, onClick } = props

  return (
    <ul className="list">
      {lists.map((list, index) => (
        <li
          onClick={onClick}
          key={index}
          className={`${list.active ? 'active' : ''} ${
            list.className ? list.className : ''
          }`}
        >
          <i>{list.icon ? list.icon : <Circle color={list.color} />}</i>
          <span>{list.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default List
