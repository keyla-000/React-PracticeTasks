import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext"


const TaskForm = () => {
 const [title, setTitle] = useState("")
 const [descripcion, setDescripcion] = useState("")
const {createTask} = useContext(TaskContext)


 const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, descripcion);
    setTitle("");
    setDescripcion("");
}

  return (
       <div className="ma-w-md mx-auto">
         <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
            <h1 className="text-2xl font-bold text-orange-500 mb-3">Crea tu tarea</h1>
            <input className="bg-slate-300 p-3 w-full mb-2 "
            placeholder="Escribe tu tarea"
            
             onChange={(e) => setTitle(e.target.value)}
             value={title}/>
           
           <textarea className="bg-slate-300 p-3 w-full mb-2"
           placeholder="Escribe descripcion de tarea"
           onChange={(e) => setDescripcion(e.target.value)}
           value={descripcion}></textarea>
            <button className="bg-indigo-500 px-3 py-1 text-white ">
                Save
            </button>

    
        </form>
       </div>
  )
}

export default TaskForm