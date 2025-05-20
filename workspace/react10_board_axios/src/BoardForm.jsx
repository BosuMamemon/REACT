import {useState} from "react";

export  default function BoardForm({insertBoard}){
    const [formData,setFormData] = useState({
        title: "",
        content: "",
    })
    //입력하면 내용이 바뀌는 부분
    const formChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value}
        )
    }
    //추가하기
    const submitBoard = (e) => {
        e.preventDefault();
        insertBoard(formData)
    }
    return (
        <div>
            <h3>BoardForm</h3>
            <input type={'text'} placeholder={'제목'}
                   name = 'title' onChange={formChange}
                   value={formData.title} /><br/><br/>
            <textarea name={'content'}
                      cols={60} rows={5}
                      onChange={formChange}
                      value={formData.content}></textarea><br/>
            <button onClick={submitBoard}> 입력</button>
        </div>
    )
}