import { FormEvent, useState } from 'react'
import addSVG from '../../assets/add.svg'
import { useTask } from '../../context/TaskContext'
import { v4 } from 'uuid'
import styles from './TaskForm.module.scss'

export function TaskForm() {
  const { addTask } = useTask()
  const [description, setDescription] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const task = {
      id: v4(),
      description,
      done: false
    }

    addTask(task)
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button className={styles.button} type="submit">
        Criar
        <img src={addSVG} alt="adicionar" />
      </button>

    </form>
  )
}