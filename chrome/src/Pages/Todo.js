import { useState } from "react";
import TodoElement from "../Components/TodoElement";
import "./Todo.css";
import uuid from "react-uuid";
import TodoModal from "../Components/TodoModal"

const Todo = () => {
  const todoDummy = [
    {
      id: uuid(),
      name: "복습하기",
      isChecked: false,
    },
    {
      id: uuid(),
      name: "비타민챙겨먹기",
      isChecked: false,
    },
  ];

  const [todoList, setTodoList] = useState(todoDummy);
  const [doneList, setDoneList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen)
  };

  const addTodoDummy = () => {
    setTodoList([
      ...todoList,
      {
        id: uuid(),
        name: "입력바람",
        isChecked: false,
      },
    ]);
  };

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
          />
        );
      })}
    </div>
  );
};

export default Todo;
