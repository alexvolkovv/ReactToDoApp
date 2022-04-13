import React, { useEffect, useState } from 'react'
import './AddListPopup.scss'
import Circle from '../../Circle/Circle'
import closeImage from '../../../assets/img/close.svg'
import axios from 'axios'

const AddListPopup = (props) => {
  const { colors, setVisiblePopup, onAddLists } = props
  const [selectedColor, selectColor] = useState(0)
  const [folderName, setFolderName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (Array.isArray(colors)) {
      selectColor(colors[0]?.id)
      console.log(colors)
    }
  }, [colors])

  function addNewFolder(folderName) {
    if (!folderName) {
      alert('Введите название списка')
      return
    }
    setIsLoading(true)
    axios
      .post('http://localhost:3001/lists', {
        name: folderName,
        colorId: selectedColor,
      })
      .then(({ data }) => {
        onAddLists(data)
        setVisiblePopup(false)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <div className={'add-list-popup'}>
      <img
        src={closeImage}
        alt="Close"
        className={'add-list-popup__close-btn'}
        onClick={() => {
          setVisiblePopup(false)
        }}
      />
      <input
        type="text"
        placeholder={'Название папки'}
        className={'field'}
        value={folderName}
        onChange={(e) => {
          setFolderName(e.target.value)
        }}
      />
      <ul className={'colors'}>
        {colors.map((color) => (
          <li key={color.id}>
            <Circle
              onClick={() => {
                selectColor(color.id)
              }}
              color={color.hex}
              className={selectedColor === color.id && 'active'}
            />
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          addNewFolder(folderName)
        }}
        className={'button'}
      >
        {isLoading ? 'Добавление...' : 'Добавить'}
      </button>
    </div>
  )
}

export default AddListPopup
