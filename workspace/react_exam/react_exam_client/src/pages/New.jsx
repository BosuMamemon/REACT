import Button from "../components/Button.jsx";
import Header from "../components/Header.jsx";
import Editor from "../components/Editor.jsx";
import {useNavigate} from "react-router-dom";
import useDiaryStore from "../store/useDiaryStore.jsx";
import {useRef} from "react";
import axios from "axios";

const New = () => {
    let diaries = useDiaryStore(state => state.diaries);
    let idRef = useRef(diaries.length);
    let navigate = useNavigate();

    let {createDiary} = useDiaryStore(state => state.actions);
    let onSubmit = data => {
        if(confirm("이 일기를 저장할까요?")) {
            const fetch = async () => {
                try {
                    const response = await axios.post('/api/diary/new', JSON.parse(JSON.stringify(data)));
                    console.log("api 상태:", response.data);
                } catch (error) {
                    console.log("error:", error);
                }
            }
            fetch();
            createDiary({...data, id: idRef.current++, date: new Date(data.date).getTime()})
            navigate('/', {replace: true});
        }
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