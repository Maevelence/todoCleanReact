import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, toggleTodo } from "./todoSlice"

export function TodoList() {
  const todos = useSelector(state => state.todos.values)
  const dispatch = useDispatch()

  return (
    <ul className="list">
      {todos.length === 0 && "Вы свободны"}
      {todos.map(todo=> 
      <li key={todo.id}>
      <label>
        <input
          type="checkbox"
          value={(e) => e.target.checked = todo.completed}
          onChange={(e) => {
            dispatch(toggleTodo({...todo, completed: e.target.checked}))
          }}
          id={todo.id}
        />
        {todo.title}
      </label>
      <button onClick={() => dispatch(deleteTodo(todo))} className="btn btn-danger">
        Удалить
      </button>
    </li>
      )}
      </ul>

  )
}
