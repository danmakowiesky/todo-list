import trashSVG from '../../assets/trash.svg'
import { useTask } from '../../context/TaskContext'
import styles from './TaskItem.module.scss'

interface TaskItemProps {
  id: string
  done: boolean
  description: string
}

export function TaskItem({ id, done, description }: TaskItemProps) {
  const { removeTask, toggleDoneTask } = useTask()

  function handleDeleteTask(id: string) {
    removeTask(id)
  }

  return (
    <div className={styles.container}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" onChange={() => toggleDoneTask(id)} checked={done} />
        <span className={styles.checkmark}></span>
      </label>
      <p>
        {description}
      </p>
      <button
        className={styles.deleteButton}
        onClick={() => handleDeleteTask(id)}
      >
        <img
          src={trashSVG}
          alt="excluir"
        />
      </button>
    </div>
  )
}