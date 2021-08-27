import React from 'react';
import "./TodoNewModal.css";
import TimeSelector from "./TimeSelector";
import { useState } from 'react';
// import uuid from "react-uuid"

const TodoEditModal = ({ openEditModalHandler, isEditOpen, setTodoList, todoList, checkDeadLine, isAlert, id, name, content }) => {

  const editTodoDummy = (content) => {
    setTodoList([...todoList.map(el => {
      if (el.id === content.id) {
        el.isEditOpen2 = false
      }
      return el
    })])
    setTodoList([...todoList.map(el => {
      if (el.id === content.id) {
        el = content
      }
      return el
    })])
  }

  const [buttonChecked2, setButtonChecked2] = useState(content.checkDeadLine);

  const editTodo = (content) => {
    if (content.name.length > 0) {
      openEditModalHandler();
      editTodoDummy(content);   // 이거 할 것 
    }
  }

  const handleCancle = () => {
    openEditModalHandler();
    setTodoList([...todoList.map(el => {
      if (el.id === content.id) {
        el.isEditOpen2 = false
      }
      return el
    })])
  }

  const editAlarm = () => {
    setTodoList([...todoList.map(el => {
      if (el.id === content.id) {
        el.isAlert = !isAlert
      }
      return el
    })])
  }

  const editDeadline = () => {
    setTodoList([...todoList.map(el => {
      if (el.id === content.id) {
        el.checkDeadLine = !checkDeadLine
      }
      return el
    })])
    setButtonChecked2(!buttonChecked2);
    if (buttonChecked2) {
      setTodoList([...todoList.map(el => {
        if (el.id === content.id) {
          el.isAlert = false;
          el.checkDeadLine = false;
        }
        return el
      })])
    }
  }

  const editNameValue = (value) => {
    setTodoList([...todoList.map(el => {
      if (el.id === content.id) {
        el.name = value
      }
      return el
    })])
  }

  return (
    <>
      {isEditOpen === false ?
        null :
        <div className='modalBackdrop' onClick={openEditModalHandler}>
          <div className='modalView' onClick={(e) => e.stopPropagation()}>
            <h3>새로운 할 일</h3>
            <input type='text' defaultValue={content.name} onChange={(e) => editNameValue(e.target.value)} placeholder='내용을 입력해주세요.' />
            <label><input type='checkbox' defaultChecked={content.checkDeadLine} onChange={editDeadline} />마감시간 설정</label>
            {buttonChecked2 ?
              <>
                <TimeSelector />
                <label><input type='checkbox' onChange={editAlarm} defaultChecked={content.isAlert} />10분 전 미리 알림</label> </>
              : null}
            <button onClick={handleCancle} >취소</button>
            <button onClick={() => editTodo(content)}>수정</button>
          </div>
        </div>
      }
    </>
  )
}

export default TodoEditModal;