import './css/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import Home from "./pages/Home.jsx";
import React, {useEffect, useReducer, useRef, useState} from "react";
import {setPageTitle} from "./util.jsx";

function reducer(state, action) {
    switch (action.type) {
        case 'INIT':
            return action.data;
        case 'CREATE': {
            let newState = [action.data, ...state];
            localStorage.setItem('diary', JSON.stringify(newState));
            return newState;
        }
        case "UPDATE": {
            let newState = state.map(it => (String(it.id) === String(action.data.id) ? {...action.data} : it));
            localStorage.setItem('diary', JSON.stringify(newState));
            return newState;
        }
        case "DELETE": {
            let newState = state.filter(it => it.id !== action.targetId);
            localStorage.setItem('diary', JSON.stringify(newState));
            return newState;
        }
        default:
            return state;
    }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [data, dispatch] = useReducer(reducer, [])
    const idRef = useRef(0);

    useEffect(() => {
        const rawData = localStorage.getItem("diary");
        if(!rawData) {
            setIsDataLoaded(true);
            return;
        }

        const localData = JSON.parse(rawData);
        if(localData.length === 0) {
            setIsDataLoaded(true);
            return ;
        }

        localData.sort((a,b)=>Number(b.id) - Number(a.id));  // 최신순 id 내림차순
        idRef.current = localData[0].id + 1;
        dispatch({
                type : "INIT",
                data: localData
            }
        );
        setIsDataLoaded(true);
    }, [])

    //추가
    const onCreate = (date, content, emotionId) => {
        dispatch(
            {
                type : "CREATE",
                data : {
                    id : idRef.current++,
                    date : new Date(date).getTime(),
                    content,
                    emotionId,
                }
            }
        );
        alert("일기를 등록하였습니다.");
    }
    //수정
    const onUpdate = (targetId, date, content, emotionId) => {
        dispatch({
            type: "UPDATE",
            data: {
                id: targetId,
                date: new Date(date).getTime(),
                content,
                emotionId
            }
        })
        alert("일기를 수정하였습니다.");
    }
    //삭제
    const onDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId
        })
        alert("일기를 삭제하였습니다.");
    }

    useEffect(() => {
        setPageTitle(`정현민의 감정 일기장`);
    }, []);

    if(!isDataLoaded) {
        return <div>데이터를 불러오는 중입니다.</div>
    } else {
        return(
            <BrowserRouter>
                <DiaryStateContext.Provider value={data}>
                    <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
                        <div className='App'>
                            <Routes>
                                <Route path={'/'} element={<Home/>} />
                                <Route path={'/new'} element={<New/>} />
                                <Route path={'/diary/:id'} element={<Diary/>} />
                                <Route path={'/edit/:id'} element={<Edit/>} />
                            </Routes>
                        </div>
                    </DiaryDispatchContext.Provider>
                </DiaryStateContext.Provider>
            </BrowserRouter>
        )
    }
}

export default App
