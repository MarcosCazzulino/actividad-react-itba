
import './MisComponentes.css';
import React, {useState} from 'react';

const tareasLista = [
    {id: 1, title: "Hacer actividades de ITBA", completed: false},
    {id: 2, title: "Ver el partido del Barcelona", completed: false},
    {id: 3, title: "Ir a la facultad", completed: false}
]

function TaskList() {
    const [tareas, setTarea] = useState(tareasLista)

    const completarTarea = (id) => {
        const nuevaTareas = tareas.map((tarea) => (
            tarea.id === id ? {...tarea, completed: !tarea.completed} : tarea
        ))
        setTarea(nuevaTareas)
    }

    return (
        <div className='task-list'>
            <h2>Tareas</h2>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id}>
                        <input type="checkbox" checked={tarea.completed} onChange={() => completarTarea(tarea.id)} className='checkbox'/>
                        <p className={tarea.completed ? 'completed' : ''}>{tarea.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList