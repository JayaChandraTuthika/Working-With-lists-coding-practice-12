import './index.css'

const TodoItem = props => {
  const {todoDetails, event} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    event(id)
  }

  return (
    <li className="todo-item">
      <p className="todo-text">{title}</p>
      <button className="delete-btn" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
