import "./TodoElement.css";

const TodoElement = ({
  name,
  isChecked,
  deleteTodoDummy
}) => {
  return (
    <div className="todoElement">
      <input type="checkbox"/>
      <span>{name}</span>
      <div className="todo__delete" onClick={deleteTodoDummy}>
        X
      </div>
    </div>
  )
}

export default TodoElement