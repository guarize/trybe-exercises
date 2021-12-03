import React from 'react';
import ReactDOM from 'react-dom';
import TodoProvider from './contexts/TodoProvider';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
