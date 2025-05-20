
import './css/App.css'
import {Route, Routes} from "react-router-dom";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import Edit from "./pages/Edit.jsx";
import Home from "./pages/Home.jsx";
import React, {useEffect, useReducer, useRef, useState} from "react";

const mockData = [
    {
        id: "mock1",
        date: new Date().getTime() - 1,
        content: "mock1",
        emotionId: 1,
    },
    {
        id: "mock2",
        date: new Date().getTime() - 2,
        content: "mock2",
        emotionId: 2,
    },
    {
        id: "mock3",
        date: new Date().getTime() - 3,
        content: "mock3",
        emotionId: 3,
    },
];

function reducer(state, action) {
    switch (action.type) {
        case 'INIT':
            return action.data;
        case 'CREATE':
            return [action.data, ...state];
        case "UPDATE":
            return state.map(it => (String(it.id) === String(action.data.id) ? {...action.data} : it));
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
        dispatch({type : 'INIT', data : mockData});
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
    }
    //수정
    const onUpdate = (targetId, date, content, emotionId) => {
        dispatch({
            type: "UPDATE",
            data: {
                id: targetId,
                date: new Date(date),
                content,
                emotionId
            }
        })
    }
    //삭제
    const onDelete = (targetId) => {
    }

    if(!isDataLoaded) {
        return <div>데이터를 불러오는 중입니다.</div>
    } else {
        return(
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
        )
    }
}

export default App
