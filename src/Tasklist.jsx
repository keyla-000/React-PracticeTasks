import TaskCard from "./components/TaskCard";
import {useContext} from "react"
import  { TaskContext } from './context/TaskContext'


function Tasklist ()  {
const {tasks} = useContext(TaskContext);

if (tasks.length == 0){
    return <h1 className="text-indigo-500 text-4xl font-bold">NO HAY TAREAS AUN</h1>
}

 return (
    <div className="grid grid-cols-4 gap-2">
        {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
        ))}
</div>
);
}



export default Tasklist