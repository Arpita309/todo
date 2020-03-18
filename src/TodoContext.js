import React, {createContext, useState} from 'react';
export const TodoContext = createContext();
export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([
      {
        "id": Date.now(),
        "value": "learn react",
        "done": false
      },
      {
        "id": Date.now() + 1,
        "value": "Complete site deployment",
        "done": false  
      }
    ]);
  
    return (
      <TodoContext.Provider value={[todos, setTodos]}>
        {props.children}
      </TodoContext.Provider>
    )
  }