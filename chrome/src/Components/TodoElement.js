import "../Style/TodoElement.css";
import TodoEditModal from "./TodoEditModal.js"
import TodoCountDown from "./TodoCountDown.js"

const TodoElement = ({
  id,
  name,
  isChecked,
  deleteTodoDummy,
  todoList,
  setTodoList,
  handleCheckChange,
  isAlert,
  deadLine,
  checkDeadLine,
  openEditModalHandler,
  isEditOpen,
  isEditOpen2,
  content
}) => {

  const clickAlarm = (id) => {
    setTodoList([...todoList.map(el => {
      if (el.id === id) {
        el.isAlert = !isAlert
      }
      return el
    })]);
  }

  const clickEdit = (id) => {
    openEditModalHandler();
    setTodoList([...todoList.map(el => {
      if (el.id === id) {
        el.isEditOpen2 = true
      }
      return el
    })]);
  }

  return (
    <div className="todoElement">
      {/* <label for="cbx" className="label-cbx">
        <input id="cbx" type="checkbox" className="invisible" onChange={(e) => handleCheckChange(e.target.checked, id)}
          checked={isChecked}/>
        <div className="checkbox" onChange={(e) => handleCheckChange(e.target.checked, id)}
          checked={isChecked}>
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
            <polyline points="4 11 8 15 16 6"></polyline>
          </svg>
        </div>
      </label> */}
      <div className="todo__name">
        <input
          type="checkbox"
          onChange={(e) => handleCheckChange(e.target.checked, id)}
          checked={isChecked}
          className="todo__check"
        />
        <span>{name}</span>
      </div>
      {!isChecked ? (checkDeadLine ? (isAlert ? (<><span className="todo__countdown">{<TodoCountDown deadLine={deadLine}/>}</span><span><i onClick={() => clickAlarm(id)}className="fas fa-bell"></i></span></>) : <><span>{<TodoCountDown deadLine={deadLine}/>}</span><span><i onClick={() => clickAlarm(id)} className="far fa-bell-slash"></i></span></>) : null) : null}
      {!isChecked ? <span>{<i onClick={() => clickEdit(id)} className="fas fa-edit"></i>}</span> : null }
      {isEditOpen2 ? <TodoEditModal deadLine={deadLine} checkDeadLine={checkDeadLine} content={content} openEditModalHandler={openEditModalHandler} isEditOpen={isEditOpen} todoList={todoList} setTodoList={setTodoList} id={id} name={name} /> : null}
      <div className="todo__delete" onClick={deleteTodoDummy}>
        <i className="far fa-trash-alt"></i>
      </div>
    </div>
  );
}

export default TodoElement;
