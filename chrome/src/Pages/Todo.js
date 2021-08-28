import { useState } from "react";
import TodoElement from "../Components/TodoElement";
import "./Todo.css";
import uuid from "react-uuid";
import TodoNewModal from "../Components/TodoNewModal"

const Todo = () => {
  const todoDummy = [
    {
      id: uuid(),
      name: '1',
      isChecked: false,
      checkDeadLine: true,
      deadLine: '14:00',
      isAlert: true,
      isEditOpen2: false,
    },
    {
      id: uuid(),
      name: '2',
      isChecked: false,
      checkDeadLine: true,
      deadLine: '날짜 추가하기',
      isAlert: true,
      isEditOpen2: false,
    },
    {
      id: uuid(),
      name: '3',
      isChecked: false,
      checkDeadLine: true,
      deadLine: '날짜 추가하기',
      isAlert: true,
      isEditOpen2: false,
    },
    {
      id: uuid(),
      name: '4',
      isChecked: false,
      checkDeadLine: true,
      deadLine: '날짜 추가하기',
      isAlert: true,
      isEditOpen2: false,
    },
    {
      id: uuid(),
      name: '5',
      isChecked: false,
      checkDeadLine: true,
      deadLine: '날짜 추가하기',
      isAlert: true,
      isEditOpen2: false,
    },
  ];

  const [todoList, setTodoList] = useState(todoDummy);
  const [doneList, setDoneList] = useState([]);
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const openNewModalHandler = () => {
    setIsNewOpen(!isNewOpen);
  };

  const openEditModalHandler = () => {
    setIsEditOpen(!isEditOpen);
  }

  const deleteTodoDummy = (e) => {
    setTodoList(todoList.filter((el) => el.id !== e.id));
  };

  const deleteTodoDummy2 = (e) => {
    setDoneList(doneList.filter((el) => el.id !== e.id))
  }

  const handleCheckChange = (check, id) => {
    if (check) {
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
            key={e.id}
            name={e.name}
            id={e.id}
            isChecked={e.isChecked}
            todoList={todoList}
            setTodoList={setTodoList}
            handleCheckChange={handleCheckChange}
            deleteTodoDummy={() => deleteTodoDummy(e)}
            isAlert={e.isAlert}
            deadLine={e.deadLine}
            checkDeadLine={e.checkDeadLine}
            openEditModalHandler={openEditModalHandler}
            isEditOpen={isEditOpen}
            isEditOpen2={e.isEditOpen2}
            content={e}
          />
        )
      })}
      <div className="todo__container__add">
        <div className="todo__add" onClick={openNewModalHandler} >
          +
        </div>
        <TodoNewModal openNewModalHandler={openNewModalHandler} setIsNewOpen={setIsNewOpen} isNewOpen={isNewOpen} setTodoList={setTodoList} todoList={todoList}/>
      </div>
      <div><h3>Done List</h3></div>
      {doneList.map((e) => {
        return (
          <TodoElement
            key={e.id}
            id={e.id}
            name={e.name}
            isChecked={true}
            todoList={todoList}
            setTodoList={setTodoList}
            handleCheckChange={handleCheckChange}
            deleteTodoDummy={() => deleteTodoDummy2(e)}
            isAlert={e.isAlert}
            deadLine={e.deadLine}
            checkDeadLine={e.checkDeadLine}
            openEditModalHandler={openEditModalHandler}
            isEditOpen={isEditOpen}
            isEditOpen2={e.isEditOpen2}
            content={e}
          />
        );
      })}
    </div>
  );
};

export default Todo;
