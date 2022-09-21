import clipboardIcon from '../../assets/clipboard.png';
import { TaskModel } from '../../models';

import { Task } from '..';
import styles from './styles.module.css';

interface TaskListProps {
  taskList: TaskModel[];
  deleteTask: (taskId: string) => void;
}

export function TaskList({ taskList, deleteTask }: TaskListProps) {  
  const amountOfTasks = taskList.length;
  const amountOfCompletedTasks = taskList.filter(task => task.isCompleted).length;

  return (
    <div className={styles.taskList}>
      <header className={styles.taskListData}>
        <div>
          <h2 className={styles.createdTasks}>Tarefas criadas</h2>
          <span>{amountOfTasks}</span>
        </div>
        <div>
          <h2 className={styles.completedTasks}>Concluídas</h2>
          <span>{amountOfTasks === 0 ? amountOfTasks : `${amountOfCompletedTasks} de ${amountOfTasks}`}</span>
        </div>
      </header>
      {
        taskList.length > 0 ? (
          <ul className={styles.tasks}>
            {
              taskList.map(task => (
                <li key={task.id}>
                  <Task
                    taskData={task}
                    onDeleteTask={deleteTask}
                  />
                </li>
              ))
            }
          </ul>
        ) : (
          <div className={styles.emptyTasks}>
            <img src={clipboardIcon} alt="Ícone de área de transferência" />
            <p>
              <span>Você ainda não tem tarefas cadastradas</span>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )
      }
    </div>
  )
}