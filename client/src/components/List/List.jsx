import React from 'react'
import './List.scss'
import Circle from '../Circle/Circle'
import removeImg from '../../assets/img/remove-list.svg'

const List = (props) => {
  const { lists, isRemovable, onClick, onRemove, tasks, activeList } = props
  function calcTaskCount(lists, tasks) {
    lists.forEach((list) => {
      list.taskCount = tasks?.filter(
        (task) => task['list_id'] === list.id
      ).length
    })
  }

  calcTaskCount(lists, tasks)
  return (
    <ul className="list">
      {lists.map((list, index) => (
        <li
          onClick={() => onClick(list)}
          key={index}
          className={`${
            list.active
              ? 'active'
              : list.id === activeList?.id && list.id !== undefined
              ? 'active'
              : ''
          } ${list.className ? list.className : ''}`}
        >
          <i>{list.icon ? list.icon : <Circle color={list.hex} />}</i>
          <span>
            {list.name +
              (list?.taskCount !== 0 && list.taskCount !== undefined
                ? ` (${list.taskCount})`
                : '')}
          </span>
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
