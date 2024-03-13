import React, { useState } from 'react';
import './App.css';

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  return <Todos todos={todos} />;
};

export default App;
