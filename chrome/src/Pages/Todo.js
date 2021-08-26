import { useState } from "react";
import TodoElement from "../Components/TodoElement";
import "./Todo.css";
import uuid from "react-uuid";
import TodoModal from "../Components/TodoModal"

const Todo = () => {
  const todoDummy = [
    {
      id: uuid(),
      name : '앙',
      isChecked : false,
      checkDeadLine : true,
      deadLine : '날짜 추가하기',
      isAlert : true,
    },
    {
      id: uuid(),
      name : '잉',
      isChecked : false,
      checkDeadLine : true,
      deadLine : '날짜 추가하기',
      isAlert : true,
    }
  ];

  const [todoList, setTodoList] = useState(todoDummy);
  const [doneList, setDoneList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen)
  };

  const addTodoDummy = (toDoObj) => {
    setIsOpen(!isOpen)
    setTodoList([
      ...todoList,
      toDoObj,
    ]);
  };

  // const [alarm, setAlarm] = useState(false);
  // const [deadline, setDeadLine] = useState(false);

  // const handleAlarm = () => {
  //   setAlarm(!alarm);
  // }

  // const handleDeadLine = () => {
  //   setDeadLine(!deadline);
  // }

  const deleteTodoDummy = (e) => {
    setTodoList(todoList.filter((el) => el.id !== e.id));
  };

  const deleteTodoDummy2 = (e) => {
    setDoneList(doneList.filter((el) => el.id !== e.id))
  }

  const handleCheckChange = (check, id) => {
    if(check) {
      setDoneList([...doneList, ...todoList.filter((el) => el.id === id)])
      setTodoList(todoList.filter((el) => el.id !== id))
    }
    else {
      setDoneList(doneList.filter((el) => el.id !== id))
      setTodoList([...todoList, ...doneList.filter((el) => el.id === id)])
    }
  }

  return (
    <div className="container__todo">
      <h3 className="todo__title">To do!</h3>
      {todoList.map((e) => {
        return (
          <TodoElement
            name={e.name}
            id={e.id}
            isChecked={e.isChecked}
            todoList={todoList}
            setTodoList={setTodoList}
            handleCheckChange={handleCheckChange}
            deleteTodoDummy={() => deleteTodoDummy(e)}
            isAlert={e.isAlert}
            deadline={e.checkDeadLine}
          />
        );
      })}
      <div className="todo__container__add">
        <div className="todo__add" onClick={openModalHandler}>
          +
        </div>
        <TodoModal openModalHandler={openModalHandler} isOpen={isOpen} setTodoList={setTodoList} addTodoDummy={addTodoDummy}/>
      </div>
      <div><h3>Done List</h3></div>
      {doneList.map((e) => {
        return (
          <TodoElement
            id={e.id}
            name={e.name}
            isChecked={true}
            todoList={todoList}
            setTodoList={setTodoList}
            handleCheckChange={handleCheckChange}
            deleteTodoDummy={() => deleteTodoDummy2(e)}
            isAlert={e.isAlert}
            deadline={e.checkDeadLine}
          />
        );
      })}
    </div>
  );
};

export default Todo;
