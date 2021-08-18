import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import {Itodo} from './Interfaces'

const App = () =>   {

  const [todos, setTodos] = useState<Itodo[]>([
    { title: "walk dog", id: 1 },
    { title: "sleep later", id: 2 },
  ]);


  return (
    <div className="App">
      <AddTodo />
    { todos.length > 0 ? <Todos  /> : <p> nothing to do </p> }
    </div>
  );
}

export default App;
