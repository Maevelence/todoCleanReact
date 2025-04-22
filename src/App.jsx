import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoList } from "./TodoList"


export default function App() {

  return (
    <>
      <NewTodoForm />
      <h1 className="header">Список дел</h1>
      <TodoList />
    </>
  )
}
