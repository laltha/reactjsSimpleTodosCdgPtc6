// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const userDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-items-container">
      <p>{title}</p>
      <button type="button" className="button" onClick={userDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
