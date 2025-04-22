import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "./todoSlice"


export function NewTodoForm() {
  const [newItem, setNewItem] = useState("")
  const dispatch = useDispatch()
  
  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return
    
    dispatch(addTodo(newItem))
    
    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Я займусь</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Добавить</button>
    </form>
  )
}
