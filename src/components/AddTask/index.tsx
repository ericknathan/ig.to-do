import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './styles.module.css';

interface AddTaskProps {
  onCreateTask: (taskText: string) => void;
}

export function AddTask({ onCreateTask }: AddTaskProps) {
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    onCreateTask(newTaskText);
    setNewTaskText('');
  }

  function handleChangeNewComment(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('A tarefa não pode ser vazia!');
  }

  return (
    <form className={styles.addTask} onSubmit={handleCreateTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleChangeNewComment}
        required
        onInvalid={handleNewCommentInvalid}
      />
      <button type="submit">
        Criar
        <PlusCircle size={18} />
      </button>
    </form>
  )
}