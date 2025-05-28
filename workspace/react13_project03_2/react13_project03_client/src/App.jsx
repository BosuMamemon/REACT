import './css/App.css'
import {createContext, useEffect, useReducer, useState} from "react";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Edit from "./pages/Edit.jsx";
import Diary from "./pages/Diary.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function reducer(state, action) {
    switch (action.type) {
        case 'INIT':
            return action.data;
        case 'CREATE':
            return [action.data, ...state];
        case 'DELETE':
            return state.filter(it => String(it.id) !== String(action.targetId));
        case 'UPDATE':
            return state.map(it => String(it.id) === String(action.data.id) ? action.data : it);
    }
}

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, dispatch] = useReducer(reducer, []);
    useEffect(() => {
        axios.get('/api/diary/list')
            .then(resp => {
                dispatch({
                    type: 'INIT',
                    data: resp.data.map(it => ({...it, date: new Date(it.date)}))
                })
                setIsLoaded(true);
                console.log('state after INIT: ');
                console.log(data);
            })
    }, []);

    const onCreate = async (date, content, emotionId) => {
        console.log('onCreate parameter: ');
        console.log({date, content, emotionId});
        await axios.post('/api/diary/insert', {date, content, emotionId})
            .then(resp => {
                console.log('onCreate resp: ');
                console.log(resp.data);
                dispatch({
                    type: 'CREATE',
                    data: {
                        id: resp.data.id,
                        date: new Date(resp.data.date),
                        content: resp.data.content,
                        emotionId: resp.data.emotionId,
                    }
                })
            })
    };
    const onUpdate = async (targetId, date, content, emotionId) => {
        await axios.put(`/api/diary/update`, {id: targetId, date, content, emotionId})
            .then(resp => {
                dispatch({
                    type: 'UPDATE',
                    data: {id: targetId, date, content, emotionId}
                })
            })

    };
    const onDelete = async targetId => {
        await axios.delete(`/api/diary/delete/${targetId}`)
            .then(resp => {
                console.log("onDelete resp: ", resp);
                dispatch({
                    type: 'DELETE',
                    targetId
                })
                console.log('state after onDelete: ');
                console.log(data);
            })
    };

    if(!isLoaded) {
        return (
            <div>
                데이터를 불러오고 있습니다...
            </div>
        )
    } else {
        return (
            <DiaryStateContext value={data}>
                <DiaryDispatchContext value={{onCreate, onUpdate, onDelete}}>
                    <BrowserRouter>
                        <div className={'App'}>
                            <Routes>
                                <Route path={'/'} element={<Home />} />
                                <Route path={'/new'} element={<New />} />
                                <Route path={'/edit/:id'} element={<Edit />} />
                                <Route path={'/diary/:id'} element={<Diary />} />
                            </Routes>
                        </div>
                    </BrowserRouter>
                </DiaryDispatchContext>
            </DiaryStateContext>
        )
    }
}

export default App;
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();
