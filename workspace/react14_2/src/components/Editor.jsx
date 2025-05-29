import "../css/Editor.css";
import useDiaryStore from "../store/useDiaryStore.jsx";
import {useCallback, useEffect, useState} from "react";
import {emotionList, getFormattedDate} from "../util.jsx";
import {useNavigate} from "react-router-dom";
import Button from "./Button.jsx";
import EmotionItem from "./EmotionItem.jsx";

const Editor = ({initData}) => {
    let diaries = useDiaryStore(state => state.diaries);
    let [diary, setDiary] = useState({
        id: diaries.length,
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: ''
    });
    let {createDiary} = useDiaryStore(state => state.actions);

    const handleChangeEmotion = useCallback(emotionId => {
        setDiary(diary =>  ({...diary, emotionId: emotionId}))
    }, [])

    let navigate = useNavigate();

    useEffect(() => {
        if(initData) {
            setDiary({...initData, date: getFormattedDate(new Date(initData.date))});
        }
    }, [initData]);
    useEffect(() => {
        console.log(diaries);
    }, [diaries]);

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
                                         onClick={handleChangeEmotion}
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
                        onClick={() => createDiary({...diary, date: new Date(diary.date)})}/>
            </div>
        </div>
    )
}

export default Editor;