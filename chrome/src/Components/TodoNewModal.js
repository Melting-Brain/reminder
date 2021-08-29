import React from 'react';
import "../Style/TodoNewModal.css";
import TimeSelector2 from "./TimeSelector2";
import { useState } from 'react';
import uuid from "react-uuid"

const TodoNewModal = ({ openNewModalHandler, isNewOpen, setIsNewOpen, setTodoList, checkDeadLine, isAlert, content, todoList }) => {

  const [Time,setTime] = useState({ value: new Date().toString().split(' ')[4] })
  
  const [inputValue, setInputValue] = useState({
    id: uuid(),
    name: '',
    isChecked: false,
    checkDeadLine: false,
    deadLine: Time.value,
    isAlert: false,
    isEditOpen2: false,
  });
  
  // useEffect (() => {
  //   console.log(inputValue)
  // },[inputValue])


  const addTodoDummy = (toDoObj) => {
    setIsNewOpen(!isNewOpen)
    setTodoList([
      toDoObj,
      ...todoList,
    ]);
  };
  
  const createTodo = (inputValue, value) => {
    if (inputValue.name.length > 0) {
      setButtonChecked(false);
      addTodoDummy(inputValue); // 더미에 넣고 ->
      setInputValue({
        id: uuid(),
        name: '',
        isChecked: false,
        checkDeadLine: false,
        deadLine: Time.value,
        isAlert: false,
        isEditOpen2: false,
      });
      setTime({ value: new Date().toString().split(' ')[4] })
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
      deadLine: Time.value,
      isAlert: false,
      isEditOpen2: false,
    })
  }

  const inputAlarm = () => {
    setInputValue(Object.assign({}, inputValue, { isAlert: !isAlert }));
  }

  const inputCheckDeadline = () => {
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
            <label><input type='checkbox' onChange={inputCheckDeadline} />마감시간 설정</label>
            {buttonChecked ?
              <>
                <TimeSelector2 setTime={setTime} Time={Time} setInputValue={setInputValue} inputValue={inputValue}/>
                <label><input type='checkbox' onChange={inputAlarm} />10분 전 미리 알림</label> </>
              : null}
            <div className="buttons">
              <div className='button' onClick={handleCancle}>취소</div>
              <div className='button' onClick={() => createTodo(inputValue, Time)}>생성</div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default TodoNewModal;