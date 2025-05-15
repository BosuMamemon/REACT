import {useRef, useState} from "react";

function BoardForm({threadSubmit}) {
    let [formData, setForm] = useState({title: "", content: ""});
    let formTitle = useRef();
    let formContent = useRef();

    let formChange = (e) => {
        setForm({...formData, [e.target.name]:  e.target.value});
    }
    let submitForm = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if(!formData.title) {
            alert("올바른 값을 입력하세요.");
            formTitle.current.focus();
            return;
        } else if(!formData.content) {
            alert("올바른 값을 입력하세요.");
            formContent.current.focus();
            return;
        }

        threadSubmit(formData);
        alert("게시글이 등록되었습니다.")
        setForm({title: "", content: ""});
        formTitle.current.focus();
    }
    let onKeyDown = (e) => {
        // if(e.keyCode === 13) submitForm(e);
        if(e.key === "Enter") submitForm(e);
    }

    return (
        <div>
            <h3>Board Form</h3>
            <form onSubmit={submitForm}>
                <input type="text" name="title" value={formData.title} placeholder="제목" onChange={formChange} ref={formTitle}/>
                <br/> <br/>
                <textarea name="content" cols="60" rows="5"
                          onChange={formChange} ref={formContent}
                          value={formData.content} onKeyDown={onKeyDown}></textarea>
                <br/>
                <button type="submit">입력</button>
            </form>
        </div>
    )
}

export default BoardForm;