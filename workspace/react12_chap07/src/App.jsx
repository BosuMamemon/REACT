import './css/App.css'
import TestComp from "./component/TestComp.jsx";
import TestComp2 from "./component/TestComp2.jsx";
import Header from "./component/Header.jsx";
import TodoEditor from "./component/TodoEditor.jsx";
import TodoList from "./component/TodoList.jsx";
import {useReducer, useRef} from "react";

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

function reducer(state, action) {
    switch(action.type) {
        case "CREATE":
            return [...state, action.newItem];
        case "DELETE":
            return state.filter(it => it.id !== action.removingId);
        case "UPDATE":
            return state.map(it => it.id === action.updatingId ? {...it, isDone: !it.isDone} : it);
        default:
            return state;
    }
}

function App() {
    let [todo, dispatcher] = useReducer(reducer, mockTodo);
    let idRef = useRef(mockTodo.length);

    let onCreate = (content) => {
        console.log("onCreate: ");
        console.log(content);
        dispatcher({
            type: "CREATE",
            newItem: {
                id: idRef.current,
                content: content,
                isDone: false,
                createdDate: new Date().getTime()
            }
        });
        idRef.current += 1;
    }
    let onUpdate = (id) => {
        dispatcher({
            type: "UPDATE",
            updatingId: id
        })
        console.log(todo);
    }
    let onDelete = (id) => {
        dispatcher({
            type: "DELETE",
            removingId: id
        });
    }

    return (
        <div className="App">
            <h3>useReducer: 컴포넌트에서 상태 변화 코드를 분리</h3>
            <hr/>
            {/*<TestComp/>*/}
            {/*<hr/>*/}
            {/*<TestComp2/>*/}
            <Header/>
            <br/><hr/><br/>
            <TodoEditor onCreate={onCreate}/>
            <br/>
            <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
        </div>
    )
}

export default App;
