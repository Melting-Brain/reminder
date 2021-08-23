import { useState } from "react";
import TodoElement from "../Components/TodoElement";
import "./Todo.css";
import uuid from "react-uuid";


const Todo = () => {
  const todoDummy = [
    {
      id: uuid(),
      name : "복습하기",
      isChecked : true
    },
    {
      id: uuid(),
      name : "비타민챙겨먹기",
      isChecked : true
    }
  ];

  const [todoList, setTodoList] = useState(todoDummy);

  const addTodoDummy = () => {
    setTodoList([
      ...todoList,
      {
        id: uuid(),
        name : "입력바람",
        isChecked: true
      }
    ])
  }

  const deleteTodoDummy = (e) => {
    setTodoList(todoList.filter((el) => el.id !== e.id))
  }

  return (
    <div className="container__todo">
      <h3 className="todo__title">Todo</h3> 
      {todoList.map((e) => {
        return (
          <TodoElement 
          name={e.name}
          isChecked={e.isChecked}
          deleteTodoDummy={() => deleteTodoDummy(e)}/>
        );
      })}
      <div className="todo__container__add">
        <div className="todo__add" onClick={addTodoDummy}>
          +
        </div>
      </div>
    </div>
  )
}

export default Todo