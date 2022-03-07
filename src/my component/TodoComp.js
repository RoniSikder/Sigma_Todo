import React from 'react'
import { Addtodo } from './Addtodo'
import { Todos } from './todos'
export const TodoComp = ({add,fodo,todosfun}) => {
  return (
    <>
        <Addtodo addTodos={add}/>
        <Todos todo={fodo} toda={todosfun}/>
    </>
  )
}
