import Button from "../components/Button.jsx";
import Header from "../components/Header.jsx";
import Editor from "../components/Editor.jsx";
import {useNavigate} from "react-router-dom";
import useDiaryStore from "../store/useDiaryStore.jsx";
import {useRef, useState} from "react";
import {getFormattedDate} from "../util.jsx";

const New = () => {
    let diaries = useDiaryStore(state => state.diaries);
    let idRef = useRef(diaries.length);
    let navigate = useNavigate();

    let {createDiary} = useDiaryStore(state => state.actions);
    let onSubmit = data => {
        console.log(data);
        createDiary({...data, id: idRef.current++, date: new Date(data.date).getTime()})
        navigate('/', {replace: true});
        console.log(diaries);
    }

    return (
        <div>
            <Header title={'새 일기 쓰기'}
                    leftChild = {<Button text={'< 뒤로 가기'} onClick={() => navigate(-1)}/>}/>
            <Editor onSubmit={onSubmit}/>
        </div>
    )
}

export default New;