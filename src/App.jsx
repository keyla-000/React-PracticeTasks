import TaskForm from './components/TaskForm'
import TaskList from './Tasklist'



function App() {

return (
    <main className=' h-screen'>
     <div className='container mx-auto'>
      <TaskForm/>
      <TaskList/>
      </div>
    </main>
  )
}

export default App

