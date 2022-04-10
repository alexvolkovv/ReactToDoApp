import React, { useState } from 'react'
import Plus from './Plus/Plus'
import List from '../List/List'
import AddListPopup from './AddListPopup/AddListPopup'

const AddListButton = (props) => {
  const { colors, lists, onAddLists } = props
  const [visiblePopup, setVisiblePopup] = useState(false)

  return (
    <div>
      <List
        onClick={() => {
          setVisiblePopup(!visiblePopup)
        }}
        lists={[
          {
            icon: <Plus />,
            name: 'Добавить список',
            className: 'list__add-button',
          },
        ]}
      />
      {visiblePopup && (
        <AddListPopup
          colors={colors}
          lists={lists}
          onAddLists={onAddLists}
          setVisiblePopup={setVisiblePopup}
        />
      )}
    </div>
  )
}

export default AddListButton
