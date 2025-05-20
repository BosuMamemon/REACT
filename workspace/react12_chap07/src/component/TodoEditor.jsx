import "../css/TodoEditor.css";
import {useState} from "react";

function TodoEditor({onCreate}) {
    let [content, setContent] = useState("");

    let onSubmit = () => {
        console.log("onSubmit: ");
        console.log(content);
        onCreate(content);
        setContent("");
    }
    let onChange = (e) => {
        setContent(e.target.value);
    }

    return (
        <div className="TodoEditor">
            <div className="editor_wrapper">
                <h4>새로운 Todo 작성하기</h4>
                <input type="text" value={content} placeholder={"새로운 Todo..."} onChange={onChange}/>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor;