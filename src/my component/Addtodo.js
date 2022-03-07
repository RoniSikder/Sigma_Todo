import React, { useState } from 'react'

export const Addtodo = (props) => {
  let pos={
    position:"fixed",
    top:"60px",
    width:"100%"
  }
    let [title,setTitle]=useState("");
    let [desc,setDesc]=useState("");
    const submit=(e)=>{
      e.preventDefault();
      if(!title||!desc){
        alert("fuck off");
      }
      else{
        props.addTodos(title,desc);
      }
      setTitle("");
      setDesc("");
    }
  return (
    <form onSubmit={submit} style={pos}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
