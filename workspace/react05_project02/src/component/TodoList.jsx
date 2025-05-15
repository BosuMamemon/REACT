import "../css/TodoList.css";
import TodoItem from "./TodoItem.jsx";
import {useEffect, useState} from "react";

function TodoList({todos, onDelete, onUpdate}) {
    let [search, setSearch] = useState("");
    let [searchTodos, setSearchTodos] = useState(todos);

    let onChangeSet = (e) => {setSearch(e.target.value)}
    // 이펙트 사용 안하는 방법
    // let getSearchResult = () => {
    //     return search === "" ? todos : todos.filter(todo => todo.content.toLowerCase().includes(search.toLowerCase()))
    // }

    useEffect(() => {
        setSearchTodos(
            search === "" ? todos : todos.filter(todo => todo.content.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search]);

    return (
        <div className='TodoList'>
            <h4>Todo List</h4>
            <input className="searchbar" value={search} placeholder="검색어를 입력하세요." onChange={onChangeSet}/>
            <div className="list_wrapper">
                {searchTodos.map(todo => (
                    <TodoItem key={todo.id} {...todo} onDelete={onDelete} onUpdate={onUpdate}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList;