import React from 'react';

export default function Todo(props) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <p className={`title ${props.todo.done ? "has-text-grey-light" : ""}`}>{props.todo.value}</p>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item buttons">
              <button onClick={props.toggleDone.bind(this, props.todo)} className={`button has-text-weight-bold ${props.todo.done ? "is-warning" : "is-primary"}`}>{props.todo.done ? "Undo" : "Done"}</button>
              <button onClick={props.deleteTodo.bind(this, props.todo)} className="button is-danger has-text-weight-bold">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}