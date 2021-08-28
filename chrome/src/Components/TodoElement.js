import "./TodoElement.css";
import TodoEditModal from "./TodoEditModal.js"

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
      <input
        type="checkbox"
        onChange={(e) => handleCheckChange(e.target.checked, id)}
        checked={isChecked}
      />
      <span>{name}</span>
      {!isChecked ? (checkDeadLine ? (isAlert ? (<><i className="fas fa-bell"></i><span>{<i className="fas fa-stopwatch"></i>}</span></>) : <><i className="far fa-bell-slash"></i><span>{<i className="fas fa-stopwatch"></i>}</span></>) : null) : null}
      {!isChecked ? <span>{<i onClick={() => clickEdit(id)} className="fas fa-edit"></i>}</span> : null }
      {isEditOpen2 ? <TodoEditModal deadLine={deadLine} checkDeadLine={checkDeadLine} content={content} openEditModalHandler={openEditModalHandler} isEditOpen={isEditOpen} todoList={todoList} setTodoList={setTodoList} id={id} name={name} /> : null}
      <div className="todo__delete" onClick={deleteTodoDummy}>
        X
      </div>
    </div >
  );
}

export default TodoElement;
