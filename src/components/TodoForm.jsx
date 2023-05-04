import React, { useState } from 'react'

export default function TodoForm({ addTodo }) {

  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' placeholder='What is the task today?' value={value} onChange={handleChange} />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}