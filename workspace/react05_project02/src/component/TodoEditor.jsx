import '../css/TodoEditor.css'
import {useRef, useState} from "react";

function TodoEditor({onCreate}) {
    let [content, setContent] = useState("");
    let inputRef = useRef();

    let onChangeContent = (e) => {
        setContent(e.target.value);
    }
    // 추가 버튼 클릭 함수
    let onSubmit = () => {
        // 내용이 비어있다면 입력 안됨
        if(!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }
    // 내용을 입력하고 엔터키를 누르면 추가가 되도록 하기
    let onKeyDown = (e) => {
        // 엔터 키일때만 실행 (엔터 키의 keyCode는 13임)
        if(e.keyCode === 13) onSubmit();
    }

    return (
        <div className='TodoEditor'>
            <h4>새로운 Todo 작성하기</h4>
            <div className="editor_wrapper">
                <input value={content} placeholder="새로운 Todo..." onChange={onChangeContent}
                       onKeyDown={onKeyDown} ref={inputRef}/>
                <button onClick={onSubmit} >추가</button>
            </div>
        </div>
    )
}

export default TodoEditor;