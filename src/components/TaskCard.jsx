
import {useContext} from "react"
import { TaskContext } from "../context/TaskContext"

const TaskCard = ({task}) => {
  const {deleteTask} = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
        <h1 className="textxl font-bold text-orange-500 capitalize"> {task.title}</h1>
        <p className="text-gray-400 text-sm">{task.descripcion}</p>
        <button className="bg-green-500 px-2  py-1 rounded-md mt-4 hover:bg-orange-400" onClick={()=> deleteTask(task.id)}> Delete task</button>
    </div>
  )
}

export default TaskCard