import React from 'react'
import deleteIcon from "../../assets/deleteIcon.svg"
import saveIcon from "../../assets/save.svg"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodo,removeTodo,editTodo,toggleTodo } from '../../features/Todo/TodoSlice';

function Card({todo}) {
    
    const [isReadonly,setIsReadonly] = useState(true);

    const dispatch = useDispatch();

    function editHandler(){
        setIsReadonly(prev=>!prev);
    }
    
  return (
    <div className='w-full  flex flex-row justify-between p-5 rounded-full h-[70px] text-xl items-center'>
         
         <input type="checkbox" name="" id=""  className='' onChange={()=>{dispatch(toggleTodo({id:todo.id}))}}/>
         <input type="text" className={`w-[75%] p-1 bg-slate-100  ${todo.complete?"line-through":""} ${(isReadonly)?"border-none outline-none":"border-2 border-black"}`} readOnly={isReadonly} value={todo?.text} onChange={(e)=>{dispatch(editTodo({text:e.target.value,id:todo.id}))}}/>
         <div className='w-[15%] flex flex-row items-center justify-evenly'>
         <button onClick={editHandler}><img src={saveIcon} alt="" /></button>
         <button onClick={()=>{dispatch(removeTodo(todo.id))}}><img src={deleteIcon} alt="" width={21}/></button>
         </div>
             
    </div>
  )
}

export default Card