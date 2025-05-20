import "../css/DiaryItem.css";
import {getEmotionImgById} from "../util.jsx";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";

const DiaryItem = ({id, date, content, emotionId}) => {
    const navigate = useNavigate();

    const goEdit = () => {
        navigate(`/edit/${id}`);
    }

    return (
        <div className={"DiaryItem"}>
            <div>
                <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`}/>
            </div>
            <div className={"info_section"}>
                <div className={"date_wrapper"}>
                    {new Date(date).toLocaleDateString()}
                </div>
                <div className={"content_wrapper"}>
                    {content.slice(0, 25)}
                </div>
            </div>
            <div className={"button_section"}>
                <Button text={"수정하기"} onClick={goEdit}></Button>
            </div>
        </div>
    )
}

export default DiaryItem;