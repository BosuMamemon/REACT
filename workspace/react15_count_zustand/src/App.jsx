import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./component/Counter.jsx";

function App() {
    return (
        <div className={'container mt-5'}>
            <h3>Zustand로 상태 관리(Count)</h3>
            <Counter/>
        </div>
    )
}

export default App;
