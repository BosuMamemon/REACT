import './css/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Edit from "./pages/Edit.jsx";
import Diary from "./pages/Diary.jsx";
import {useEffect, useState} from "react";
import useDiaryStore from "./store/useDiaryStore.jsx";
import axios from "axios";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const {setDiaries} = useDiaryStore(state => state.actions);

    useEffect(() => {
        const fetchDiaries = async () => {
            try {
                const response = await axios.get('/api/diary/list');
                setDiaries(response.data);
                setIsLoaded(true);
            } catch (err) {
                console.error('데이터 로딩 실패:', err);
                setError(err.message);
                setIsLoaded(true);
            }
        };

        fetchDiaries();
    }, [setDiaries]);



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
    else if(error) return (
        <div>데이터 로딩 중 오류가 발생했습니다: {error}</div>
    )
    else return (
        <div>데이터를 불러오고 있습니다...</div>
    )
}

export default App
