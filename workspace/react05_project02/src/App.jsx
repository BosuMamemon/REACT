import "./css/App.css";
import Header from "./component/Header.jsx";
import TodoEditor from "./component/TodoEditor.jsx";
import TodoList from "./component/TodoList.jsx";
import {useRef, useState} from "react";

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래 널기",
        createdDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        createdDate: new Date().getTime(),
    },
];

function App() {
    let [todos, setTodo] = useState(mockTodo);
    let idRef = useRef(3);

    // Todo 추가 함수
    // let {isDone, id, content, createdDate} = todo;
    let onCreate = (content) => {
    //     추가할 내용인 content를 setTodo()를 이용해서 처리
        let newItem = {
            id: idRef.current,
            isDone: false,
            content: content,
            createdDate: new Date().getTime()
        }
        setTodo([...todos, newItem]);
        idRef.current += 1;
    }
    // 삭제 함수: 삭제할 id를 받아와서 그 id의 내용을 보여주지 않으면 됨
    let onDelete = (targetId) => {
        setTodo(todos.filter(todo => todo.id !== targetId));
    }
    // 수정 함수: 수정할 id를 받아와서 해당 체크박스 체크 여부를 변경
    let onUpdate = (targetId) => {
        setTodo(todos.map(todo => todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo))
        console.log(todos);
    }

    return (
        <div className="App">
            <Header/>
            <hr/>
            <TodoEditor onCreate={onCreate}/>
            <TodoList todos={todos} onDelete={onDelete} onUpdate={onUpdate}/>
        </div>
    )
}

export default App;
