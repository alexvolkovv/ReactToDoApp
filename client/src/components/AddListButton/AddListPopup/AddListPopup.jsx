import React, { useState } from 'react'
import './AddListPopup.scss'
import Circle from '../../Circle/Circle'
import closeImage from '../../../assets/img/close.svg'

const AddListPopup = (props) => {
  const { colors, setVisiblePopup } = props
  const [selectedColor, selectColor] = useState(colors[0].id)
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
      <input type="text" placeholder={'Название папки'} className={'field'} />
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
      <button className={'button'}>Добавить</button>
    </div>
  )
}

export default AddListPopup
