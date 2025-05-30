import './css/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Edit from "./pages/Edit.jsx";
import Diary from "./pages/Diary.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import useDiaryStore from "./store/useDiaryStore.jsx";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const {setDiaries} = useDiaryStore(state => state.actions);

    useEffect(() => {
        axios.get('/api/diary/list')
            .then(resp => {
                console.log('API 응답:', resp.data);
                setDiaries(resp.data);
                setIsLoaded(true);
            });
    }, []);

    if(isLoaded) return (
        <BrowserRouter>
            <div className={"App"}>
                <Routes>
                    <Route path={"/"} element={<Home/>} />
                    <Route path={"/new"} element={<New/>} />
                    <Route path={"/edit/:id"} element={<Edit/>} />
                    <Route path={"/diary/:id"} element={<Diary/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
    else return (
        <div>데이터를 불러오고 있습니다...</div>
    )
}

export default App
