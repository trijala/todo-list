import React, { useState } from 'react';
import './App.css';
import {Todoform} from './Components/todoform';
import {Todolist} from './Components/todolist';


function App() {

  const [todos,settodos] = useState<Array<todo>>([]);
  const togglecomplete : togglecomplete = selectedtodo => {
    const updatetodo = todos.map(todo => {
      if(todo === selectedtodo){
        return {...todo, complete : !todo.complete};
      }
      return todo;
    });
    settodos(updatetodo);
  }
  const addprop: Addprop = newtodo => {
    if (newtodo !== ""){
      settodos([...todos, {text : newtodo, complete: false}]);
    };

  }


  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todoform addprop={addprop}/>
      <Todolist todos={todos} togglecomplete={togglecomplete}/>
    </div>
  );
}

export default App;
