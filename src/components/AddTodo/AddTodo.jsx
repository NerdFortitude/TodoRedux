import React from 'react'
import { useState } from 'react';
import { addTodo, } from '../../features/Todo/TodoSlice';
import { useDispatch } from 'react-redux';

function AddTodo() {

    const [todoText,setTodoText] = useState("");
    const dispatch = useDispatch();

    function  submitHandler(e){
          e.preventDefault();
          dispatch(addTodo(todoText));
          setTodoText("");

    }

  return (
    <form onSubmit={submitHandler} action="" className='w-full bg-white flex flex-row items-center h-[55px] rounded-full'>

        <input type="text" className='w-[80%] h-[95%] text-xl outline-none p-5 rounded-full' placeholder='enter the todo' value={todoText} onChange={(e)=>(setTodoText(e.target.value))}/>

        <button className='w-[20%] h-[95%] rounded-full bg-orange-500  text-white'>Add</button>
    </form>
  )
}

export default AddTodo