import React from 'react';
import "./TodoNewModal.css";
import TimeSelector from "./TimeSelector";
import { useState } from 'react';
import uuid from "react-uuid"

const TodoNewModal = ({ openNewModalHandler, isNewOpen, setTodoList, addTodoDummy, checkDeadLine, isAlert }) => {
  const [inputValue, setInputValue] = useState({
    id: uuid(),
    name: '',
    isChecked: false,
    checkDeadLine: false,
    deadLine: '날짜 추가하기',
    isAlert: false,
  });

  const createTodo = (inputValue) => {
    if (inputValue.name.length > 0) {
      setButtonChecked(false);
      addTodoDummy(inputValue);
      setInputValue({
        id: uuid(),
        name: '',
        isChecked: false,
        checkDeadLine: false,
        deadLine: '날짜 추가하기',
        isAlert: false,
      });
    }
  }

  const [buttonChecked, setButtonChecked] = useState(false);

  const handleCancle = () => {
    setButtonChecked(false);
    openNewModalHandler();
    setInputValue({
      id: uuid(),
      name: '',
      isChecked: false,
      checkDeadLine: false,
      deadLine: '날짜 추가하기',
      isAlert: false,
    })
  }

  const inputAlarm = () => {
    setInputValue(Object.assign({}, inputValue, { isAlert: !isAlert }));
  }

  const inputDeadline = () => {
    setInputValue(Object.assign({}, inputValue, { checkDeadLine: !checkDeadLine }))
    setButtonChecked(!buttonChecked);
    if (buttonChecked) {
      setInputValue(Object.assign({}, inputValue, { isAlert: false, checkDeadLine: false }));
    }
  }

  const inputNameValue = (value) => {
    setInputValue(Object.assign({}, inputValue, { name: value }));
  }



  return (
    <div>
      {isNewOpen === false ?
        null :
        <div className='modalBackdrop' onClick={openNewModalHandler}>
          <div className='modalView' onClick={(e) => e.stopPropagation()}>
            <h3>새로운 할 일</h3>
            <input type='text' onChange={(e) => inputNameValue(e.target.value)} placeholder="내용을 입력해주세요" />
            <label><input type='checkbox' onChange={inputDeadline} />마감시간 설정</label>
            {buttonChecked ?
              <>
                <TimeSelector />
                <label><input type='checkbox' onChange={inputAlarm} />10분 전 미리 알림</label> </>
              : null}
            <button onClick={handleCancle} >취소</button>
            <button onClick={() => createTodo(inputValue)}>생성</button>
          </div>
        </div>
      }
    </div>
  )
}

export default TodoNewModal;