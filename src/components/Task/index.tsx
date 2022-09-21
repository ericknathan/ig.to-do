import { Trash, Check } from 'phosphor-react';
import { useState } from 'react';
import { TaskModel } from '../../models';

import styles from './styles.module.css';

interface TaskProps {
  taskData: TaskModel,
  onDeleteTask: (taskId: string) => void;
}

export function Task({ taskData, onDeleteTask }: TaskProps) {
  const [taskIsCompleted, setTaskIsCompleted] = useState(taskData.isCompleted);

  function handleChangeCheckbox() {
    setTaskIsCompleted(!taskIsCompleted);
  }

  function handleDeleteTask() {
    onDeleteTask(taskData.id);
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" checked={taskIsCompleted} />
      <button className={styles.customCheckbox} onClick={handleChangeCheckbox}>
        <Check weight="bold" size={12} />
      </button>

      <p onClick={handleChangeCheckbox}>{taskData.text}</p>
      <button
        className={styles.deleteTask}
        type="button"
        title="Deletar task"
        onClick={handleDeleteTask}
      >
        <Trash size={18} />
      </button>
    </div>
  )
}