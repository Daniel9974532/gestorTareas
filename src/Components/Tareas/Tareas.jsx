import React, { useState } from 'react'



  return (
    <div>
      <h1>Tareas</h1>
      <div>
        <input
          type="text"
          placeholder="Ingrese la nueva tarea"
          value={newTask}
          onChange={handleTaskInputChange}
        />
        <button onClick={addTask}>Agregar tarea</button>
        <hr />
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
           
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )


export default Tareas