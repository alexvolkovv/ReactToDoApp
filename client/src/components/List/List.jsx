import React from 'react'
import './List.scss'
import Circle from '../Circle/Circle'
import removeImg from '../../assets/img/remove-list.svg'

const List = (props) => {
  const { lists, isRemovable, onClick, onRemove } = props

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
          {isRemovable ? (
            <img
              onClick={() => {
                onRemove(list)
              }}
              className={'list-remove__btn'}
              src={removeImg}
              alt="Remove"
            />
          ) : (
            ''
          )}
        </li>
      ))}
    </ul>
  )
}

export default List
