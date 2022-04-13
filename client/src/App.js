import React, { useEffect, useState } from 'react'
import Tasks from './components/Tasks/Tasks'
import Sidebar from './components/Sidebar/Sidebar'
import axios from 'axios'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const [lists, setLists] = useState([])
  const [colors, setColors] = useState([])
  const [tasks, setTasks] = useState([])
  const [activeList, setActiveList] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/lists').then((res) => {
      setLists(res.data)
    })

    axios.get('http://localhost:3001/colors').then((res) => {
      setColors(res.data)
    })

    axios.get('http://localhost:3001/tasks').then((res) => {
      setTasks(res.data)
    })
  }, [])

  function onEditTitle(id, title) {
    const newList = lists.map((list) => {
      if (list.id === id) {
        list.name = title
      }

      return list
    })
    setLists(newList)
  }

  function onAddTask(listId, taskObj) {
    const newTasks = [...tasks, taskObj]

    console.log(newTasks)
    console.log(taskObj)
    setTasks(newTasks)
  }

  console.log(navigate)

  return (
    <div className="todo">
      <Sidebar
        lists={lists}
        setLists={setLists}
        colors={colors}
        setColors={setColors}
        tasks={tasks}
        activeList={activeList}
        setActiveList={setActiveList}
      />
      <div className="todo__tasks">
        <Routes>
          <Route
            path={'/'}
            exact={true}
            element={lists.map((list) => (
              <Tasks
                list={list}
                tasks={tasks}
                onEditTitle={onEditTitle}
                onAddTask={onAddTask}
                lists={lists}
                withoutEmpty={true}
                setTasks={setTasks}
              />
            ))}
          />
          <Route
            path={'/lists/:id'}
            element={
              <Tasks
                list={lists && activeList}
                tasks={tasks}
                onEditTitle={onEditTitle}
                onAddTask={onAddTask}
                lists={lists}
                setTasks={setTasks}
              />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
