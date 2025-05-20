import "../css/TodoList.css";
import TodoItem from "./TodoItem.jsx";

function TodoList({todo, onUpdate, onDelete}) {
    return (
        <div className="TodoList">
            <div className="list_wrapper">
                {todo.map(item => (
                    <TodoItem key={item.id} item={item} onUpdate={onUpdate} onDelete={onDelete}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList;