import React from 'react';
import "../Style/TodoNewModal.css";
import TimeSelector from "./TimeSelector";
import { useState } from 'react';
// import uuid from "react-uuid"

const TodoEditModal = ({ openEditModalHandler, isEditOpen, setTodoList, todoList, checkDeadLine, deadLine, isAlert, id, name, content }) => {

  const [Time,setTime] = useState({ value: deadLine })

  const changeTime = (value) => {
    setTime( value )
    setTodoList([...todoList.map(el => {
      if (el.id === content.id) {
        el.deadLine = value.value
      }
      return el
    })])
  }

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

  const editTodo = (content, value) => {
    if (content.name.length > 0) {
      openEditModalHandler();
      editTodoDummy(content);  
      changeTime(value);
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

  const editAlarm = (e) => {
    setTodoList([...todoList.map(el => {
      if (el.id === content.id) {
        el.isAlert = e;
      }
      return el
    })])
  }

  const editCheckDeadline = () => {
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
            <label><input type='checkbox' defaultChecked={content.checkDeadLine} onChange={editCheckDeadline} />마감시간 설정</label>
            {buttonChecked2 ?
              <>
                <TimeSelector setTime={setTime} Time={Time}/>
                <label><input type='checkbox' onChange={(e) => editAlarm(e.target.checked)} defaultChecked={content.isAlert} />10분 전 미리 알림</label> </>
              : null}
              <div className="buttons">
            <div className='button' onClick={handleCancle} >취소</div>
            <div className='button' onClick={() => editTodo(content, Time)}>수정</div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default TodoEditModal;