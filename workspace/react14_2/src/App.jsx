import './css/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";

function App() {

    return (
        <BrowserRouter>
            <div className={"App"}>
                <Routes>
                    <Route path={"/"} element={<Home/>} />
                    <Route path={"/new"} element={<New/>} />
                    {/*<Route path={"/diary/:id"} element={<Diary/>} />*/}
                    {/*<Route path={"/edit/:id"} element={<Edit/>} />*/}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
