import React, { useState, useContext } from 'react';
import TodoContext from '../contexts/TodoContext';

export default function TodoInput() {
  const [newTodo, setNewTodo] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleChange = ({ target: { value } }) => {
    setNewTodo(value);
  };

  const handleClick = () => {
    addTodo(newTodo);
  };

  return (
    <div>
      <label htmlFor="addTodo">
        Add a To Do:
        <input
          type="text"
          id="addTodo"
          value={newTodo}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={handleClick}>
        Add To Do
      </button>
    </div>
  );
}
