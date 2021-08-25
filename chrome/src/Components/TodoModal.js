import React from 'react';
import "./TodoModal.css"
import TimeSelector from "./TimeSelector"

const TodoModal = ({openModalHandler, isOpen, setTodoList, addTodoDummy}) => {

  return (
  <div>
  {isOpen === false ? 
    null :
    <div className='modalBackdrop' onClick={openModalHandler}>
      <div className='modalView' onClick={(e) => e.stopPropagation()}>
        {/* <div className='desc'>Hi Hello?</div> */}
        <h3>새로운 할 일</h3>
        <input type='text' placeholder="내용을 입력해주세요"/>
        <label><input type='checkbox'/>마감시간 설정</label>
        <TimeSelector />
        {/* <div onClick={openModalHandler} className='close-btn'>&times;</div> */}
      <button onClick={openModalHandler} >취소</button>
      <button onClick={addTodoDummy}>생성</button>
      </div>
    </div>
  }
  </div>
  )
}

export default TodoModal;