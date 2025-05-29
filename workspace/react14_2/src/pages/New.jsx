import Button from "../components/Button.jsx";
import Header from "../components/Header.jsx";
import Editor from "../components/Editor.jsx";
import {useNavigate} from "react-router-dom";

const New = () => {
    let navigate = useNavigate();

    return (
        <div>
            <Header title={'새 일기 쓰기'}
                    leftChild = {<Button text={'< 뒤로 가기'} onClick={() => navigate(-1)}/>}/>
            <Editor/>
        </div>
    )
}

export default New;