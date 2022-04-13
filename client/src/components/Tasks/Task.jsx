import React, { useState } from 'react'
import removeImg from '../../assets/img/remove.svg'
import editImg from '../../assets/img/edit.svg'
import axios from 'axios'

const Task = (props) => {
  const { task, onRemove, onEdit, setTasks, tasks } = props
  const [completedStatus, setCompletedStatus] = useState(task?.completed)

  function updateTaskStatus(task) {
    setCompletedStatus(!completedStatus)
    axios
      .patch('http://localhost:3001/tasks/' + task.id, {
        name: task.name,
        completed: !completedStatus,
      })
      .then(() => {
        const newTasks = tasks?.map((currentTask) => {
          if (currentTask.id === task.id) {
            currentTask.completed = !completedStatus
          }

          return currentTask
        })

        setTasks(newTasks)
      })
      .catch((err) => {
        console.log(err)
        alert('Ошибка при изменении статуса задачи')
      })
  }

  return (
    <div key={task.id} className="tasks__items-item">
      <div className={'checkbox'}>
        <input
          onChange={() => {
            updateTaskStatus(task)
          }}
          checked={completedStatus}
          type="checkbox"
          name=""
          id={`task-id${task.id}`}
        />
        <label htmlFor={`task-id${task.id}`}>
          <svg
            width="14"
            height="9"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
      </div>
      <div className="task-content">{task.name}</div>
      <div className="task__actions">
        <img
          src={editImg}
          alt="Edit"
          className={'task__actions-edit'}
          onClick={onEdit}
        />

        <img
          src={removeImg}
          alt="Remove"
          className={'task__actions-remove'}
          onClick={onRemove}
        />
      </div>
    </div>
  )
}

export default Task
