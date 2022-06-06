import { TaskForm } from './components/TaskForm'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { TaskContextProvider } from './context/TaskContext'

export function App() {

  return (
    <TaskContextProvider>
      <Header />
      <TaskForm />
      <TaskList />
    </TaskContextProvider>
  )
}