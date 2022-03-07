import './App.css';
import Header from './my component/header';
// import { Todos } from './my component/todos';
import Footer from './my component/footer';
import { useEffect, useState } from 'react';
// import { Addtodo } from './my component/Addtodo';
import { About } from './my component/About'
import { 
  BrowserRouter,
  Route,
  Routes,
 } from 'react-router-dom';
import { TodoComp } from './my component/TodoComp';

function App() {

  let initTodo;
  if(localStorage.getItem("fodo")===null){
    initTodo=[]
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("fodo"));
  }

  const todosfun=(todo)=>{
    todofun(fodo.filter((e)=>{
      return(e!==todo)
    }))
    localStorage.setItem("fodo",JSON.stringify(fodo));
  }
  const add=(title,desc)=>{
    console.log(title,desc);
    const added={
      title:title,
      desc:desc
    }
    todofun([...fodo,added])
    localStorage.setItem("fodo",JSON.stringify(fodo));
  }
  let [fodo,todofun] = useState(initTodo)
  useEffect(()=>{
    localStorage.setItem("fodo",JSON.stringify(fodo));
  },[fodo])
  return (
    <BrowserRouter>
    <div>
      <Header title="React List" searchbar={false}/>
    <Routes>
        <Route path='/' element={<TodoComp add={add} fodo={fodo} todosfun={todosfun}/>}>
        </Route>
        <Route path="/about" element={<About/>}>
        </Route>
    </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
};

export default App;
