import "../css/Editor.css";
import {useEffect, useState} from "react";
import {emotionList, getFormattedDate} from "../util.jsx";
import {useNavigate} from "react-router-dom";
import Button from "./Button.jsx";
import EmotionItem from "./EmotionItem.jsx";

const Editor = ({initData, onSubmit}) => {
    let [diary, setDiary] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: ''
    });
    let navigate = useNavigate();

    useEffect(() => {
        if(initData) {
            setDiary({...initData, date: getFormattedDate(new Date(initData.date))});
        }
    }, [initData]);

    return (
        <div className={'Editor'}>
            <h4>오늘의 날짜 </h4>
            <div className={'input_wrapper'}>
                <input type={'date'} value={diary.date}
                       onChange={e => setDiary({...diary, date: e.target.value})}/>
            </div>
            <div className={'editor_section'}>
                <h4>오늘의 감정</h4>
                <div className={'input_wrapper emotion_list_wrapper'}>
                    {
                        emotionList.map(it => (
                            <EmotionItem key={it.id} {...it}
                                         onClick={() => setDiary(diary =>  ({...diary, emotionId: it.id}))}
                                         isSelected={diary.emotionId === it.id}/>
                        ))
                    }
                </div>
            </div>
            <div className={'editor_section'}>
                <h4>오늘의 일기</h4>
                <div className={'input_wrapper'}>
                    <textarea placeholder={'오늘은 어땠나요?'} value={diary.content}
                              onChange={e => setDiary({...diary, content: e.target.value})}/>
                </div>
            </div>
            <div className={'editor_section bottom_section'}>
                <Button text={"취소하기"} onClick={() => navigate(-1)}/>
                <Button text={"작성완료"} type={'positive'}
                        onClick={() => onSubmit(diary)}/>
            </div>
        </div>
    )
}

export default Editor;