import React from 'react';
import "./TodoModal.css"


const TodoModal = ({openModalHandler, isOpen}) => {

  return (
  <div>
  {isOpen === false ? 
    null :
    <div className='modalBackdrop' onClick={openModalHandler}>
      <div className='modalView' onClick={(e) => e.stopPropagation()}>
        <div onClick={openModalHandler} className='close-btn'>&times;</div>
        <div className='desc'>Hi Hello?</div>
      </div>
    </div>
  }
  </div>
  )
}

export default TodoModal;