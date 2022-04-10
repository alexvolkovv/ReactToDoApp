import React, { useState } from 'react'
import './AddListPopup.scss'
import Circle from '../../Circle/Circle'
import closeImage from '../../../assets/img/close.svg'

const AddListPopup = (props) => {
  const { colors, setVisiblePopup, lists, onAddLists } = props
  const [selectedColor, selectColor] = useState(colors[0].id)
  const [folderName, setFolderName] = useState('')

  function addNewFolder(folderName) {
    if (!folderName) {
      alert('Введите название списка')
      return
    }
    let obj = {
      id: lists[lists.length - 1]?.id + 1 || 0,
      name: folderName,
      colorId: selectedColor,
      color: colors.filter((color) => color.id === selectedColor)[0].hex,
    }

    onAddLists(obj)
    setVisiblePopup(false)
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
        Добавить
      </button>
    </div>
  )
}

export default AddListPopup
