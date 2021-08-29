import { useEffect, useState } from "react";
import TodoElement from "../Components/TodoElement";
import "../Style/Todo.css";
import uuid from "react-uuid";
import TodoNewModal from "../Components/TodoNewModal"


const Todo = () => {
  const todoDummy = [
    {
      id: uuid(),
      name: '1',
      isChecked: false,
      checkDeadLine: true,
      deadLine: '23:59',
      isAlert: true,
      isEditOpen2: false,
    }
    // {
    //   id: uuid(),
    //   name: '2',
    //   isChecked: false,
    //   checkDeadLine: true,
    //   deadLine: '23:58',
    //   isAlert: true,
    //   isEditOpen2: false,
    // },
    // {
    //   id: uuid(),
    //   name: '3',
    //   isChecked: false,
    //   checkDeadLine: true,
    //   deadLine: '22:57',
    //   isAlert: true,
    //   isEditOpen2: false,
    // },
    // {
    //   id: uuid(),
    //   name: '4',
    //   isChecked: false,
    //   checkDeadLine: true,
    //   deadLine: '23:56',
    //   isAlert: true,
    //   isEditOpen2: false,
    // },
    // {
    //   id: uuid(),
    //   name: '5',
    //   isChecked: false,
    //   checkDeadLine: true,
    //   deadLine: '22:55',
    //   isAlert: true,
    //   isEditOpen2: false,
    // },
  ];




  

  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  
  useEffect(()=>{
    if(localStorage.getItem('todoData') === null){
      localStorage.setItem('todoData', JSON.stringify(todoDummy));
      localStorage.setItem('doneData', JSON.stringify([]));
    }
    setTodoList(JSON.parse(localStorage.getItem('todoData')));
    setDoneList(JSON.parse(localStorage.getItem('doneData')));
  },[])

  const clearDoneList = () => {
    setDoneList([]);
  }
  
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

  // 로컬 스토리지와 상태 싱크 시키는 이펙트 훅
  useEffect(()=>{
    localStorage.setItem('todoData', JSON.stringify(todoList));
    localStorage.setItem('doneData', JSON.stringify(doneList))
  },[todoList, doneList])

  return (
    <div className="container__todo">
      <div className= 'title__wrapper'>
        <h3 className="todo__title">Todo List</h3>
        <div className="todo__container__add">
          <div className="todo__add" onClick={openNewModalHandler}>
            <i className="fas fa-plus"/>
          </div>
          <TodoNewModal openNewModalHandler={openNewModalHandler} setIsNewOpen={setIsNewOpen} isNewOpen={isNewOpen} setTodoList={setTodoList} todoList={todoList}/>
        </div>
      </div>
      <div className="todo__list">
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
      </div>
      <div className='title__wrapper'>
      <h3 className='todo__title'>Done List</h3>
      <div className="todo__container__delete">
          <div className="todo__doneList__delete" onClick={clearDoneList}>
          <i className="fas fa-minus"/>
          </div>
      </div>
      </div>
      <div className="todo__doneList">
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
    </div>
  );
};

export default Todo;
