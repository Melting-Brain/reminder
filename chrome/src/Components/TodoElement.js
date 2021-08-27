import "./TodoElement.css";


const TodoElement = ({
  id,
  name,
  isChecked,
  deleteTodoDummy,
  todoList,
  setTodoList,
  handleCheckChange,
  isAlert,
  deadline
}) => {
  return (
    <div className="todoElement">
      <input 
        type="checkbox"
        value={id}
        onChange={(e) => handleCheckChange(e.target.checked, id)}
        checked={isChecked}
        />
      <span>{name}</span>
      { deadline ? ( isAlert ? (<><i className="fas fa-bell"></i><span>{<i className="fas fa-stopwatch"></i>}</span></>) : <><i className="far fa-bell-slash"></i><span>{<i className="fas fa-stopwatch"></i>}</span></> ) : null}
      <span>{<i className="fas fa-edit"></i>}</span>
      <div className="todo__delete" onClick={deleteTodoDummy}>
        X
      </div>
    </div>
  );
}

export default TodoElement;
