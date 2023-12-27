import {createSlice, nanoid } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{id: 1, text: "Hello world"}],
      },
    reducers: {
        // action.payload contains the value that we provide while dispatching. Check in AddTodo.jsx and Todos.jsx
        // what value we are passing while dispatching. 
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos = [...state.todos, todo];
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
