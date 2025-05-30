import Header from "../components/Header.jsx";
import Editor from "../components/Editor.jsx";
import Button from "../components/Button.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {DiaryDispatchContext} from "../App.jsx";
import useDiary from "../hooks/useDiary.jsx";
import {setPageTitle} from "../util.jsx";

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
            navigate("/", {replace: true});
        }
    }
    const onSubmit = (data) => {
        if(confirm("이대로 수정할까요?")) {
            console.log("onSubmit: ");
            console.log(data);
            const {date, content, emotionId} = data;
            onUpdate(id, date, content, emotionId);
            navigate("/", {replace: true});
        }
    }

    useEffect(() => {
        setPageTitle(`${id}번 일기 수정하기`)
    }, []);

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