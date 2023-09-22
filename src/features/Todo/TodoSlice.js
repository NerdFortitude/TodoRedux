import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"Hello World",complete:false}]
}


const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
            addTodo:(state,action) => {
                const todo = {
                    id:nanoid(),
                    text:action.payload,
                    complete:false
                };
                state.todos.push(todo);
            },
            removeTodo:(state,action) =>{
                state.todos = state.todos.filter((todo)=>(todo.id!==action.payload));
            },
            editTodo:(state,action) =>{
                state.todos = state.todos.map((todo)=>(todo.id===action.payload.id)?{...todo,text:action.payload.text}:todo);
            },
            toggleTodo:(state,action) =>{
                state.todos = state.todos.map((todo)=>(todo.id === action.payload.id)?{...todo,complete:!(todo.complete)}:todo);
            }

    }
})

export const {addTodo,removeTodo,editTodo,toggleTodo} = todoSlice.actions;

export default todoSlice.reducer;