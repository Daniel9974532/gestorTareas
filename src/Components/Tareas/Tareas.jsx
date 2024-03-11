import React, { useState } from 'react';

const Tareas = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDesc, setNewDesc ] = useState('');
  const [filter, setFilter] = useState('all');

  const handleTaskInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleTaskDesc = (event) => {
    setNewDesc(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, description:newDesc, completed: false }]);
      setNewTask('');
      setNewDesc('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };


  const filteredTasks = () => {
    switch (filter) {
      case 'pending':
        return tasks.filter(task => !task.completed);
      case 'archived':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div className='container'>
       <div>
        <button  onClick={() => setFilter('pending')}>Ver tareas pendientes</button>
        <button  onClick={() => setFilter('archived')}>Ver tareas archivadas</button>
        <button  onClick={() => setFilter('all')}>Ver todas las tareas</button>
      </div>
      <h1>Tareas</h1>
      <div className='info'>
        <input className='task'
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={handleTaskInputChange}
        />
        <textarea  id="desc" cols="30" rows="10" value={newDesc} onChange={handleTaskDesc} placeholder='Descripcion'> </textarea>
        <button className='add' onClick={addTask}>Crear tarea</button>
        
      </div>
      <hr />
      <ul>
        {filteredTasks().map(task => (
          <li key={task.id}>
                     
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
           <p>{task.description}</p>


            <button onClick={() => toggleTaskCompletion(task.id)} >
              {task.completed ? 'no completa' : ' Archivar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tareas;