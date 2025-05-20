import Header from "../component/Header.jsx";
import Button from "../component/Button.jsx";
import Editor from "../component/Editor.jsx";
import {useContext} from "react";
import {DiaryDispatchContext} from "../App.jsx";
import {useNavigate} from "react-router-dom";

export default function New() {
    // DiaryStateContext에서 onCreate가져와라
    const {onCreate} = useContext(DiaryDispatchContext);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const onSubmit = (data) => {
        console.log("onSubmit: ");
        console.log(data);
        const {date, content, emotionId} = data;
        onCreate(date, content, emotionId);
        navigate("/");
    }

    return (
        <div>
            <Header title={'새 일기 쓰기'}
                    leftChild = {<Button text={'< 뒤로 가기'} onClick={goBack}/>}/>
            <Editor onSubmit={onSubmit} />
        </div>
    );
}