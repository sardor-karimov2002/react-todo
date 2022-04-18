import "./TodoItem.scss"
function TodoItem({todo,onDelete}){
    return <div className="TodoItem">
        <h2>{todo.id} | {todo.ismi} {todo.familya} {todo.lavozimi} {todo.contak} </h2>
        <button className="del" onClick={()=>onDelete(todo.id)}>Delet</button>
    </div>
}
export default TodoItem;