import { createSlice } from "@reduxjs/toolkit"



const todoSlice = createSlice({
    name:'todos',
    initialState: { values: []},
    reducers: {
        addTodo: (state,action) => {
            state.values.push({id: state.values.length, title: action.payload, completed: false})
        },
        deleteTodo: (state,action) => {
            state.values = state.values.filter(task => 
               task.id !== action.payload.id)
        },
        toggleTodo: (state,action) => {
           const toggle =  state.values.find(todo => todo.id === action.payload.id)
           toggle.completed = !toggle.completed
        }
    }
})
export const {addTodo, deleteTodo, toggleTodo} = todoSlice.actions
export default todoSlice.reducer 