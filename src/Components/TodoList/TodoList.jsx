import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import "./TodoList.scss"
function Todolist() {
    const data=[ ]
    const [todos, setTodos]=useState(data)
    const hendelete = (id)=> {
        console.log(id);
        setTodos(state=>{
            const newState=state.filter(item=>item.id!=id)
            return newState
        })
    }

    const todoSubmit=(event)=>{
        event.preventDefault();
        let todoInputIsmi=document.querySelector("#todo-ismi");
        let todoInputFamilya=document.querySelector("#todo-familya");
        let todoInputLovazim=document.querySelector("#todo-lovazim");
        let todoInputContak=document.querySelector("#todo-contak");
        let xato=document.querySelector("#xato")
        const lastel=todos[todos.length-1] || {id:0};
        if(todoInputIsmi.value){
            const mak={
                id:lastel?.id+1,
                ismi:todoInputIsmi.value,
                familya:todoInputFamilya.value,
                lavozimi:todoInputLovazim.value,
                contak:todoInputContak.value,
                isCompleted:false
            }
            setTodos(state=>[...state,mak])
        xato.textContent=null
            
        }else{
            xato.textContent="iltimos yozing "
        }
        todoInputIsmi.value=null
        todoInputFamilya.value=null
        todoInputLovazim.value=null
        todoInputContak.value=null
    }
    return <div className='TodList'>
        <h2>Toda List App <button className='input' onClick={()=> {setTodos([])}} >Barcha malumotlarni tozala</button> </h2>
        <form id='form-el' onSubmit={todoSubmit}>
            <input className='input' type="text" name="" id="todo-ismi" placeholder='Ismingizni kiriting...' />
            <input className='input' type="text" name="" id="todo-familya" placeholder='Familyangizni kiriting...' />
            <input className='input' type="text" name="" id="todo-lovazim" placeholder='Lavozimizni kiriting...' />
            <input className='input' type="tel" name="" id="todo-contak" placeholder='Contakiz kiriting(+998...)' />
            <button className='input'>Add</button>
        </form>
        
        {
            todos.length<=0? "Bo'shlig'ni to'ldirib chiqing":todos.map((element,index)=>{
                return <TodoItem key={index} onDelete={hendelete} todo={element} />
            })
        }
        <div className='error' id="xato"></div>
    </div>
}
export default Todolist;
