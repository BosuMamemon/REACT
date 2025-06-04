import useDiaryStore from "../store/useDiaryStore.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "../components/Header.jsx";
import Editor from "../components/Editor.jsx";
import Button from "../components/Button.jsx";
import axios from "axios";

const Edit = () => {
    let diaries = useDiaryStore(state => state.diaries);
    let {id} = useParams();
    let [initData, setInitData] = useState({});
    let navigate = useNavigate();

    let {updateDiary, deleteDiary} = useDiaryStore(state => state.actions);
    let onSubmit = data => {
        if(confirm("이대로 수정할까요?")) {
            const fetch = async () => {
                const response = await axios.put(`/api/diary/edit/${id}`, JSON.parse(JSON.stringify(data)));
                console.log("edit api 상태:", response.data);
            }
            fetch();
            updateDiary({...data, id: Number(id), date: new Date(data.date).getTime()});
            navigate("/", {replace: true});
        }
    }
    let onClickDelete = () => {
        if(confirm("이 일기를 삭제할까요?")) {
            const fetch = async () => {
                const response = await axios.delete(`/api/diary/delete/${id}`);
                console.log("delete api 상태:", response.data);
            }
            fetch();
            deleteDiary(id);
            navigate("/", {replace: true});
        }
    }

    useEffect(() => {
        let matchDiary = diaries.find(it => String(it.id) === id);
        if(matchDiary) setInitData(matchDiary);
        else {
            alert("일기가 존재하지 않습니다.");
            navigate("/", {replace: true});
        }
    }, []);

    return (
        <div>
            <Header title={"일기 수정하기"}
                    leftChild={<Button text={"< 뒤로가기"} onClick={() => navigate(-1)}/>}
                    rightChild={<Button text={"삭제"} type={"negative"} onClick={onClickDelete}/>}/>
            <Editor initData={initData} onSubmit={onSubmit}/>
        </div>
    )
}

export default Edit;