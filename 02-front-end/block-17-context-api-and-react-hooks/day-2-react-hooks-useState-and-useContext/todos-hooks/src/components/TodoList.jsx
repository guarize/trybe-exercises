import React, { useContext } from 'react';
import TodoContext from '../contexts/TodoContext';

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  console.log(todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
}
