import { useTask } from '../../context/TaskContext'
import { TaskItem } from '../TaskItem'
import styles from './TaskList.module.scss'

export function TaskList() {
  const { tasks } = useTask()

  const createdTasks = tasks.length
  const doneTasks = tasks.filter(task => task.done).length

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <span className={styles.createdLists}>Tarefas criadas</span>
          <span className={styles.badge}>{createdTasks}</span>
        </div>

        <div>
          <span className={styles.doneLists}>Concluídas</span>
          <span className={styles.badge}>{doneTasks} de {createdTasks}</span>
        </div>
      </header>

      <div className={styles.list}>
        {
          tasks.map(({description, done, id}) => (
            <TaskItem
              key={id}
              id={id}
              description={description}
              done={done}
            />
          ))
        }
      </div>
    </div>
  )
}