import './css/App.css';
import BoardList from "./component/BoardList.jsx";
import BoardForm from "./component/BoardForm.jsx";
import {useRef, useState} from "react";

function App() {
    let [thread, setThread] = useState([{
        id: 0,
        title: "test_title",
        content: "test_content",
        regdate: new Date()
    }]);
    let idRef = useRef(0);

    let threadSubmit = (formData) => {
        idRef.current += 1;
        setThread([...thread, {id: idRef.current, title: formData.title, content: formData.content, regdate: new Date()}])
    }

    return (
        <div>
            <h1>React10 Board</h1>
            <hr/>
            <BoardForm threadSubmit={threadSubmit}/>
            <hr/>
            <BoardList thread={thread}/>
        </div>
    )
}

export default App;
