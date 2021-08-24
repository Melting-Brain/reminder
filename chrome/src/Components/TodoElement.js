import "./TodoElement.css";

const TodoElement = ({
  id,
  name,
  isChecked,
  deleteTodoDummy,
  todoList,
  setTodoList,
  handleCheckChange
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
      <div className="todo__delete" onClick={deleteTodoDummy}>
        X
      </div>
    </div>
  );
}

export default TodoElement;
