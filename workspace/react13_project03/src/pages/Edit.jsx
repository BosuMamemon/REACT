import Header from "../component/Header.jsx";
import Editor from "../component/Editor.jsx";
import Button from "../component/Button.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import {DiaryDispatchContext} from "../App.jsx";
import useDiary from "../hooks/useDiary.jsx";

const Edit = () => {
    const navigate = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    // useParams: 스프링부트의 PathVariable이랑 비슷한 기능의 훅임
    const {id} = useParams();
    const data = useDiary(id);

    const goBack = () => {
        navigate(-1);
    }
    const onClickDelete = () => {
        if(confirm("이 일기를 삭제할까요?")) {
            onDelete(id);
            navigate("/");
        }
    }
    const onSubmit = (data) => {
        if(confirm("이대로 수정할까요?")) {
            const {date, content, emotionId} = data;
            onUpdate(id, date, content, emotionId);
            navigate("/", {replace: true});
        }
    }

    return (
        <div>
            <Header title={"일기 수정하기"}
                    leftChild={<Button text={"< 뒤로가기"} onClick={goBack}/>}
                    rightChild={<Button text={"삭제"} type={"negative"} onClick={onClickDelete}/>}/>
            <Editor initData={data} onSubmit={onSubmit}/>
        </div>
    )
}

export default Edit;