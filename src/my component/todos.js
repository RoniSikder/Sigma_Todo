import React from 'react'
import { TodoItem } from './TodoItem'
export const Todos = (props) => {
  let pos={
    position:"relative",
    top:"300px"
  }
  let pos1={
    display:"flex",
    overflowY:"auto"
  }
  return (
    <div className='container'style={pos}>
        <h4 className='text-center'>Todo List</h4>
          <div className="containerb" style={pos1}>
            {props.todo.length===0?"No Todos to Display":
            props.todo.map((todos)=>{
              return <TodoItem todos={todos} todosfun={props.toda}/>
            })}
          </div>
    </div>
  );
}
