import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Routes} from "react-router-dom";
import Insert from "./route/Insert.jsx";
import Update from "./route/Update.jsx";
import View from "./route/View.jsx";
import Home from "./route/Home.jsx";
import React, {useEffect, useReducer, useRef} from "react";
import axios from "axios";

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT':
            return action.data;
        case 'CREATE':
            return [action.data, ...state];
        case "UPDATE":
            return state.map(it => (String(it.id) === String(action.data.id) ? {...action.data} : it));
        case "DELETE":
            return state.filter(it => it.id !== action.targetId);
        default:
            return state;
    }
}

function App() {
    let [data, dispatch] = useReducer(reducer, []);
    let idRef = useRef(data.length);

    useEffect(() => {
        axios.get("/api/diary/list").then(res => )
    }, [])

    let handleCreate = (date, content, emotionId) => {
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
    let handleUpdate = (targetId, date, content, emotionId) => {
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
    let handleDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId
        })
        alert("일기를 삭제하였습니다.");
    }

    return (
        <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider value={{handleCreate, handleUpdate, handleDelete}}>
                <div className={"App"}>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/insert"} element={<Insert />} />
                        <Route path={"/update/:id"} element={<Update />} />
                        <Route path={"/view/:id"} element={<View />} />
                    </Routes>
                </div>
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    )
}

export default App;
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
