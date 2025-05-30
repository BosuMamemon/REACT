import Header from "../components/Header.jsx";
import Viewer from "../components/Viewer.jsx";
import Button from "../components/Button.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useDiaryStore from "../store/useDiaryStore.jsx";
import {getFormattedDate} from "../util.jsx";

const Diary = () => {
    let diaries = useDiaryStore(state => state.diaries);
    let {id} = useParams();
    let [initData, setInitData] = useState();
    let navigate = useNavigate();

    useEffect(() => {
        let matchDiary = diaries.find(it => String(it.id) === id);
        if(matchDiary) setInitData(matchDiary);
        else {
            alert("일기가 존재하지 않습니다.");
            navigate("/", {replace: true});
        }
    }, []);

    if(!initData) return (
        <div>일기를 불러오고 있습니다...</div>
    )
    else return (
        <div>
            <Header title={`${getFormattedDate(new Date(initData.date))} 기록`}
                    leftChild={<Button text={"< 뒤로 가기"} onClick={() => navigate(-1)}/>}
                    rightChild={<Button text={"수정하기"} type={"positive"}
                                        onClick={() => navigate(`/edit/${id}`)}/>}/>
            <Viewer initData={initData}/>
        </div>
    )
}

export default Diary;