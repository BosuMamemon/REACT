import "../css/TodoEditor.css"
import useTodoStore from "../store/useTodoStore.jsx";
import {useRef, useState} from "react";

const TodoEditor = () => {
    let addTodo = useTodoStore(state => state.addTodo)
    let [content, setContent] = useState('');
    let inputRef = useRef();
    let idRef = useRef(3);
    let onChangeContent = (e) => {
        setContent(e.target.value);
    }
    let onSubmit = () => {
        if(!content) {
            inputRef.current.focus();
            return;
        }
        let newItem = {
            id: idRef.current++,
            isDone: false,
            content,
            createdDate: new Date().getTime()
        };
        addTodo(newItem)
        setContent('');
    }
    let onKeyDown = (e) => {
        if(e.key === 'Enter') onSubmit();
    }

    return (
        <div className={'TodoEditor'}>
            <h4>새로운 Todo 작성하기</h4>
            <div className={'editor_wrapper'}>
                <input placeholder={'새로운 Todo...'} ref={inputRef} value={content}
                       onChange={onChangeContent} onKeyDown={onKeyDown}/>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor;