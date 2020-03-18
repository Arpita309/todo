import React, {useContext} from 'react'

import { TodoContext } from "../TodoContext";

import Todo from "./todo";

export default function TodoList() {
  const [todos, setTodos] = useContext(TodoContext);

  // toggleDone
  const toggleDone = (todo) => {
    todos.map(_todo => _todo === todo ? _todo.done = !todo.done : todo)
    setTodos([...todos])
  } 
  // delete
  const deleteTodo = (todo) => {
    const _todos = todos.filter(_todo => _todo !== todo)
    setTodos(_todos)
  }

  return (
    <div>
      <div className="hero is-info">
        <div className="hero-body has-text-centered">
          <p className="title is-1">{todos.length} Todos</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo}/>
          ))}
        </div>
      </section>
    </div>
  )
}