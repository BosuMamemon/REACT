import "../css/TodoList.css"
import useTodoStore from "../store/useTodoStore.jsx";

const TodoList = () => {
    const todos = useTodoStore(state => state.todos);
    console.log(todos);

    return (
        <div></div>
    )
}

export default TodoList;