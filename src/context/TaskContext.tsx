import { createContext, useState, useCallback, useContext } from 'react'

interface TaskContextProviderProps {
  children: React.ReactNode
}

type Task = {
  id: string
  done: boolean
  description: string
}

type TaskContextData = {
  tasks: Task[]
  addTask: (task: Task) => void
  removeTask: (id: string) => void
  toggleDoneTask: (id: string) => void
}

const TaskContext = createContext({} as TaskContextData)

export function TaskContextProvider({ children }: TaskContextProviderProps) {

  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = useCallback((task: Task) => {
    setTasks((tasks) => [...tasks, task])
  }, [])

  const removeTask = useCallback((id: string) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }, [])

  const toggleDoneTask = useCallback((id: string) => {
    // const taskIndex = tasks.findIndex(task => task.id === id)

    // if (taskIndex < 0) return

    // tasks[taskIndex] = {
    //   ...tasks[taskIndex],
    //   done: !tasks[taskIndex].done
    // }

    // setTasks([...tasks])

    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }
      return task
    })

    setTasks(newTasks)
  }, [tasks])

  return (
    <TaskContext.Provider value={{
      tasks,
      addTask,
      removeTask,
      toggleDoneTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTask() {
  const context = useContext(TaskContext)
  return context
}