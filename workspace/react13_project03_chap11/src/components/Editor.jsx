import "../css/Editor.css";
import Button from "./Button.jsx";
import {emotionList, getFormattedDate} from "../util.jsx";
import EmotionItem from "./EmotionItem.jsx";
import {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Editor = ({initData, onSubmit}) => {
    const [state, setState] = useState({
        date : getFormattedDate(new Date()),
        emotionId : 3,
        content : ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        if(initData) {
            setState({...initData, date: getFormattedDate(new Date(initData.date))});
            console.log("init State: ");
            console.log(state);
        }
    }, [initData]);

    const handleSubmit = () => {
        console.log("state.date: ")
        console.log(state.date)
        onSubmit({...state, date: new Date(state.date).getTime()});
    }
    const handleChangeDate = (e) => {
        setState({...state, date: e.target.value});
        console.log("change Date: ");
        console.log(state);
    }
    const handleChangeContent = (e) => {
        setState({...state, content: e.target.value});
    }
    // useCallback: 컴포넌트가 리렌더될 때 내부에 작성된 함수를 다시 생성하지 않도록 하는 메모라이제이션 훅
    const handleChangeEmotion = useCallback(emotionId => {
        setState(state =>  ({...state, emotionId: emotionId}))
    }, [])
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className={'Editor'}>
            <h4>오늘의 날짜 </h4>
            <div className={'input_wrapper'}>
                <input type={'date'} value={state.date} onChange={handleChangeDate}/>
            </div>
            <div className={'editor_section'}>
                <h4>오늘의 감정</h4>
                <div className={'input_wrapper emotion_list_wrapper'}>
                    {
                        emotionList.map(it => (
                            <EmotionItem key={it.id} {...it} onClick={handleChangeEmotion}
                                         isSelected={state.emotionId === it.id}/>
                        ))
                    }
                </div>
            </div>
            <div className={'editor_section'}>
                <h4>오늘의 일기</h4>
                <div className={'input_wrapper'}>
                    <textarea placeholder={'오늘은 어땠나요?'} value={state.content} onChange={handleChangeContent}/>
                </div>
            </div>
            <div className={'editor_section bottom_section'}>
                <Button text={"취소하기"} onClick={handleGoBack}/>
                <Button text={"작성완료"} type={'positive'} onClick={handleSubmit}/>
            </div>
        </div>
    )
}
export default Editor;