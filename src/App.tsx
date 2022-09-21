import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskModel } from './models';

import { AddTask, Header, TaskList } from "./components";
import styles from './app.module.css';

export function App() {
  const [taskList, setTaskList] = useState<TaskModel[]>([
    {
      id: uuidv4(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue metus auctor nibh hendrerit tincidunt.',
      isCompleted: false,
    },
    {
      id: uuidv4(),
      text: 'Vestibulum id ante molestie est pellentesque congue. Maecenas semper velit at ipsum vulputate viverra.',
      isCompleted: false,
    },
    {
      id: uuidv4(),
      text: 'Aliquam nec libero ultricies, tincidunt orci id, vehicula risus. Curabitur id facilisis ante.',
      isCompleted: false,
    },
    {
      id: uuidv4(),
      text: 'Cras bibendum arcu eu tellus porttitor, in ornare quam gravida. Vivamus ac tortor vel tortor mollis commodo.',
      isCompleted: true,
    },
    {
      id: uuidv4(),
      text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: true,
    }
  ]);

  function deleteTask(taskId: string) {
    setTaskList(taskList.filter(task => task.id !== taskId));
  }

  function addTask(taskText: string) {
    setTaskList([
      {
        id: uuidv4(),
        text: taskText,
        isCompleted: false,
      },
      ...taskList,
    ]);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask
          onCreateTask={addTask}
        />
        <TaskList
          taskList={taskList}
          deleteTask={deleteTask}  
        />
      </div>
    </>
  )
}
