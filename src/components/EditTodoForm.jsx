import React, { useState } from 'react'

export default function EditTodoForm({ editTask, task }) {

  const [value, setValue] = useState(task.task)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editTask(value, task.id)
    setValue('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' placeholder='Update Task' value={value} onChange={handleChange} />
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}