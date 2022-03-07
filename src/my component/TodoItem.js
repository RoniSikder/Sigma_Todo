import React from 'react'

export const TodoItem = ({todos,todosfun}) => {
  let pos={
    display:"flex",
    flexDirection:"column",
    border:"2px solid Black",
    flexWrap:"wrap",
    borderRadius:"5px"
  }
  return (
    <div className='container' style={pos}>
    <div>{todos.title}</div>
    <div>{todos.desc}</div>
    <button className="btn btn-sm btn-danger" onClick={()=>{todosfun(todos)}}>Delete</button>
    </div>
  )
}
