import "../css/TodoItem.css";
import useTodoStore from "../store/useTodoStore.jsx";

function TodoItem({todo}) {
    let onDelete = useTodoStore(state => state.removeTodo)
    let onUpdate = useTodoStore(state => state.updateTodo)

    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" value={todo.isDone} onChange={()=>onUpdate(todo.id)}/>
            </div>
            <div>{todo.id}</div>
            <div className="title_col">{todo.content}</div>
            <div className="date_col">{new Date(todo.createdDate).toLocaleDateString()}</div>
            <div className="btn_col">
                <button onClick={()=>onDelete(todo)}>삭제</button>
            </div>
        </div>
    )
}

export default TodoItem;