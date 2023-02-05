import React, {useState, useEffect} from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { iTodo } from '../interfaces';
declare var confirm:(question:string) => boolean;
export const ToDospage: React.FC =()=>{
    const [todos,setTodos] = useState<iTodo[]> ([])

    useEffect(()=>{
      const saved = JSON.parse(localStorage.getItem('todos')||'[]') as iTodo[]
      setTodos(saved)
    },[])
    
    useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
    
     const addHandler=(title:string)=>{
      const newTodo:iTodo ={
        title: title,
        id: Date.now(),
        completed: false
      }
      setTodos(prev=>[newTodo,...prev])
     }
     
    const toggleHandler = (id:number)=>{
    setTodos(prev=>prev.map(todo=>{
     if(todo.id===id){
      todo.completed=!todo.completed
     }
      return todo
    }))
    }
    
    const removeHandler = (id:number)=>{
     const shoudRemove = confirm('Are you sure you want to remove the element?')
     if (shoudRemove){
      setTodos(prev=>prev.filter(todo=>todo.id!==id))
     }
    }
   return( 
 <React.Fragment>
      <TodoForm onAdd={addHandler} />
<TodoList 
todos={todos} 
onToggle={toggleHandler} 
onRemove={removeHandler}
/>
 </React.Fragment>
   )
}