import React from 'react'
import Card from "../Card/Card"
import { useSelector } from 'react-redux'


function ListTodo() {
    const todos = useSelector(state=>state.todos);
  return (
     <div className='w-full flex flex-col gap-2'>
            
            {todos.map((todo)=>(<Card todo={todo}/>))}
            
     </div>
  )
}

export default ListTodo