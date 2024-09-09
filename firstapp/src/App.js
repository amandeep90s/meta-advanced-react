import React, { useState } from 'react';
import './index.css';

const ToDo = (props) => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input type='text' />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

const App = () => {
  const [todos, setTodos] = useState([
    { id: 'todo1', createdAt: '18:00' },
    { id: 'todo2', createdAt: '20:30' },
  ]);

  const reverseOrder = () => {
    // Reverse is a mutative operation, so we need to create a new array first.
    setTodos([...todos].reverse());
  };

  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>

      <table>
        <tbody>
          {todos.map((todo) => (
            <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
