import React from 'react'
import AddTodo from '../AddTodo/AddTodo'
import ListTodo from '../ListTodo/ListTodo'

function TodoContainer() {
  return (
    <div className='bg-slate-100 md:w-[550px] w-[80%] h-fit p-5 flex flex-col gap-4 mt-6'>
          <div className='mb-1'>
               <h1 className='text-black text-2xl'>To-Do List</h1>
          </div>

          <div className='w-full'>
               <AddTodo/>
          </div>

          <div className='w-full'>
              <ListTodo/>
          </div>
    </div>
  )
}

export default TodoContainer