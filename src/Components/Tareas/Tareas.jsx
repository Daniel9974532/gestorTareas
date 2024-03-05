import React, { useState } from 'react'

const Tareas = () => {
  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState('')

  const handleTaskInputChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <div className='container'>
      <h1>Tareas</h1>
      <div className='info' >
        <input className='task'
          type="text"
          placeholder="Ingrese la nueva tarea"
          value={newTask}
          onChange={handleTaskInputChange}
        />
        <button className='add' onClick={addTask}>Agregar tarea</button>
        <hr />
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span >
              {task.text}
            </span>
            <button className='delete' onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tareas