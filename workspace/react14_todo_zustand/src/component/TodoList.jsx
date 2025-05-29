import "../css/TodoList.css"
import useTodoStore from "../store/useTodoStore.jsx";
import TodoItem from "./TodoItem.jsx";

const TodoList = () => {
    const todos = useTodoStore(state => state.todos);
    console.log(todos);

    return (
        <div className={'TodoList'}>
            <h4>Todo List</h4>
            {todos.map(it => (
                <TodoItem key={it.id} todo={it}/>
            ))}
        </div>
    )
}

export default TodoList;